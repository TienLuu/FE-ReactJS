import React from "react";
import ItemProduct from "./ItemProduct";

export default function ListProduct() {
  return (
    <div id="smartphone" className="container-fluid pt-5 pb-5">
      <h1 className="text-white text-center">BEST SMARTPHONE</h1>
      <div className="row">
        <ItemProduct />
        <ItemProduct />
        <ItemProduct />
        <ItemProduct />
      </div>
    </div>
  );
}
