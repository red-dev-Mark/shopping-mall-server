import React from "react";
import ProductDetail from "../page/ProductDetail";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ authenticate }) {
  return authenticate === true ? <ProductDetail /> : <Navigate to="/login" />; //Navigate -> 리다이렉트해주는 역할
}
