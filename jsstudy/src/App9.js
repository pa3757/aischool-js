import "./App.css";

function App9() {
  // DOM
  // let h1 = document.getElementsByTagName("h1");
  // console.log(h1);
  // h1.innerText = "happy";
  const weatherbad = () => {
    let h1 = document.getElementById("title");
    h1.innerText = "날씨가 안좋네요!";
  };
  const weathergood = () => {
    let h1 = document.getElementById("title");
    h1.innerHTML = "날씨가 좋네요!";
  };
  const backweather = () => {
    let h1 = document.getElementById("title");
    h1.innerText = "날씨?";
  };
  const increase = () => {
    let count = document.getElementById("count");
    console.log(parseInt(count.innerHTML) + 1);
    count.innerHTML = parseInt(count.innerHTML) + 1;
  };
  const decrease = () => {
    let count = document.getElementById("count");
    console.log(parseInt(count.innerHTML));
    if (parseInt(count.innerHTML) > 0) {
      count.innerHTML = parseInt(count.innerHTML) - 1;
    }
  };
  return (
    <div>
      <h1 id="title">날씨?</h1>
      <button onClick={weatherbad}>ㅡ.ㅡ</button>
      <button onClick={weathergood}>ㅅ.ㅅ</button>
      <button onClick={backweather}>초기화</button>

      <p id="count">0</p>
      <button id="plus" onClick={() => increase()}>
        +
      </button>
      <button id="minus" onClick={() => decrease()}>
        -
      </button>
    </div>
  );
}

export default App9;
