const form = document.getElementById('productForm')
const tableBody = document.getElementById('adminProductList')
const submitBtn = document.getElementById('submitBtn')
const cancelBtn = document.getElementById('cancelBtn')
const formTitle = document.getElementById('formTitle')

//Hiện danh sách
db.collection('products').onSnapshot((snapshot) => {
  let html = ''
  snapshot.forEach((doc) => {
    const p = doc.data()
    html += `
            <tr>
                <td><img src="${
                  p.img
                }" style="width: 50px; height: 50px; object-fit: cover;"></td>
                <td>${p.name}</td>
                <td>${Number(p.price).toLocaleString()} đ</td>
                <td>
                    <button class="btn btn-sm btn-warning" onclick="setupEdit('${
                      doc.id
                    }', '${p.name}', ${p.price}, '${p.img}', '${
      p.desc
    }')">Sửa</button>
                    <button class="btn btn-sm btn-danger" onclick="deleteProduct('${
                      doc.id
                    }')">Xóa</button>
                </td>
            </tr>`
  })
  tableBody.innerHTML = html
})

//Thêm / Sửa
form.addEventListener('submit', async (e) => {
  e.preventDefault()
  const id = document.getElementById('productId').value
  const data = {
    name: document.getElementById('name').value,
    price: Number(document.getElementById('price').value),
    img: document.getElementById('img').value,
    desc: document.getElementById('desc').value,
  }

  try {
    if (id) {
      await db.collection('products').doc(id).update(data)
      alert('Đã cập nhật!')
    } else {
      await db.collection('products').add(data)
      alert('Đã thêm mới!')
    }
    resetForm()
  } catch (err) {
    alert('Lỗi: ' + err.message)
  }
})

window.deleteProduct = async (id) => {
  if (confirm('Bạn muốn xóa sản phẩm này?')) {
    await db.collection('products').doc(id).delete()
  }
}

window.setupEdit = (id, name, price, img, desc) => {
  document.getElementById('productId').value = id
  document.getElementById('name').value = name
  document.getElementById('price').value = price
  document.getElementById('img').value = img
  document.getElementById('desc').value = desc

  submitBtn.innerText = 'Cập nhật'
  cancelBtn.classList.remove('d-none')
  formTitle.innerText = 'Sửa sản phẩm'
}

cancelBtn.addEventListener('click', resetForm)
function resetForm() {
  form.reset()
  document.getElementById('productId').value = ''
  submitBtn.innerText = 'Thêm mới'
  cancelBtn.classList.add('d-none')
  formTitle.innerText = 'Thêm sản phẩm mới'
}
