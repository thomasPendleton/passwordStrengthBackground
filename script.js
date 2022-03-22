const background = document.getElementById('background')
const email = document.getElementById('email')
const password = document.getElementById('password')
const submitBtn = document.querySelector('button')

//check blur onSubmit
// submitBtn.addEventListener('click', (e) => {
//   e.preventDefault()
//   let passwordLength = password.value.length * 2
//   passwordLength > 20 ? (passwordLength = 20) : passwordLength
//   background.style.filter = `blur(${20 - passwordLength}px)`
// })

//check blur on input
password.addEventListener('input', (e) => {
  const input = e.target.value
  const length = input.length
  const blurValue = 20 - length * 2
  background.style.filter = `blur(${blurValue}px)`
})
