import React from "react";
import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <h1 className="logo">Logo</h1>
      <nav className="nav">
        <ul className="nav-list">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
