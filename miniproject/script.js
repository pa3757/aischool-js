document
  .getElementById("signupForm")
  ?.addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Sign Up Successful");
  });

document
  .getElementById("loginForm")
  ?.addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Login Successful");
  });

document.getElementById("gameButton")?.addEventListener("click", function () {
  const result = Math.random() > 0.5 ? "You Win!" : "You Lose!";
  document.getElementById("gameResult").innerText = result;
});
