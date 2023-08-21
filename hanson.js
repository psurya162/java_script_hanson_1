let ans1 = document.getElementById("text")
let btn1= document.getElementById("btn1")
let reset1 = document.getElementById("reset1")

btn1.addEventListener('click' , function() {
    ans1.style.color="red"
})

reset1.addEventListener("click" , function(){
    ans1.style.color="black"
})


let ans2= document.getElementsByTagName("h2")[1]
let btn2 =document.getElementById("btn2")
let reset2 =document.getElementById("reset2")

btn2.addEventListener('click', function(){
    ans2.style.color="Green"
})

reset2.addEventListener('click' ,function(){
    ans2.style.color="black"
})

let ans3= document.getElementsByClassName("text2")[0]
let btn3 =document.getElementById("btn3")
let reset3 =document.getElementById("reset3")

btn3.addEventListener('click', function(){
    ans3.style.color="blue"
})

reset3.addEventListener('click' ,function(){
    ans3.style.color="black"
})

const ans4 = document.getElementById("text3")
let btn4 =document.getElementById("btn4")
let reset4 =document.getElementById("reset4")

btn4.addEventListener('click' ,function(){
    ans4.innerText="Hello World"
})

reset4.addEventListener('click' ,function(){
    ans4.innerText="Hello"
})

const ans5= document.getElementById("text4")
const btn5=document.getElementById("btn5")

btn5.addEventListener("click" , function(){
    text4.innerText="WELCOME TO ELEVATION ACADEMY"
    text4.style.color="darkgreen"
})

const ans6 = document.getElementById("heading");
const btn6 = document.getElementById("btn6")

btn6.addEventListener('click' ,function(){
    ans6.style.color="red"
})


let ans7= document.getElementById("container");
let btn7 = document.getElementById("btn7")

btn7.addEventListener("click" , function(){
    ans7.style.flexDirection="column"
})













function clock(){
    const date = new Date()
    let hours = date.getHours()
    let minutes =date.getMinutes()
    let seconds =date.getSeconds()

    if(hours>=12){
        hours=hours-12
    }

console.log(hours,minutes,seconds)

let hrs =document.getElementById("hourss")
hrs.innerText=hours
let min=document.getElementById("minutess")
min.innerText=minutes
let sec=document.getElementById("secondss")
sec.innerText = seconds
}
setInterval(()=>{
    clock()
},1000)