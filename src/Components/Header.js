import React from "react";
import { Row } from "react-bootstrap";

const Header = () => {
  return (
    <Row>
      <h1 className="text-center Title">Menu Restaurant</h1>
      <div className="justify-content-center d-flex">
        <p className="underline"></p>
      </div>
    </Row>
  );
};

export default Header;
