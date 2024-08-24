import React, { useState } from "react";
import "./navbar.scss";

const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <nav>
      <div class="left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="" />
          <span>LamaEstate</span>
        </a>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/t">Contac</a>
        <a href="/">Agents</a>
      </div>
      <div class="right">
        <a href="/">Sign in</a>
        <a href="/" className="register">
          Sign up
        </a>
        <div class="menuIcon">
          <img src="/menu.png" alt="" onClick={()=>setOpen((prev)=>!prev)}/>
        </div>
        <div class={open? "menu active":"menu"}>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/t">Contac</a>
          <a href="/">Agents</a>
          <a href="/">Sign in</a>
          <a href="/">
            Sign up
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
