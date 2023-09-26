
const home = document.getElementById("home");
const menu = document.getElementById("menu");
const special = document.getElementById("specials");
const method = document.getElementById("method");
const about = document.getElementById("about");

const menuBtn = document.getElementById("menu-btn");
const specialBtn = document.getElementById("special-btn");
const methodBtn = document.getElementById("method-btn");
const aboutBtn = document.getElementById("about-btn")


const menuPage = (e)=>{
    e.preventDefault();
    menu.style.display = "block";
    home.style.display = "none";
    special.style.display = "none";
    method.style.display = "none";
    about.style.display = "none";
}

menuBtn.addEventListener("click", menuPage);

const specialPage = (e)=>{
    e.preventDefault();
    menu.style.display = "none";
    home.style.display = "none";
    method.style.display = "none";
    about.style.display = "none";
    special.style.display = "block";
}

specialBtn.addEventListener("click", specialPage);

const methodPage = (e)=>{
    e.preventDefault();
    special.style.display = "none";
    home.style.display = "none";
    menu.style.display = "none";
    about.style.display = "none";
    method.style.display = "block";
}

methodBtn.addEventListener("click", methodPage);

const aboutPage = (e)=>{
    e.preventDefault();
    method.style.display = "none";
    home.style.display = "none";
    menu.style.display = "none";
    special.style.display = "none";
    about.style.display = "block";
}

aboutBtn.addEventListener("click", aboutPage);