import React from "react";

export default function Boss() {
  return (
    <div className="content">
      <h1>Current Raid Boss</h1>
      <ul className="boss-warnings">
        <li>
          These are the Current Raid Bosses while Yveltal is in 5-star raids.
          Yveltal will be available until Friday, June 28, 2024, at 10 am local
          time.
        </li>
        <li className="boss-warning">
          This page does not currently support Shadow Raids. It will be
          re-tooled in the future to support Shadow Raids as well as multiple
          sets of Raids.
        </li>
      </ul>
      <input
        className="boss-search-input"
        type="text"
        placeholder="Search Raid Bosses... Try typing Rain"
      />
      <div>
        <ul className="boss-tier-1">
          <li>Tier 1</li>
          <li></li>
        </ul>
        <ul className="boss-tier-3">
          <li>Tier 3</li>
          <li></li>
        </ul>
        <ul className="boss-tier-5">
          <li>Tier 5</li>
          <li></li>
        </ul>
        <ul className="boss-tier-mega">
          <li>Mega</li>
          <li></li>
        </ul>
      </div>
    </div>
  );
}
