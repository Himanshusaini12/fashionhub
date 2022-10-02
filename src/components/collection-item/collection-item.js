import React from "react";
import CustomButton from "../custome-button/custome-button";
import "../collection-item/collection-item.scss";

const CollectionItem = ({ id, name, price, imageUrl }) => (
  <div className="collection-item">
    <div
      className="image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="collection-footer">
      <div className="name">{name}</div>
      <div className="price">{price}</div>
    </div>
    <CustomButton>ADD TO CART</CustomButton>
  </div>
);
export default CollectionItem;
