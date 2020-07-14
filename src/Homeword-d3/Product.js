import React from "react";
import PropTypes from 'prop-types';

Product.propTypes = {
  product: PropTypes.object.isRequired,
  technicalDetailsTransit: PropTypes.func.isRequired,
  addToCartTransit: PropTypes.func.isRequired
}

function Product(props) {
  const { product, technicalDetailsTransit, addToCartTransit } = props;

  const handleProductDetails = (product) => {
    technicalDetailsTransit(product)
  };

  const handleAddToCart = (product) => {
    addToCartTransit(product)
  };

  return (
    <div className="col-sm-4">
      <div className="card">
        <img className="card-img-top" src={product.hinhAnh} alt="PRODUCT" />
        <div className="card-body">
          <h4 className="card-title">{product.tenSP}</h4>
          <button
            className="btn btn-success"
            onClick={() => handleProductDetails(product)}
          >
            Chi tiết
          </button>
          <button className="btn btn-danger" onClick={()=> handleAddToCart(product)}>Thêm giỏ hàng</button>
        </div>
      </div>
    </div>
  );
}

export default Product;
