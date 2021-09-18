import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faHome,
  faDog,
  faBone,
  faCog,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons"
import Button from "@restart/ui/esm/Button";
import { Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

const SideBar = () => {
    const [mobileOpen, setMobileOpen] = useState(false)
    let navClass =
        "w-72 max-w-full bg-blue-800 h-screen flex flex-col text-white fixed lg:absolute lg:sticky top-0 transition-transform transform duration-500 ease"
    if (mobileOpen) navClass += " translate-x-0"
    else navClass += " -translate-x-full lg:translate-x-0"
    return (
        <div>
            <div>
            <div className={navClass}>
      <FontAwesomeIcon
        icon={mobileOpen ? faTimes : faBars}
        onClick={() => setMobileOpen(!mobileOpen)}
        className="absolute right-0 transform translate-x-double top-0 mt-8 text-3xl text-blue-800 cursor-pointer lg:hidden"
      />
      <a href="#" className="no-underline block mt-6">
        <h3 className="text-center text-white">Tech E-commerce</h3>
      </a>
      <div className="flex-1 mt-8">
        <div className="px-8">
          <Button text="Add Food" size="sm" full />
        </div>
        <div className="mt-6">
          <Link
            to="/home"
            className="flex justify-between no-underline w-full px-8 py-3 border-l-4 text-sm transition-colors duration-200 ease-in-out hover:text-blue-400 bg-blue-900 border-blue-400"
          >
            <div className="text-white">
              <FontAwesomeIcon icon={faHome} className="mr-4 " /> Home
            </div>
          </Link>
          <Link
            to="/addProduct"
            className="flex justify-between no-underline w-full px-8 py-3 border-l-2 border-transparent text-sm transition-colors duration-200 ease-in-out hover:text-blue-400"
          >
            <div className="text-white">
              <FontAwesomeIcon icon={faDog} className="mr-4" /> Add Product
            </div>
            <Badge type="dark" text="3" />
          </Link>
          <Link
            to="/manageProduct"
            className="flex justify-between no-underline w-full px-8 py-3 border-l-2 border-transparent text-sm transition-colors duration-200 ease-in-out hover:text-blue-400"
          >
            <div className="text-white">
              <FontAwesomeIcon icon={faBone} className="mr-4" /> Manage Product
            </div>
          </Link>
          <a
            href="#"
            className="flex justify-between no-underline w-full px-8 py-3 border-l-2 border-transparent text-sm transition-colors duration-200 ease-in-out hover:text-blue-400"
          >
            <div className="text-white">
              <FontAwesomeIcon icon={faCog} className="mr-4" /> Settings
            </div>
          </a>
        </div>
       
      </div>
    </div>
        </div>
        </div>
    );
};

export default SideBar;