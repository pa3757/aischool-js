import React, { useState } from "react";

const App3 = () => {
  const [num, setNum] = useState(["오이", "딸기", "귤"]);
  console.log(num);
  console.log(num[0]);

  num[3] = "복숭아";
  console.log(num);
  // push
  num.push("배");
  num.push("오렌지", "포도");
  console.log(num);
  // 요소 삭제 : poop
  num.pop();
  console.log(num);
  // 특정 위치의 데이터 삭제 : splice
  // .splice('시작인덱스',제거할 개수, 대체값)
  num.splice(3, 2, "망고스틴");
  console.log(num);
  console.log(num.length);
  return (
    <div>
      <h1>fruit</h1>
      {num.map((item, index) => {
        return <p key={index}>{item}</p>;
      })}
    </div>
  );
};

export default App3;
