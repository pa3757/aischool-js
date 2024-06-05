import "./App.css";

function App7() {
  let list = [1, 3, 5, 2, 8];
  let list2 = [];
  // 배열 내 가장 큰 수 찾기
  const maxElement = (a) => {
    // 매개변수로 배열 받음
    // 인자로 입력한 배열이 비어있으면 0, 값이 있으면 가장 큰값 리턴
    if (a.length === 0) return 0;
    else {
      for (let i = 0; i < a.length; i++) {
        if (a[i] > a[i + 1]) {
          a[i + 1] = a[i];
        }
      }
      return a[a.length - 1];
    }
  };

  console.log(maxElement(list));
  console.log(maxElement(list2));

  return (
    <div>
      <div></div>
    </div>
  );
}

export default App7;
