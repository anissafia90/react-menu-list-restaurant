import React, { useState } from "react";
import { Container } from "react-bootstrap";
import NavBar from "./Components/NavBar";
import Header from "./Components/Header";
import Category from "./Components/Category";
import Item from "./Components/Item";
import items from "./data";

function App() {
  const allCategories = ["all", ...new Set(items.map((item) => item.category))];
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  return (
    <div>
      <NavBar />
      <Container>
        <Header />
        <Category categories={categories} filterItems={filterItems} />
        <Item items={menuItems} />
      </Container>
    </div>
  );
}

export default App;
