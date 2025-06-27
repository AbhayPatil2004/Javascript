console.log("Hello World");
console.log(window)
// alert("Hello World");

let btn = document.querySelector(".btn");

btn.addEventListener("click" , function(){
    let h1 = document.querySelector(".h1");
    h1.innerText = "Hello World";
    console.log(this);
})

btn.addEventListener('click',()=>{
    console.log(this);
})

let btn2 = document.querySelector(".btn2");
btn2.addEventListener("click",()=>{
    let div = document.querySelector(".div");
    console.log(div.classList);
    div.classList.add( "div" , "highlight");
})