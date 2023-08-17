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