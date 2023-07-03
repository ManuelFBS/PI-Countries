import { Routes, Route, useLocation } from "react-router-dom";
import React from "react";
import { Landing, Home, Detail, Create } from "./Views/viewIndex";
import NavBar from "./Components/NavBar/NavBar";
import styled from "./App.module.css";

function App() {
  const location = useLocation();

  return (
    <div className={styled.App}>
      <div>{location.pathname !== "/" && <NavBar />}</div>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/detail/:id" element={<Detail />} />
        <Route exact path="/form" element={<Create />} />
      </Routes>
    </div>
  );
}

export default App;
