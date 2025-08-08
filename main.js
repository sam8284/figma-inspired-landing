const icon=document.querySelector(".menu-icon");
const links=document.querySelector(".links")
const login=document.querySelector(".login")

icon.addEventListener("click",(e)=>{
    console.log(e.target.src);

    let str=e.target.src;
    if(str.includes("bars")){
        icon.setAttribute("src","./icons/xmark-solid-full.svg")
    }
    else{
        
        icon.setAttribute("src","./icons/bars-solid-full.svg")
    }
    
    links.classList.toggle("active")
    login.classList.toggle("active")

})