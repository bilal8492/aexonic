import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "../src/components/Menu/Menu";

const App = () => {
  return (
    <div id="root">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Menu />} />
          {/* <Route path='/product' element={<Product />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
