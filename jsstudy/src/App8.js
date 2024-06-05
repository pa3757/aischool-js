import "./App.css";

function App8() {
  let person = {
    name: "John",
    sub: "cloud",
    gender: "man",
    team: "server",
    skill: function () {
      console.log("cloud.function");
    },
  };
  console.log(person);
  person.skill();

  let pokemon = [
    {
      pikachu: {
        number: 25,
        type: "electric",
        color: "yellow",
        catch: 190,
        skill: function () {
          console.log("백만볼트");
        },
      },
    },
    {
      charmander: {
        number: 4,
        type: "fire",
        color: "red",
        catch: 45,
        skill: function () {
          console.log("불꽃세례");
        },
      },
    },
    {
      squirtle: {
        number: 7,
        type: "water",
        color: "blue",
        catch: 45,
        skill: function () {
          console.log("거품");
        },
      },
    },
  ];
  console.log(pokemon);

  // 내장 객체(Date, Math, JSON, ...)
  const date = new Date();
  // yyyy-mm-dd
  console.log(
    date.getFullYear() +
      "년" +
      (date.getMonth() + 1) +
      "월" +
      date.getDate() +
      "일"
  );
  if (date.getHours() < 12) {
    console.log("오전" + date.getHours() + "시" + date.getMinutes() + "분");
  } else {
    console.log(
      "오후" +
        (date.getHours() - 12) +
        "시" +
        date.getMinutes() +
        "분" +
        date.getSeconds() +
        "초"
    );
  }

  // Math
  // 반올림, 내림
  console.log(Math.round(3.7));
  console.log(Math.floor(3.14));
  // 최대, 최소
  console.log(Math.max(1, 2, 3, 4, 5));
  console.log(Math.min(1, 2, 3, 4, 5));
  // 1~10랜덤
  console.log(Math.floor(Math.random() * 10) + 1);

  return (
    <div>
      <div></div>
    </div>
  );
}

export default App8;
