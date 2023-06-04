import React, { useState } from "react";

function Test() {
  const [Content, setContent] = useState("");
  const [ContentList, setContentList] = useState([]);

  const onSubmit = () => {
    let TempArr = [...ContentList];
    TempArr.push(Content);
    setContentList([...TempArr]);
    setContent("");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      {ContentList.map((content, idx) => (
        <div
          key={idx}
          style={{
            width: "100%",
            marginLeft: "1rem",
          }}
        >
          내용: {content}
          <hr />
        </div>
      ))}
      <input
        type="text"
        value={Content}
        onChange={(e) => {
          setContent(e.currentTarget.value);
        }}
      />
      <button
        onClick={() => {
          onSubmit();
        }}
        style={{ marginTop: "1rem" }}
      >
        Submit
      </button>
    </div>
  );
}
export default Test;

/* <div style={{ color: "yellow" }}>
      <h1 className="test">
        Test 컴포넌트 입니다
        <br />
        {Temp}
        {Arr.map((ele, idx) => {
          return (
            <div key={idx}>
              <p>{ele}</p>
              <p>{idx}</p>
            </div>
          );
        })}
      </h1>
    </div> */

// useState 배열이 올 때

// function Test(_props) {
//     const [Temp, setTemp] = useState([]);
//     const [Number, setNumber] = useState(0);
//     return (
//       <>
//         <h1 className="test"> Test component!</h1>
//         <p>버튼을 눌러봐</p>
//         {Temp.map((ele, idx) => {
//           return <p key={idx}>{ele}</p>;
//         })}
//         <button
//           onClick={() => {
//             let arr = []; //빈배열 arr을 선언
//             arr = [...Temp]; //스프레드신택스 사용해서 복사 -> arr배열에 할당 (arr배열은 Temp배열의 요소 가지게 됨)
//             arr.push(Number); //Number변수를 arr에 추가
//             setNumber(Number + 1); //1씩 증가하게 상태없뎃
//             setTemp([...arr]); //여기 arr이 와도 되던데...
//           }}
//         >
//           증가
//         </button>
//       </>
//     );
//   }
