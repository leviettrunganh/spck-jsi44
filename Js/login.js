const inpEmail = document.querySelector(".inp-email");
const inpPwd = document.querySelector(".inp-pwd");
const loginForm = document.querySelector("#login-form");

function handleLogin(event) {
  event.preventDefault()
  let email = inpEmail.value;
  let password = inpPwd.value;

  if (!email || !password) {
    alert("Vui lòng nhập email và password!");
    return;
  }

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userDetail) => {
        localStorage.setItem('user_session', JSON.stringify(userDetail))
        alert('Đăng nhập thành công!')
        window.location.href = "./index.html";
    }).catch((error)=> {
        console.log(error)
        alert('Đăng nhập thất bại, vui lòng đăng nhập lại!')
    });
}

loginForm.addEventListener("submit", handleLogin)
