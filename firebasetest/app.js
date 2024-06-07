// Firebase 설정 객체를 추가합니다. (Firebase 콘솔에서 복사한 설정을 여기에 붙여넣으세요)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

// Firebase 초기화
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// 회원가입 함수
function signup() {
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  auth
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // 회원가입 성공
      alert("회원가입 성공");
    })
    .catch((error) => {
      // 회원가입 실패
      alert("회원가입 실패: " + error.message);
    });
}

// 로그인 함수
function login() {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  auth
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // 로그인 성공
      alert("로그인 성공");
    })
    .catch((error) => {
      // 로그인 실패
      alert("로그인 실패: " + error.message);
    });
}

// 로그아웃 함수
function logout() {
  auth
    .signOut()
    .then(() => {
      // 로그아웃 성공
      alert("로그아웃 성공");
    })
    .catch((error) => {
      // 로그아웃 실패
      alert("로그아웃 실패: " + error.message);
    });
}
