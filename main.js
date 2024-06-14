let input = document.querySelector('.form__input')
let button = document.querySelector('.form__button')
let wrapper = document.querySelector('.box')
let text = document.createElement('p')
text.classList.add('website__p')

let arr = JSON.parse(localStorage.getItem('name')) || [{
    userName: ''
}]

const updateText = () => {
    text.textContent = arr[0].userName 
}

const ReadUsers = () => {
    if (arr.length === 0) {
        arr.push({
            userName: ''
        })
    }
}

wrapper.appendChild(text)

button.addEventListener('click', () => {
    let obj = {
        userName: input.value
    }
    arr[0] = obj
    localStorage.setItem('name', JSON.stringify(arr))
    updateText()
    input.value = null
})

ReadUsers()
updateText()


