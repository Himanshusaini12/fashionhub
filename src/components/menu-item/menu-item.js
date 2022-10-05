import React from "react";
import "../menu-item/menu-item.scss";

const MenuItem = ({ title, imageUrl, size }) => (
  <div className={`${size}  menu-item `}>
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />

    <div className="content ">
      <hi className="title">{title}</hi>
    </div>
  </div>
);

export default MenuItem;
