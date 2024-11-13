import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashbord from "./components/dashbord/Dashbord";
import Login from "./components/login/login";
import ContactTable from "./components/ContactTable/ContactTable";
import Sales from "./components/sales/Sales";
import ContactForm from "./components/ContactForm/ContactForm";
import HomePage from "./components/homepage/HomePage";
import AuthMiddleware from "./components/AuthMiddleware/AuthMiddleware";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <AuthMiddleware>
          <Route path="/dashbord" element={<Dashbord />} />
          <Route path="/contact" element={<ContactTable />} />
          <Route path="/Sales" element={<Sales />} />
        </AuthMiddleware>

        <Route path="/contactForm" element={<ContactForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/ContactUs" element={<ContactForm />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  </React.StrictMode>,

  document.getElementById("root")
);
