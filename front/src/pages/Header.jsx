import React from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <div className="header">
      <ul className="header-main">
        <li className="header-title" onClick={() => navigate("/")}>
          Leek Duck
        </li>
        <li className="header-menu">
          <p onClick={() => navigate("/shiny")}>shiny</p>
          <p onClick={() => navigate("/raid")}>raids</p>
          <p onClick={() => navigate("/research")}>research</p>
          <p onClick={() => navigate("/rocket")}>rocket</p>
          <p>eggs</p>
          <p>events</p>
        </li>
      </ul>
    </div>
  );
}
