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
  margin: 5px;
`;

const WrapListStyle = styled.div`
  background-color: black;
  width: 990px;
  margin: 5px;
  border-radius: 5px;
  padding: 5px;
`;

const ListStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  color: black;

  width: 970px;
  height: 100px;

  background-color: #ffc20e;
  border-radius: 10px;
  margin: 10px;
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
  const [newDate, setNewDate] = useState("");
  const [newItem, setNewItem] = useState("");
  const [newAmount, setNewAmount] = useState(0);
  const [newDescription, setNewDescription] = useState("");

  const addBtn = () => {
    const datePattern = /^\d{4}-\d{2}-\d{2}$/;
    if (!datePattern.test(newDate)) {
      alert("날짜를 YYYY-MM-DD 형식으로 입력해주세요.");
      return;
    }

    const parseAmount = parseInt(newAmount, 10);
    if (!newItem || parseAmount <= 0) {
      alert("유효한 항목과 금액을 입력해주세요.");
      return;
    }

    const newList = {
      id: uuidv4(),
      date: newDate,
      item: newItem,
      amount: parseAmount,
      description: newDescription,
    };
    setList([...list, newList]);
    setNewDate("");
    setNewItem("");
    setNewAmount("");
    setNewDescription("");
  };

  const month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const [clickedMonth, setClickedMonth] = useState(1);
  console.log(clickedMonth);

  console.log(list);

  return (
    <>
      <div>
        <HeaderStyle>
          <div>
            날짜
            <input
              type="text"
              value={newDate}
              onChange={(e) => setNewDate(e.target.value)}
            />
          </div>
          <div>
            항목
            <input
              type="text"
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
            />
          </div>
          <div>
            금액
            <input
              type="number"
              value={newAmount}
              onChange={(e) => setNewAmount(e.target.value)}
            />
          </div>
          <div>
            내용
            <input
              type="text"
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
            />
          </div>
          <button onClick={addBtn}>저장</button>
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

      <WrapListStyle>
        {list
          .filter((list) => {
            return parseInt(list.date.split("-")[1]) === clickedMonth;
          })
          .map((data) => {
            return (
              <Link key={data.id} to={`/detail/${data.id}`}>
                <ListStyle>
                  <span>{data.date}</span>

                  <span>
                    {data.item}-{data.description}
                  </span>
                  <span>{data.amount}원</span>
                </ListStyle>
              </Link>
            );
          })}
      </WrapListStyle>
    </>
  );
};

export default Home;
