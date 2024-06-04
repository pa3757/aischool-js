import React, { useState } from "react";

const App4 = () => {
  // // 빈 배열 array 생성후 길이 출력
  // const [array, setArray] = useState([]);
  // console.log("1번문제 : ", array.length);
  // // 1~100 숫자 5개 저장
  // array.push(35, 73, 68, 82, 94);
  // console.log("2번문제 : ", array);
  // // array 모든 데이터 출력
  // console.log("3번문제 : ");
  // for (let i = 0; i < array.length; i++) {
  //   console.log(array[i]);
  // }
  // // array의 세번째 요소를 100으로 수정
  // array[2] = 100;
  // console.log("4번문제 : ", array);
  // // 두번째 요소를 삭제
  // array.splice(1, 1);
  // console.log("5번문제 : ", array);

  let list = ["아이유", "허각", "윤하"];

  // 1. 배열명.include('찾고싶은요소')
  console.log(list.includes("윤하"));
  console.log(list.includes("장원영"));

  // 2. 배열명.indexOf('찾고싶은요소')
  console.log(list.indexOf("윤하"));
  console.log(list.indexOf("장원영"));

  // 3. 배열명.slice(시작인덱스, 끝인덱스+1)
  console.log(list.slice(1, 3));

  // 4. 변수명.split(구분자)
  // string을 array로 변환
  let text = "반갑습니다";
  console.log(text.split(""));

  // 5. 배열명.join(구분자)
  // 배열의 모든 요소를 연결해 하나의 string으로 만들어주는 함수
  console.log(list.join(""));

  // 실습
  let fruits = [
    "apple",
    "avocado",
    "banana",
    "blueberry",
    "cherry",
    "dragon fruit",
    "fig",
    "grape",
    "kiwi",
    "lime",
    "mango",
    "orange",
    "oriental melon",
    "pear",
    "peach",
    "pineapple",
    "shine muscat",
    "strawberry",
    "tomato",
    "water melon",
    "yuja",
  ];

  // 1. fruits 배열의 'yuja'삭제
  fruits.splice(fruits.indexOf("yuja"), 1);
  console.log(fruits);
  // 2. fruits 배열에 'grapefruit' 추가
  fruits.push("grapefruit");
  // 3. fruits 배열에 'cherry tomato','pine nut', 'korean blackberry' 추가
  fruits.push("cherry tomato", "pine nut", "korean blackberry");
  // 4. fruits 배열에 'orange' 있는지 확인
  fruits.includes("orange");
  // 5. fruits 배열에 'kiwi' 있는지 확인
  fruits.includes("kiwi");
  // 6. fruits 라는 배열에 "water melon" 을 "melon"으로 변경하기
  fruits.splice(fruits.indexOf("water melon"), 1, "melon");
  // 7. fruits 라는 배열에 "lime" 부터 3개의 요소를 삭제하기
  fruits.splice(fruits.indexOf("lime"), 3);
  // 8. fruits 라는 배열에 "shine muscat" 이후의 값을 제거하기
  fruits.splice(fruits.indexOf("shine muscat") + 1);
  // 9. fruits 라는 배열에 "pear" 부터 "pine apple" 까지 가져와서 새로운 배열에 저장하기.
  let newFruits = fruits.slice(
    fruits.indexOf("pear"),
    fruits.indexOf("pineapple") + 1
  );
  // 10. fruits 라는 배열을 하나의 string으로 변환하기, 이 때 구분자는 과일1 and 과일2 and ~
  console.log(fruits.join(" and "));

  return (
    <div>
      <p></p>
    </div>
  );
};

export default App4;
