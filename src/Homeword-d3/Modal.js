import React from "react";
import PropTypes from 'prop-types';

Modal.propTypes = {
  cartItems: PropTypes.array.isRequired,
  increaseQuantity: PropTypes.func.isRequired,
  decreaseQuantity: PropTypes.func.isRequired,
  removeItemFromCart: PropTypes.func.isRequired
}

function Modal(props) {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeItemFromCart,
  } = props;

  const handleDecreaseQuantity = (product) => {
    decreaseQuantity(product);
  };

  const handleIncreaseQuantity = (product) => {
    increaseQuantity(product);
  };

  const handleRemoveItemFromCart = (product) => {
    removeItemFromCart(product);
  };

  const renderTableCart = () => {
    return cartItems.map((product) => {
      return (
        <tr key={product.maSP}>
          <td>{product.maSP}</td>
          <td>{product.tenSP}</td>
          <td>
            <img src={product.hinhAnh} width={50} alt="PRODUCT" />
          </td>
          <td>
            <button onClick={() => handleDecreaseQuantity(product)} disabled={product.quantity === 1}>-</button>
            {product.quantity}
            <button onClick={() => handleIncreaseQuantity(product)}>+</button>
          </td>
          <td>{product.giaBan}</td>
          <td>{product.giaBan * product.quantity}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => handleRemoveItemFromCart(product)}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };

  return (
    <div
      className="modal fade"
      id="modelId"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="modelTitleId"
      aria-hidden="true"
    >
      <div
        className="modal-dialog"
        style={{ maxWidth: "1000px" }}
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Giỏ hàng</h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <table className="table">
              <thead>
                <tr>
                  <th>Mã sản phẩm</th>
                  <th>tên sản phẩm</th>
                  <th>hình ảnh</th>
                  <th>số lượng</th>
                  <th>đơn giá</th>
                  <th>thành tiền</th>
                </tr>
              </thead>
              <tbody>{renderTableCart()}</tbody>
            </table>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
