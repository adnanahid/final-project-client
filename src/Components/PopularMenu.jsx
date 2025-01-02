import SectionTitle from "../SharedComponent/SectionTitle";
import MenuItem from "../SharedComponent/MenuItem";
import useMenu from "../CustomHook/useMenu";

const PopularMenu = () => {
  const [menu, loading] = useMenu();

  // Ensure menu is an array before filtering
  const popular = menu.filter((item) => item.category === "popular");

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
       <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div>
      <SectionTitle title={"From Our Menu"} subTitle={"Check it out"} />
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-screen-lg mx-auto gap-5 my-12">
        {popular.length > 0 ? (
          popular.map((menuItem) => (
            <MenuItem key={menuItem._id} item={menuItem} />
          ))
        ) : (
          <p>No popular items available at the moment.</p>
        )}
      </div>
    </div>
  );
};

export default PopularMenu;
