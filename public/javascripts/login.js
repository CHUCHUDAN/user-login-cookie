console.log('ss')
//若使用者沒有輸入內容，就按下了送出鈕，需要防止表單送出並提示使用者
const formLogin = document.querySelector('.form-login')
const formLoginButton = document.querySelector('.form-login-button')

formLoginButton.addEventListener('click', () => {
  formLogin.classList.add('was-validated')
})

formLogin.addEventListener('submit', (event) => {
  if (!formLogin.checkValidity()) {
    event.preventDefault()
    event.stopPropagation()
  }
})