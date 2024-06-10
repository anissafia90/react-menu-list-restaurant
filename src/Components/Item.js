import React from "react";
import { Col, Row, Card } from "react-bootstrap";

const Item = ({ items }) => {
  return (
    <Row>
      <Col sm="12" className="mb-3">
        {items.map((menuItem) => {
          const { id, title, img, price, desc } = menuItem;
          return (
            <Card key={id} className="d-flex flex-row menu-item my-3">
              <Card.Img src={img} alt={title} className="photo" />
              <Card.Body>
                <Card.Title className="d-flex justify-content-between">
                  <div>{title}</div>
                  <div style={{ color: "orangered" }}>{price} euro</div>
                </Card.Title>
                <Card.Text>{desc}</Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </Col>
    </Row>
  );
};

export default Item;
