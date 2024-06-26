import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Investment from "../Pages/Investment";
import Faq from "../Pages/Faq";
import Statistics from "../Pages/Statistics";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Dashboard from "../Pages/Dashboard";
import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route index element={<Home />} />;
        <Route path="/about" element={<About />} />;
        <Route path="/investments" element={<Investment />} />;
        <Route path="/faq" element={<Faq />} />;
        <Route path="/statistics" element={<Statistics />} />;
        <Route path="/signin" element={<Login />} />;
        <Route path="/register" element={<Register />} />;
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
