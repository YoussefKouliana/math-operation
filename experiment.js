let num1 = 12
let num2 = 4

document.querySelector(".num1-el").textContent = num1 
document.querySelector(".num2-el").textContent = num2
const add = document.querySelector(".add")
const multiply = document.querySelector(".multiply")
const divide = document.querySelector(".divide")
const substract = document.querySelector(".substract")
const sumEl = document.querySelector(".sum")

add.addEventListener("click",function(){
    sumEl.textContent = num1 + num2
})

multiply.addEventListener("click",function(){
    sumEl.textContent = num1 * num2
})

substract.addEventListener("click",function(){
    sumEl.textContent = num1 - num2
})

divide.addEventListener("click",function(){
    sumEl.textContent = num1 / num2
})