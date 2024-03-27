import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductAll from "./page/ProductAll";
import Login from "./page/Login";
import ProductDetail from "./page/ProductDetail";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div>
      <Navbar />
      {/* 페이지 3장 안에 모두 네비게이션 바를 만들어도 되나, 코드 중복! */}
      {/* 따라서 위의 <Navbar /> 밑에 페이지 3장 배치 */}
      <Routes>
        <Route path="" element={<ProductAll />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        {/* Restful Route의 규칙으로 path 이름을 지음 */}
        {/* http://localhost:3001/product/1 이런 식으로 테스트해보자 */}
      </Routes>
    </div>
  );
}
