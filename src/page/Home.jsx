import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const HeaderStyle = styled.div`
  background-color: black;
  color: white;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 1000px;
  height: 100px;
`;

const Home = ({ list, setList }) => {
  const [seletedMonth, setSelectedMonth] = useState("");
  const [date, setDate] = useState("");
  const [item, setItem] = useState("");
  const [price, setPrice] = useState(0);
  const [contents, setContents] = useState("");

  const saveBtn = () => {
    const newList = {
      id: uuidv4(),
      date: date,
      item: item,
      amount: price,
      description: contents,
    };
    setList([...list, newList]);
  };

  const month = [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
  ];

  const navigate = useNavigate();

  return (
    <>
      <div>
        <HeaderStyle>
          <div>
            날짜
            <input
              type="number"
              value={date}
              onChange={e => setDate(e.target.value)}
            />
          </div>
          <div>
            항목
            <input
              type="text"
              value={item}
              onChange={e => setItem(e.target.value)}
            />
          </div>
          <div>
            금액
            <input
              type="number"
              value={price}
              onChange={e => setPrice(e.target.value)}
            />
          </div>
          <div>
            내용
            <input
              type="text"
              value={contents}
              onChange={e => setContents(e.target.value)}
            />
          </div>
          <button onClick={saveBtn}>저장</button>
        </HeaderStyle>
      </div>
      <div seletedMonth={seletedMonth} setSelectedMonth={setSelectedMonth}>
        {month.map((month, index) => {
          return <button key={index}>{month}</button>;
        })}
      </div>
      <div>
        {list.map(data => (
          <div
            key={data.id}
            onClick={() => {
              navigate(`/detail/${data.id}`);
            }}>
            <p>{data.date}</p>
            <p>{data.item}</p>
            <p>{data.description}</p>
            <p>{data.amount}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
