const loginForm = document.getElementById('loginForm')

loginForm.addEventListener('submit', async (e) => {
  e.preventDefault()

  const email = document.getElementById('email').value
  const password = document.getElementById('password').value

  try {
    await auth.signInWithEmailAndPassword(email, password)
    alert('Đăng nhập thành công!')
    window.location.href = 'home.html'
  } catch (error) {
    console.error(error)
    alert('Lỗi: ' + error.message)
  }
})
