import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import About from "./components/About";
import Services from "./components/Services";
import NavbarComponent from "./components/Navbar";

const RouterComponent = () => {
  const [currentPage, setCurrentPage] = useState("");
  useEffect(() => {
    setCurrentPage(window.location.pathname);
  }, []);

  return (
    <BrowserRouter>
      {currentPage === "/" ||
      currentPage === "/about" ||
      currentPage === "/services" ? (
        <NavbarComponent />
      ) : (
        <h1>Navbar not found</h1>
      )}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route
          path="*"
          element={
            <div>
              <h1>Ops! page not found</h1>
              <p>seems that this page dosen't exist</p>
              <Link to="/">Back to home</Link>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterComponent;
