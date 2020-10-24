import "./App.css";
import { Routes, Route,Link/*, Redirect*/ } from "react-router-dom";
import { Home, Events, Products, Contact, NotFound } from "./pages/pages";
import { About, Service, History, Location } from "./pages/about";
import React from "react";

export default function App() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />}>
          <Route path="service" element={<Service />} />
          <Route path="history" element={<History />} />
          <Route path="location" element={<Location />} />
        </Route>
        <Route path="events" element={<Events />} />
        <Route path="products" element={<Products />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
