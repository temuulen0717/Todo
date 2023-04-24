import React from "react";
import {Routes, Route, BrowserRouter, Link, createBrowserRouter, createRoutesFromElements, RouterProvider, Outlet} from "react-router-dom"
import "./Navbar.css"; 
import About from "../Pages/About"

function Navbar() {
  return(
    <div className="Navbar">
      <ul className="NavItem">
        <a href="#" className="Todo"><h4>ToDo</h4></a>
      </ul>
    </div>
  )
}

export default Navbar
