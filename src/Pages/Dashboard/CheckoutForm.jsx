import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../CustomHook/useAxiosSecure";
import useCart from "../../CustomHook/useCart";
import { AuthContext } from "../../Provider/AuthProvider";

const CheckoutForm = () => {
  const { user } = useContext(AuthContext);
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const axiosSecure = useAxiosSecure();
  const [cart] = useCart();
  const totalPrice = parseFloat(
    cart.reduce((total, item) => total + item.price, 0).toFixed(2)
  );

  useEffect(() => {
    axiosSecure
      .post("/create-payment-intent", { price: totalPrice })
      .then((res) => {
        setClientSecret(res.data.clientSecret);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Failed to create payment intent:", error);
        setError("Failed to initialize payment. Please try again.");
        setIsLoading(false);
      });
  }, [axiosSecure, totalPrice]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    setIsProcessing(true);

    const card = elements.getElement(CardElement);
    if (!card) {
      setError("Payment information is incomplete.");
      setIsProcessing(false);
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setError(error.message);
      setIsProcessing(false);
    } else {
      setError("");
      console.log("Payment method created:", paymentMethod);
      // Further processing (e.g., confirm payment intent)
      setIsProcessing(false);
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonyms",
            name: user?.displayName || "anonyms",
          },
        },
      });

    if (confirmError) {
      console.log(confirmError);
    } else {
      console.log("paymentIntent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        setTransactionId(paymentIntent.id);

        const payment = {
          transactionId: paymentIntent.id,
          email: user.email,
          price: totalPrice,
          date: new Date(),
          cartId: cart.map((item) => item._id),
          menuId: cart.map((item) => item.menuId),
        };
        const res = await axiosSecure.post("/payments", payment);
        console.log("payments", res);
      }
    }
  };

  if (isLoading) {
    return <p>Loading payment details...</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-screen-sm mx-auto mt-36">
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      {error && <p className="text-red-600">{error}</p>}
      <button type="submit" disabled={!stripe || !clientSecret || isProcessing}>
        {isProcessing ? "Processing..." : "Pay"}
      </button>
      <p className="text-red-500">{error}</p>
      <p className="text-green-500">{transactionId}</p>
    </form>
  );
};

export default CheckoutForm;
