import "./App.css";

function App10() {
  console.log(document.frm);
  console.log(document.frm.name);
  console.log(document.frm.method);
  console.log(document.frm.length);
  // 자식요소 접근
  console.log(document.frm.elements);

  return (
    <div>
      <form name="frm" method="post" action="#" target="_blank">
        이름 <input type="text" name="name" />
        <br />
        나이 <input type="text" name="age" />
        <br />
        직업 <input type="text" name="job" />
        <br />
        PW <input type="password" name="pw" />
        <br />
        <input type="submit" name="frm_submit" value="전송" />
      </form>
    </div>
  );
}

export default App10;
