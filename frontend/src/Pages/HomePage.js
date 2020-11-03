import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import axios from "axios";
import Slider from "../Components/Slider";
import ProductItem from "../Components/ProductItem";

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios(`/api/products`);
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <Slider />
      Latest Products
      <Row>
        {products &&
          products.map((product) => (
            <Col key={product._id} md={6} lg={4} xl={3}>
              <ProductItem product={product}/>
            </Col>
            
          ))}
      </Row>
    </div>
  );
};

export default HomePage;
