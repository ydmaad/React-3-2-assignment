import React from "react";
import { useNavigate } from "react-router-dom";

const Detail = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>디테일 페이지 입니다.</div>
      <button
        onClick={() => {
          navigate("/");
        }}>
        Home으로 가자
      </button>
    </>
  );
};

export default Detail;
