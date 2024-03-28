import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { Container, Row, Col } from "react-bootstrap";

export default function ProductAll() {
  const [productList, setProductList] = useState([]);

  const getProducts = async () => {
    let url = new URL("http://localhost:3004/products");
    let response = await fetch(url);
    let data = await response.json();
    // console.log(data);
    setProductList(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <Container>
        <Row>
          {/* MAX : 12 */}
          {productList.map((menu, index) => {
            return (
              <Col key={index} lg={3} md={4} sm={6} xs={12}>
                {/* 화면에 따른 반응형 */}
                <ProductCard item={menu} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}
