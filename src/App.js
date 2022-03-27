import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "../src/components/Menu/Menu";
import Checkout from "./components/Checkout/Checkout";
import Header from "./components/Header/Header";

const App = () => {
  const [itemName, setItemName] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (id) => {
    console.log("add to cart call");
    if (cartItems?.find((x) => x.id == id)) {
      let products = [...cartItems];
      products.find((x) => x.id == id).count += 1;
      setCartItems(products);
    } else {
      let product = itemName?.find((x) => x.id === id);
      setCartItems((prev) => {
        return [...prev, { ...product, count: 1 }];
      });
    }
  };

  const removeFromCart = (id) => {
    if (cartItems?.find((x) => x.id == id)) {
      let products = [...cartItems];
      products.find((x) => x.id == id).count > 1
        ? (products.find((x) => x.id == id).count -= 1)
        : (products = products.filter((x) => x.id != id));
      setCartItems(products);
    }
  };

  const getCount = (id) => {
    if (cartItems?.find((x) => x.id == id)) {
      return cartItems?.find((x) => x.id == id).count;
    } else {
      return 0;
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://run.mocky.io/v3/9d71cb03-a9f9-4d70-bae2-9d3adaa1cfe7",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setItemName(result);
        // console.log(result.item_name)
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <div id="root">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Menu
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                getCount={getCount}
                cartItems={cartItems}
                itemName={itemName}
                clearCart={clearCart}
              />
            }
          />
          <Route
            path="/checkout"
            element={
              <Checkout
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                getCount={getCount}
                cartItems={cartItems}
                itemName={itemName}
                clearCart={clearCart}
              />
            }
          />
          {/* <Route path='/product' element={<Product />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
