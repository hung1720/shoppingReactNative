import React from "react";
import ProductCard from "./ProductCard";
const Productlist = ({ data }) => {
  return (
    <>
      {data?.map((item) => (
        <ProductCard item={item} />
      ))}
    </>
  );
};

export default Productlist;
