import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Link, useParams } from "react-router-dom";

const HeaderStyle = styled.div`
  background-color: black;
  color: white;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 1000px;
  height: 100px;

  border-radius: 7px;
`;

const ListStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;

  width: 1000px;
  height: 100px;

  border: 5px solid gray;
`;

const MonthBtnStyle = styled.button`
  font-size: 25px;

  background-color: ${(props) => (props.$colorChange ? "black" : "#ffc20e")};
  color: ${(props) => (props.$colorChange ? "#ffc20e" : "black")};

  align-items: center;
  justify-content: center;
  margin: 6px;
  border-radius: 5px;

  width: 15%;
  height: 70px;

  border: 2px solid #ffc20e;
`;

const WrapMonthBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  background-color: black;
  margin: 5px;
  border-radius: 5px;

  width: 1000px;
  height: 200px;
`;

const Home = ({ list, setList }) => {
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

  const month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const [clickedMonth, setClickedMonth] = useState(1);
  console.log(clickedMonth);

  return (
    <>
      <div>
        <HeaderStyle>
          <div>
            날짜
            <input
              type="number"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div>
            항목
            <input
              type="text"
              value={item}
              onChange={(e) => setItem(e.target.value)}
            />
          </div>
          <div>
            금액
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div>
            내용
            <input
              type="text"
              value={contents}
              onChange={(e) => setContents(e.target.value)}
            />
          </div>
          <button onClick={saveBtn}>저장</button>
        </HeaderStyle>
      </div>
      <WrapMonthBtn>
        <div>
          {month.map((month, index) => {
            return (
              <MonthBtnStyle key={index} $colorChange={month === clickedMonth}>
                <div onClick={() => setClickedMonth(month)}>{month}월</div>
              </MonthBtnStyle>
            );
          })}
        </div>
      </WrapMonthBtn>

      <div>
        {list.map((data) => {
          return (
            <Link key={data.id} to={`/detail/${data.id}`}>
              <ListStyle>
                <p>{data.date}</p>
                <p>{data.item}</p>
                <p>{data.description}</p>
                <p>{data.amount}</p>
              </ListStyle>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Home;
