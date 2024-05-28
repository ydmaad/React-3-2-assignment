import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Detail = ({ list, setList }) => {
  const navigate = useNavigate();

  const params = useParams();
  console.log(params);

  const targetData = list.find(item => {
    return item.id === params.id;
  });

  const [inputValue, setInputValue] = useState(targetData);

  const hangleInputChange = e => {
    setInputValue(e.target.value);
    setList([{ ...list, inputValue }]);
  };

  return (
    <>
      <div>
        <div>
          날짜
          <input value={inputValue} onChange={hangleInputChange} />
        </div>
        <div>
          항목
          <input value={inputValue} onChange={hangleInputChange} />
        </div>
        <div>
          내용
          <input value={inputValue} onChange={hangleInputChange} />
        </div>
        <div>
          금액
          <input value={inputValue} onChange={hangleInputChange} />
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
