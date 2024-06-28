import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelopesBulk,
  faEgg,
  faBolt,
  faCalendarDays,
  faR,
  faMap,
  faGhost,
  faPersonRays,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export default function HomeMenu() {
  const navigate = useNavigate();
  return (
    <div className="content">
      <p className="homemenu">
        <p className="homemenu-categories">
          <ul className="homemenu-category" onClick={() => navigate("/penpal")}>
            <FontAwesomeIcon
              icon={faEnvelopesBulk}
              className="homemenu-category-icon"
            />
            <li className="homemenu-category-title">Pen Pal</li>
            <li className="homemenu-category-desc">
              Find & Add Global Friends
            </li>
          </ul>
          <ul className="homemenu-category" onClick={() => navigate("/boss")}>
            <FontAwesomeIcon
              icon={faGhost}
              className="homemenu-category-icon"
            />
            <li className="homemenu-category-title">Raid Bosses</li>
            <li className="homemenu-category-desc">Landorus in 5-star Raids</li>
          </ul>
          <ul className="homemenu-category" onClick={() => navigate("/egg")}>
            <FontAwesomeIcon icon={faEgg} className="homemenu-category-icon" />
            <li className="homemenu-category-title">Egg Hatches</li>
            <li className="homemenu-category-desc">Season: Shared Skies</li>
          </ul>
          <ul
            className="homemenu-category"
            onClick={() => navigate("/research")}
          >
            <FontAwesomeIcon icon={faMap} className="homemenu-category-icon" />
            <li className="homemenu-category-title">Field Research</li>
            <li className="homemenu-category-desc">Shared Skies</li>
          </ul>
        </p>
        <p className="homemenu-categories">
          <ul className="homemenu-category" onClick={() => navigate("/raid")}>
            <FontAwesomeIcon icon={faBolt} className="homemenu-category-icon" />
            <li className="homemenu-category-title">Raid NOW</li>
            <li className="homemenu-category-desc">Join & Host Global Raids</li>
          </ul>
          <ul className="homemenu-category" onClick={() => navigate("/event")}>
            <FontAwesomeIcon
              icon={faCalendarDays}
              className="homemenu-category-icon"
            />
            <li className="homemenu-category-title">Events</li>
            <li>June Events</li>
          </ul>
          <ul className="homemenu-category" onClick={() => navigate("/shiny")}>
            <FontAwesomeIcon
              icon={faPersonRays}
              className="homemenu-category-icon"
            />
            <li className="homemenu-category-title">Shiny Pokémon</li>
            <li className="homemenu-category-desc">GO Tour 2024</li>
          </ul>
          <ul className="homemenu-category">
            <FontAwesomeIcon icon={faR} className="homemenu-category-icon" />
            <li className="homemenu-category-title">Rocket Lineups </li>
            <li className="homemenu-category-desc">
              World of Wonder: Taken Over
            </li>
          </ul>
        </p>
      </p>
    </div>
  );
}
