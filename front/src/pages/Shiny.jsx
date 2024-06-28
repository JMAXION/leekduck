import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Shiny() {
  const [shinyList, setShinyList] = useState([]);
  const [counts, setCounts] = useState({
    owns: 0,
    registered: 0,
    released: 1146,
  });
  const [clickedItems, setClickedItems] = useState({});

  useEffect(() => {
    axios
      .get("/data/pokemonList.json")
      .then((res) => {
        setShinyList(res.data || []); // 데이터가 없을 경우 빈 배열로 초기화
        console.log(res.data); // 데이터를 성공적으로 가져온 후에 로그 출력
      })
      .catch((error) => console.log(error));
  }, []);

  const rows = [];
  for (let i = 0; i < shinyList.length; i += 5) {
    rows.push(shinyList.slice(i, i + 5));
  }

  const handleShinyClick = (index) => {
    setClickedItems((prevClickedItems) => {
      const newCount = (prevClickedItems[index] || 0) + 1;
      return { ...prevClickedItems, [index]: newCount };
    });

    // 클릭 횟수에 따라 owns와 registered 업데이트
    setCounts((prevCounts) => {
      const isOwnsUpdate = (clickedItems[index] || 0) % 2 === 0;
      return {
        ...prevCounts,
        owns: isOwnsUpdate ? prevCounts.owns + 1 : prevCounts.owns,
        registered: !isOwnsUpdate
          ? prevCounts.registered + 1
          : prevCounts.registered,
      };
    });
  };

  return (
    <div>
      <ul className="shiny-information">
        <h1>✨ Shiny Checklist</h1>
        <li>
          Nickname:{" "}
          <input
            type="text"
            placeholder="?"
            className="shiny-information-nickname-input"
          />
        </li>
        <table className="shiny-register-table">
          <thead>
            <tr>
              <th>owns</th>
              <th>registered</th>
              <th>released</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{counts.registered}</td>
              <td>{counts.owns}</td>
              <td>{counts.released}</td>
            </tr>
          </tbody>
        </table>
      </ul>
      {rows.map((row, rowIndex) => (
        <ul className="shiny" key={rowIndex}>
          {row.map((pokemon, index) => {
            const actualIndex = rowIndex * 5 + index;
            return pokemon.id ? (
              <li
                key={actualIndex}
                className="shiny-pokemon"
                onClick={() => handleShinyClick(actualIndex)}
                style={{
                  borderColor: clickedItems[actualIndex] === 1 ? "green" : "",
                  backgroundColor:
                    clickedItems[actualIndex] === 2 ? "green" : "",
                }}
              >
                <div className="shiny-pokemon-desc">
                  <p>{pokemon.name}</p>
                  <p className="pokemon-id">#{pokemon.id}</p>
                </div>
                <img src={pokemon.img} alt={`Pokemon ${pokemon.id}`} />
              </li>
            ) : (
              <p key={`empty-${actualIndex}`}></p>
            );
          })}
        </ul>
      ))}
    </div>
  );
}
