import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
/* paging navigation */
import Pagination from "rc-pagination";
import "bootstrap/dist/css/bootstrap.css";
import "rc-pagination/assets/index.css";

export default function HomeContent() {
  const navigate = useNavigate();
  const [boardList, setBoardList] = useState([]);

  /* paging - 현재페이지, 전체 행 수, 페이지 사이즈(한 페이지당 rows 수) */
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [pageSize, setPageSize] = useState(6); // 페이지당 6개의 아이템

  const rows = [];
  for (let i = 0; i < boardList.length; i += 2) {
    rows.push(boardList.slice(i, i + 2));
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/data/HomeContent.json");
        const data = res.data || [];

        setTotalCount(data.length); // 총 데이터 개수 설정
        const startIndex = (currentPage - 1) * pageSize;
        const endIndex = currentPage * pageSize;

        setBoardList(data.slice(startIndex, endIndex)); // 현재 페이지에 해당하는 데이터만 설정
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [currentPage, pageSize]); // currentPage나 pageSize가 변경될 때마다 데이터를 다시 불러옴

  return (
    <div className="content homecontent">
      {rows.map((row, rowIndex) => (
        <ul className="homecontent-menus">
          {row.map((board, index) => {
            const actualIndex = rowIndex * 2 + index;
            return board.id ? (
              <ul key={index} className="homecontent-menu">
                <li>{board.title}</li>
                <li>{board.desc}</li>
              </ul>
            ) : (
              <p></p>
            );
          })}
        </ul>
      ))}
      <Pagination
        className="d-flex justify-content-center"
        current={currentPage}
        total={totalCount}
        pageSize={pageSize}
        onChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
}
