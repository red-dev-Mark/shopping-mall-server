import React from "react";

export default function ProductCard({ item }) {
  return (
    <div className="product-card">
      <img src={item.img} alt=""  />
      <div>{item?.choice === true ? "Consious Choice" : ""}</div>
      <div>{item.title}</div>
      <div>{item.price}</div>
      <div>{item?.new === true ? "신제품" : ""}</div>
    </div>
  );
}
