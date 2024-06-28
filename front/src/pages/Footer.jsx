import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <ul className="footer-private-policy">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link>Private Policy</Link>
        </li>
        <li>
          <Link>Contact</Link>
        </li>
      </ul>
      <ul className="footer-private-warning">
        <li>
          2024 © Leek Duck. All rights reserved by their respective owners.
        </li>
        <li>
          This website is not officially affiliated with Pokémon GO and is
          intended to fall under Fair Use doctrine, similar to any other
          informational site such as a wiki.
        </li>
        <li>
          Pokémon and its trademarks are ©1995-2024 Nintendo, Creatures, and
          GAMEFREAK.
        </li>
        <li>
          All images and names owned and trademarked by Nintendo, Niantic, The
          Pokémon Company, and GAMEFREAK are property of their respective
          owners.
        </li>
      </ul>
    </div>
  );
}
