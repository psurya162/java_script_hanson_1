var heading = document.getElementById("heading");
var btn = document.getElementById("button");
var btn2 =document.getElementById("button2")
var btn3= document.getElementById("button3")

btn.addEventListener("click" ,function(){
    heading.innerText="Welcome to elevation academy"
})

btn2.addEventListener("click",function(){
    heading.style.backgroundColor="red"
})

btn3.addEventListener("click", function(){
    container.style.flexDirection="column"
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