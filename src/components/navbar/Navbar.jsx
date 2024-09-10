import React, { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { userData } from "../../lib/dummyData";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const user = true;
  return (
    <nav>
      <div class="left">
        <Link to="/" className="logo">
          <img src="/logo.png" alt="" />
          <span>LamaEstate</span>
        </Link>
        <Link to="/">Home</Link>
        <Link to="/">About</Link>
        <Link to="/">Contac</Link>
        <Link to="/">Agents</Link>
      </div>
      <div class="right">
        {user ? (
          <div class="user">
            <img src={userData.img} alt="" />
            <span>John Doe</span>
            <Link to="/profile" className="profile">
              <div class="notification">3</div>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <Link to="/">Sign in</Link>
            <Link to="/" className="register">
              Sign up
            </Link>
          </>
        )}
        <div class="menuIcon">
          <img
            src="/menu.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div class={open ? "menu active" : "menu"}>
          <Link to="/">Home</Link>
          <Link to="/">About</Link>
          <Link to="/">Contac</Link>
          <Link to="/">Agents</Link>
          <Link to="/">Sign in</Link>
          <Link to="/">Sign up</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
