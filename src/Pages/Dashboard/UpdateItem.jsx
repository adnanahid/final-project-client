import React from "react";
import SectionTitle from "../../SharedComponent/SectionTitle";
import { useLoaderData, useParams } from "react-router-dom";

const UpdateItem = () => {
  const item = useLoaderData();
  console.log(item, "adnan");
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <SectionTitle title={"Update"}></SectionTitle>
    </div>
  );
};

export default UpdateItem;
