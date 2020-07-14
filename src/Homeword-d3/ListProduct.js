import React from "react";
import Product from "./Product";
import PropTypes from 'prop-types';

ListProduct.propTypes = {
  listProduct: PropTypes.array.isRequired,
  teachnicalDetails: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired
}

function ListProduct(props) {
  const { listProduct, teachnicalDetails, addToCart } = props;

  const handleProductDetailsTransit = (product) => {
    teachnicalDetails(product);
  };

  const handleAddToCartTransit = (product) => {
    addToCart(product)
  };

  const renderProduct = () => {
    return listProduct.map((product) => {
      return (
        <Product
          key={product.maSP}
          product={product}
          technicalDetailsTransit={handleProductDetailsTransit}
          addToCartTransit={handleAddToCartTransit}
        />
      );
    });
  };

  return (
    <div className="container">
      <div className="row">{renderProduct()}</div>
    </div>
  );
}

export default ListProduct;
