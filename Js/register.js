const registerForm = document.getElementById('registerForm')

registerForm.addEventListener('submit', async (e) => {
  e.preventDefault()

  const fullname = document.getElementById('fullname').value
  const email = document.getElementById('email').value
  const password = document.getElementById('password').value
  const confirmPassword = document.getElementById('confirmPassword').value

  if (password !== confirmPassword) {
    alert('Mật khẩu không khớp!')
    return
  }

  try {
    const cred = await auth.createUserWithEmailAndPassword(email, password)

    await db.collection('users').doc(cred.user.uid).set({
      username: fullname,
      email: email,
      role_id: 2, // Khách hàng
    })

    alert('Đăng ký thành công!')
    window.location.href = 'login.html'
  } catch (error) {
    alert('Lỗi: ' + error.message)
  }
})
