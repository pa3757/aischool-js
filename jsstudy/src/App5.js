import "./App.css";
import { useState } from "react";

function App() {
  const [fruits, setFruits] = useState();
  const juice = () => {
    console.log(fruits + "주스");
    setFruits("");
  };

  // function greetName() {
  //   console.log(`안녕하세요 저는 ${name}입니다`);
  // }
  function sum(num1, num2) {
    return num1 + num2;
  }
  let result = sum(1, 2);
  // console.log(result);

  // minus 함수 생성
  // 이 함수는 값을 두개 입력받아서 뺄셈을 해주는 함수
  // 큰수 - 작은수

  const minus = (num1, num2) => {
    if (num1 > num2) {
      return num1 - num2;
    } else {
      return num2 - num1;
    }
  };
  // let num1 = parseInt(prompt("숫자를입력하세요1"));
  // let num2 = parseInt(prompt("숫자를입력하세요2"));
  // console.log("첫번째 숫자 : " + num1);
  // console.log("두번째 숫자 : " + num2);
  // console.log(minus(num1, num2));

  // function hoisting : 함수부터 읽어져서 아무데서나 쓸 수 있음 >> 해결 const, let
  const exFunc = () => {
    console.log("함수실행");
  };
  exFunc();
  // let, const TDZ(Temporal Death Zone)의 영향 받음
  // 값을 할당하기 전에는 죽은 공간으로 만듦

  return (
    <div>
      <input
        type="text"
        value={fruits}
        onChange={(e) => setFruits(e.target.value)}
      />
      <button onClick={juice}>주스만들기</button>
      {/* <button onClick={greetName}>이름출력</button> */}
    </div>
  );
}

export default App;
