import React from "react";
import { Col, Row } from "react-bootstrap";

const Category = ({ categories, filterItems }) => {
  return (
    <Row className="my-2">
      <Col sm="12" className="d-flex justify-content-center mobile">
        {categories.map((category, index) => {
          return (
            <button
              type="button"
              className="filter-btn"
              key={index}
              onClick={() => filterItems(category)}
            >
              {category}
            </button>
          );
        })}
      </Col>
    </Row>
  );
};

export default Category;
