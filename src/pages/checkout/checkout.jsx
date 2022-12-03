import React from "react";
import CartItem from "../../components/cart-item/cart-item.jsx";
import { connect } from "react-redux";
import "./../checkout/checkout.scss";
const CheckoutPag = ({ cartItems }) => (
  <div>
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>

      <div className="header-block">
        <span>Description</span>
      </div>

      <div className="header-block">
        <span>Quantity</span>
      </div>

      <div className="header-block">
        <span>Price</span>
      </div>

      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>

    {cartItems.map((cartItem) => (
      <div className="checkout">
        {cartItem.id}
        <img className="img" src={cartItem.imageUrl} alt="item" />
        <span className="name">{cartItem.name}</span>
        <span className="quantity">{cartItem.quantity}</span>
        <span className="price">{cartItem.price}</span>
      </div>
    ))}
  </div>
);

const CheckoutPage = ({
  cartItems,
  totalAmount,
  clearItemfromCart,
  addItem,
  removeItem,
}) => (
  <div className="checkout-collection">
    {cartItems.length !== 0 ? (
      <div className="collection-table">
        <table>
          <tbody>
            <tr className="table-header">
              <td>ITEM</td>
              <td>NAME</td>
              <td>PRICE</td>
              <td className="quantity">QTY</td>
            </tr>
            {cartItems.map((cartItem) => (
              <tr key={cartItem.id}>
                <td>
                  <img src={cartItem.imageUrl} className="pimage" />
                </td>
                <td className="">{cartItem.name}</td>
                <td>₹ {cartItem.price}</td>
                <td className="quantity">{cartItem.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="total-amount">
          <h2>Total Amount : ₹ {totalAmount}</h2>
          <div className="pay-now"></div>
        </div>
      </div>
    ) : (
      <h1>Cart is Empty</h1>
    )}
  </div>
);
const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});
export default connect(mapStateToProps)(CheckoutPage);
