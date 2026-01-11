const list = document.getElementById('productList')

// Lấy sản phẩm từ Firebase
db.collection('products').onSnapshot((snapshot) => {
  list.innerHTML = ''
  if (snapshot.empty) {
    list.innerHTML = '<p>Chưa có sản phẩm.</p>'
    return
  }

  snapshot.forEach((doc) => {
    const p = doc.data()
    const div = document.createElement('div')
    div.className = 'product'
    div.innerHTML = `
          <img src="${p.img}" alt="${
      p.name
    }" onerror="this.src='https://via.placeholder.com/300'">
          <div class="product-body">
            <h3>${p.name}</h3>
            <p>${p.desc || ''}</p>
            <div class="price">${Number(p.price).toLocaleString()} đ</div>
            <button onclick="alert('Đã thêm vào giỏ!')">Thêm vào giỏ</button>
          </div>`
    list.appendChild(div)
  })
})

const loginLink = document.getElementById('loginLink')
auth.onAuthStateChanged((user) => {
  if (user) {
    loginLink.innerText = 'Đăng xuất'
    loginLink.href = '#'
    loginLink.onclick = () => {
      auth.signOut()
      window.location.reload()
    }
  } else {
    loginLink.innerText = 'Đăng nhập'
    loginLink.href = 'login.html'
  }
})