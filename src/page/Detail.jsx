import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const Detail = ({ list, setList }) => {
  const navigate = useNavigate();

  const params = useParams();
  console.log(params);

  const targetData = list.find(item => {
    return item.id === params.id;
  });

  const inputChange = e => {
    const { input, value } = e.target.value;
    setList({ ...list, input: value });
  };

  return (
    <>
      <div>
        <div>
          날짜
          <input value={targetData.date} onChange={inputChange} />
        </div>
        <div>
          항목
          <input value={targetData.item} onChange={inputChange} />
        </div>
        <div>
          내용
          <input value={targetData.description} onChange={inputChange} />
        </div>
        <div>
          금액
          <input value={targetData.amount} onChange={inputChange} />
        </div>
      </div>
      <button>수정</button>
      <button>삭제</button>
      <button
        onClick={() => {
          navigate("/");
        }}>
        뒤로 가기
      </button>
    </>
  );
};

export default Detail;
