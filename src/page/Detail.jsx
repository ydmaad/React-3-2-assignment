import React, { useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { ListContext } from "../ListContext";

const DetailWrap = styled.div`
  background-color: black;
  color: white;
  margin: 20px;
  padding: 20px;
  border-radius: 5px;
`;

const Detail = () => {
  const { list, setList } = useContext(ListContext);
  // console.log(list)
  const navigate = useNavigate();

  const params = useParams();
  // console.log(params);

  const targetData = list.find((item) => {
    return item.id === params.id;
  });

  const [date, setDate] = useState(targetData.date);
  const [item, setItem] = useState(targetData.item);
  const [description, setDescription] = useState(targetData.description);
  const [amount, setAmount] = useState(targetData.amount);

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleItemChange = (e) => {
    setItem(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  // 수정버튼 클릭시 수정된 값을 리스트에 저장하고 홈으로 이동
  const editList = () => {
    const newList = list.map((data) => {
      if (data.id === params.id) {
        return {
          ...data,
          date,
          item,
          description,
          amount,
        };
      } else {
        return data;
      }
    });
    console.log(newList);
    setList(newList);
    navigate("/");
  };

  // 삭제버튼 클릭시 선택된 data를 삭제하고 홈으로 이동
  const deleteList = () => {
    const newDeleteList = list.filter((data) => {
      return data.id !== params.id;
    });
    console.log(newDeleteList);
    setList(newDeleteList);
    navigate("/");
  };

  return (
    <>
      <DetailWrap>
        <div>
          <div>
            날짜
            <input value={date} onChange={handleDateChange} />
          </div>
          <div>
            항목
            <input value={item} onChange={handleItemChange} />
          </div>
          <div>
            내용
            <input value={description} onChange={handleDescriptionChange} />
          </div>
          <div>
            금액
            <input value={amount} onChange={handleAmountChange} />
          </div>
        </div>
        <button onClick={editList}>수정</button>
        <button onClick={deleteList}>삭제</button>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          뒤로 가기
        </button>
      </DetailWrap>
    </>
  );
};

export default Detail;
