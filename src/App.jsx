import React from "react";
import Month from "./Month";
import styled from "styled-components";
import Contents from "./Contents";

const App = () => {
  const data = "Hello I'm App";

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

  return (
    <>
      <div>
        <HeaderStyle>
          <div>
            날짜
            <input type="number" />
          </div>
          <div>
            항목
            <input type="text" />
          </div>
          <div>
            금액
            <input type="number" />
          </div>
          <div>
            내용
            <input type="text" />
          </div>
          <button>저장</button>
        </HeaderStyle>
      </div>
      <Month />
      <Contents />
    </>
  );
};

export default App;
