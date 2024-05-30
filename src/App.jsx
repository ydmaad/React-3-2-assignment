import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Detail from "./page/Detail";
import ListProvider from "./ListContext";

const App = () => {
  return (
    <ListProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </ListProvider>
  );
};

export default App;
