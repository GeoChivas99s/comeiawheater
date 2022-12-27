import React from "react";
import Home from "pages/Home";
import City from "pages/City";
import { publicPages } from "utils/publicPages";
import { BrowserRouter , Route, Routes } from "react-router-dom";

const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={publicPages.home} element={<Home />} />
        <Route path={publicPages.city} element={<City />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRoutes;
