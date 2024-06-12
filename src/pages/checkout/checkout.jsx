import React from 'react';
import { connect } from 'react-redux';
import './checkout.scss';

const CheckoutPage = ({ cartItems, clearItemFromCart, addItem, removeItem }) => {
  // Calculate the totalAmount based on the cartItems
  const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="checkout-collection">
      {cartItems.length !== 0 ? (
        <div>
          <table>
            <thead>
              <tr className="table-header">
                <td>Product</td>
                <td>Description</td>
                <td>Quantity</td>
                <td>Price</td>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((cartItem) => (
                <tr key={cartItem.id}>
                  <td>
                    <img src={cartItem.imageUrl} className="pimage" alt={cartItem.name} />
                  </td>
                  <td>{cartItem.name}</td>
                  <td>
                    <div className="quantity">
                      {/* <button onClick={() => removeItem(cartItem)}>-</button> */}
                      <span>{cartItem.quantity}</span>
                      {/* <button onClick={() => addItem(cartItem)}>+</button> */}
                    </div>
                  </td>
                  <td>${cartItem.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="total-amount">
            <h2>Total Amount: ${totalAmount}</h2>
            <div className="pay-now">Pay Now</div>
          </div>
        </div>
      ) : (
        <h1>Your cart is empty</h1>
      )}
    </div>
  );
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

export default connect(mapStateToProps)(CheckoutPage);