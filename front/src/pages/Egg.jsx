import React from "react";

export default function Egg() {
  return (
    <div className="content">
      <h1>Current Egg Hatches</h1>
      <p className="egg-warning">
        These are all the current egg hatches in Pokémon GO for the current
        season, Shared Skies.
      </p>
      <div className="egg-list">
        <ul>
          <h2>2 km Eggs</h2>
          <li>
            <p>
              <p className="egg-image">
                <img
                  src="../pokemon_icons/pokemon_icon_090_00_shiny.png"
                  alt=""
                />
              </p>
              <p>shellder</p>
              <p>cp 571-617</p>
            </p>
          </li>
        </ul>
      </div>
      <div className="egg-list">
        <ul>
          <h2>5 km Eggs</h2>
          <li></li>
        </ul>
      </div>
      <div className="egg-list">
        <ul>
          <h2>5 km Eggs (Adventure Sync Rewards)</h2>
          <p>
            This type of Egg is obtained from Weekly Adventure Sync Rewards.
          </p>
          <li></li>
        </ul>
      </div>
      <div className="egg-list">
        <ul>
          <h2>7 km Eggs</h2>
          <li></li>
        </ul>
      </div>
      <div className="egg-list">
        <ul>
          <h2>7 km Eggs (From Route Gift)</h2>
          <p>
            This type of Egg is obtained from the Gift exchange via Mateo at the
            end of a Route.
          </p>
          <li></li>
        </ul>
      </div>
    </div>
  );
}
