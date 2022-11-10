const signUpBtn = document.getElementById('signup')
const signInBtn = document.getElementById('sign-in')
const container = document.getElementById('container')

signUpBtn.addEventListener('click', () => {
	container.classList.add('right-panel-active')
})

signInBtn.addEventListener('click', () => {
	container.classList.remove('right-panel-active')
})