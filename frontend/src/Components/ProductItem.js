import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
  return (
    <Card border="secondary" className="p-3 my-3 rounded">
      {/* <h3>{product.name}</h3> */}
      <Link to={`/product/${product._id}`}>
        <Card.Img variant="top" src={`${product.image}`} />
      </Link>
      <Card.Body>
        {/* <Rating></Rating> */}
        <Link to={`/product/${product._id}`}>
          <Card.Title>{product.name}</Card.Title>
        </Link>
        <Card.Text as="div">
          <div className="my-3">
            {product.rating} Stars from {product.numReviews} reviews
          </div>
        </Card.Text>
        <Card.Text as="h3">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProductItem;
