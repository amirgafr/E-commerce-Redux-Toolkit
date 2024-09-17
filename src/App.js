import React from "react";
import "./App.css";
import Main from "./Components/Main/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FilteredProducts from "./Components/FilteredProducts/FilteredProducts";
import SingleProduct from "./Components/FilteredProducts/SingleProduct";
import Login from "./Components/Login/Login";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.user.user);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={user ? <Main></Main> : <Login></Login>}
          ></Route>
          <Route
            path="/FilteredProducts/:type"
            element={<FilteredProducts></FilteredProducts>}
          ></Route>
          <Route
            path="/FilteredProducts/:type/:id"
            element={<SingleProduct></SingleProduct>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
