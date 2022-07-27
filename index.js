const body = document.querySelector('body')
body.style.display = 'none'

const password = prompt('Enter password')

if (password === 'LOL' && password !== '' && password.length === 3) {
  body.style.display = 'block'
} else {
  alert('WRONG PASSWORD! TRY AGAIN!')
}
