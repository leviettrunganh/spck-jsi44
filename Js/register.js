const inpUserName = document.querySelector(".inp-username");
const inpEmail = document.querySelector(".inp-email");
const inpPwd = document.querySelector(".inp-pwd");
const inpCfPwd = document.querySelector(".inp-cf-pw");

const registerForm = document.querySelector("#register-form");

function handleRegister(event) {
  event.preventDefault();

  let username = inpUserName.value;
  let email = inpEmail.value;
  let password = inpPwd.value;
  let confirmPassword = inpCfPwd.value;
  let role_id = 2; // Admin:1 Guest:2

  if (!username || !email || !password || !confirmPassword) {
    alert("Vui lòng nhập đầy đủ các trường!");
    return;
  }

  if (password !== confirmPassword) {
    alert("Mật khẩu không khớp!");
    return;
  }

  // Register
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userRespone) => {
      var user = userRespone.user;
      let userData = {
        username,
        email,
        password,
        role_id,
        balance: 0,
      };

      db.collection("users")
        .add(userData)
        .then((docRef) => {
          alert("Đăng ký thành công!");
          window.location.href = "./login.html";
        });
    })
    .catch((error) => {
      console.log(error);
      alert("Error!");
    });
}

registerForm.addEventListener("submit", handleRegister);
