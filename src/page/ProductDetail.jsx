import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  let { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getProductDetail = async () => {
      let url = new URL(`https://my-json-server.typicode.com/redhero8830/shopping-mall-server/products/${id}`);
      const response = await fetch(url);
      const data = await response.json();
      // console.log(data);
      setProduct(data);
    };
    getProductDetail();
  }, [id]); //props로 { id }를 넘기거나, useParams()의 id를 갖고와도 의존성 불안정..

  // eslint-disable-next-line react-hooks/exhaustive-deps
  return (
    <Container>
      <Row>
        <Col>
          <img src={product?.img} alt="img" />
        </Col>
        <Col>
          <h2>{product?.title}</h2>
          <h3>{product?.price}</h3>
          <h4>{product?.size}</h4>
        </Col>
      </Row>
    </Container>
  );
}
