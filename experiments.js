let input1 = document.querySelector(".input1")
let input2 = document.querySelector(".input2") 
let result = document.querySelector(".sum")
const add = document.querySelector(".add")
const multiply = document.querySelector(".multiply")
const divide = document.querySelector(".divide")
const substract = document.querySelector(".substract")

/*function updateNumber(){
    num1 = Number(input1.value)
    num2 = Number(input2.value)
}
updateNumber()

add.addEventListener("click",function(){
    updateNumber()
    result.textContent = num1 + num2
})


multiply.addEventListener("click",function(){
    updateNumber()
    result.textContent = num1 * num2
})


substract.addEventListener("click",function(){
    updateNumber()
    result.textContent = num1 - num2
})


divide.addEventListener("click",function(){
    updateNumber()
    result.textContent = num1 / num2
}) */


function updateNumber(){
    num1 = Number(input1.value)
    num2 = Number(input2.value)
}
updateNumber()

add.addEventListener("click",function(){
    updateNumber()
    result.textContent = num1 + num2
})

multiply.addEventListener("click",function(){
    updateNumber()
    result.textContent = num1 * num2
})


substract.addEventListener("click",function(){
    updateNumber()
    result.textContent = num1 - num2
})

divide.addEventListener("click",function(){
    updateNumber()
    result.textContent = num1 / num2
}) 
