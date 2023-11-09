// When a user clicks the + element, the count should increase by 1 on screen.
// When a user clicks the – element, the count should decrease by 1 on screen.

const buttonPlusEl = document.createElement('button')
buttonPlusEl.id = 'plus'
buttonPlusEl.innerText ='+'
const buttonMinusEl = document.createElement('button')
buttonMinusEl.id = 'minus'
buttonMinusEl.innerText ='-'
const countEl= document.createElement('h1')
let count = 0
countEl.innerText = count
const bodyEl = document.getElementsByTagName('body')

bodyEl[0].appendChild(countEl)
bodyEl[0].appendChild(buttonPlusEl)
bodyEl[0].appendChild(buttonMinusEl)

buttonPlusEl.addEventListener('click',()=>{
    count++
    countEl.innerText = count
})

buttonMinusEl.addEventListener('click',()=>{
    count--
    countEl.innerText = count
})