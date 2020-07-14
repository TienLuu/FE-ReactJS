import React, { useState } from "react";
import data from "./data.json";
import ListProduct from "./ListProduct";
import Modal from "./Modal";

function LiftingStateUp() {
  const [listProduct] = useState(data);
  const [productDetails, setProductDetails] = useState(data[0]);
  const [cartItems, setCartItems] = useState([]);

  const handleProductDetails = (product) => {
    setProductDetails(product);
  };

  const handleAddToCart = (product) => {
    let newCartItems = [...cartItems];
    let alreadyInCart = false;

    newCartItems.forEach((item) => {
      if (item.maSP === product.maSP) {
        item.quantity++;
        alreadyInCart = true;
      }
    });

    if (!alreadyInCart) {
      newCartItems.push({ ...product, quantity: 1 });
    }

    setCartItems(newCartItems);
  };

  const handleDecreaseQuantity = (product) => {
      let newCartItems = [...cartItems];

      newCartItems.forEach((item) => {
        if (item.maSP === product.maSP) {
          item.quantity--;
        }
      });

      setCartItems(newCartItems);
  };

  const handleRemoveItemFromCart = (product) => {
    let newCartItems = [...cartItems];

    setCartItems(newCartItems.filter((item) => item.maSP !== product.maSP));
  };

  return (
    <div>
      <h3 className="title text-center text-dark pb-5 pt-3">
        Bài tập giỏ hàng
      </h3>
      <div className="container">
        <button
          className="btn btn-danger"
          data-toggle="modal"
          data-target="#modelId"
        >
          Giỏ hàng (0)
        </button>
      </div>
      <ListProduct
        listProduct={listProduct}
        teachnicalDetails={handleProductDetails}
        addToCart={handleAddToCart}
      />
      <Modal
        cartItems={cartItems}
        increaseQuantity={handleAddToCart}
        decreaseQuantity={handleDecreaseQuantity}
        removeItemFromCart={handleRemoveItemFromCart}
      />
      <div className="row">
        <div className="col-sm-5">
          <img className="img-fluid" src={productDetails.hinhAnh} alt="" />
        </div>
        <div className="col-sm-7">
          <h3>Thông số kỹ thuật</h3>
          <table className="table">
            <tbody>
              <tr>
                <td>Màn hình</td>
                <td>{productDetails.manHinh}</td>
              </tr>
              <tr>
                <td>Hệ điều hành</td>
                <td>{productDetails.heDieuHanh}</td>
              </tr>
              <tr>
                <td>Camera trước</td>
                <td>{productDetails.cameraTruoc}</td>
              </tr>
              <tr>
                <td>Camera sau</td>
                <td>
                  {productDetails.cameraTruoc} && {productDetails.cameraSau}
                </td>
              </tr>
              <tr>
                <td>RAM</td>
                <td>{productDetails.ram}</td>
              </tr>
              <tr>
                <td>ROM</td>
                <td>{productDetails.rom}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default LiftingStateUp;
