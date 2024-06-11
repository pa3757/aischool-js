console.log("firebase file");

const firebaseConfig = {
  apiKey: "AIzaSyC9EFA1_gJQSvGa7qUk923uX359GoE_nLo",
  authDomain: "test-e4f36.firebaseapp.com",
  projectId: "test-e4f36",
  databaseURL:
    "https://test-e4f36-default-rtdb.asia-southeast1.firebasedatabase.app/",
  storageBucket: "test-e4f36.appspot.com",
  messagingSenderId: "522632762956",
  appId: "1:522632762956:web:95f09cd18539b857ae46e9",
  measurementId: "G-HLXHG56NY1",
};
// firebase 초기화
const app = firebase.initializeApp(firebaseConfig);

// firebase 실시간 데이터 베이스
const db = firebase.database();

// firebase 데이터 쓰기
const writeUserData = (id, email, name) => {
  db.ref("users/" + id).set({
    email: email,
    name: name,
  });
};

document.addEventListener("DOMContentLoaded", () => {
  let btn = document.getElementById("addUserBtn");
  btn.addEventListener("click", () => {
    let id = document.getElementsByName("id")[0].value;
    let email = document.getElementsByName("email")[0].value;
    let name = document.getElementsByName("userName")[0].value;

    console.log("ID:", id);

    console.log("Email:", email);
    console.log("Name:", name);

    writeUserData(id, email, name);
  });
});

const readUserData = () => {
  db.ref("users/")
    .once("value")
    .then((res) => {
      const data = res.val();
      console.log(data);
    });
};

document.getElementById("getUserBtn").addEventListener("click", () => {
  // firebase  전체 데이터 조회
  //   const readAllUser = () => {
  //     db.ref("users/").on("value", (res) => {
  //       console.log(res.val());
  //       const nowUser = document.getElementById("nowUser");
  //       nowUser.innerHTML = "";
  //     });
  //   };
  //   readAllUser("qwe");
  readUserData();
});
