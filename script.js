const image = document.querySelector("#myImage");
const text = document.querySelector("h2");
const textTwo = document.querySelector("h1");
const buttonOne = document.querySelector("#one");
const buttonTwo = document.querySelector("#two");

buttonOne.addEventListener("click",choice);
buttonTwo.addEventListener("click",choiceTwo);

function choice(){
    image.setAttribute("src","https://cdn.glitch.me/81156cac-13ae-42ab-b74d-80f0a6eda90f%2Fimage2.jpeg?v=1636829787559");
    text.textContent = "What major will she choose? ";
    buttonOne.textContent = "Journalism";
    buttonTwo.textContent = "Political science";
    buttonOne.addEventListener("click",study);
    buttonTwo.addEventListener("click",studyTwo);
}
function study(){
    image.setAttribute("src","https://cdn.glitch.me/81156cac-13ae-42ab-b74d-80f0a6eda90f%2Fimage3.jpeg?v=1636829790549");
    text.textContent = "Will she get a job?";
    buttonOne.textContent = "Yes";
    buttonTwo.textContent = "No";
    buttonOne.addEventListener("click",degree);
    buttonTwo.addEventListener("click",degreeTwo);
}
function degree(){
    image.setAttribute("src","https://cdn.glitch.me/81156cac-13ae-42ab-b74d-80f0a6eda90f%2Fimage5.jpeg?v=1636829796983");
    text.textContent = "Elle will be very succesfull in her field!";
    text.classList.add("color");
    document.body.style.backgroundColor = "#E7B2A5";
    buttonOne.style = "display:none";
    buttonTwo.style = "display:none"; 
}   
function studyTwo(){
    image.setAttribute("src","https://cdn.glitch.me/81156cac-13ae-42ab-b74d-80f0a6eda90f%2Fimage8.jpeg?v=1636831614900");
    text.textContent = "will she get a job?";
    buttonOne.textContent = "Yes";
    buttonTwo.textContent = "No";
    buttonOne.addEventListener("click",work);
    buttonTwo.addEventListener("click",workTwo);
}
function work(){
    image.setAttribute("src","https://cdn.glitch.me/81156cac-13ae-42ab-b74d-80f0a6eda90f%2Fimage7.jpeg?v=1636829805157");
    text.textContent = "She will be working as immigration lawer!";
    text.classList.add("colorOne");
    document.body.style.backgroundColor = "#FBFFE0"
    buttonOne.style = "display:none";
    buttonTwo.style = "display:none"; 
}
function degreeTwo(){
    image.setAttribute("src","https://cdn.glitch.me/81156cac-13ae-42ab-b74d-80f0a6eda90f%2Fimage9.jpeg?v=1636829814208");
    text.textContent = "She will be working as a waitress.It's temporarily! ";
    text.classList.add("colorTwo");
    textTwo.classList.add("colorChange");
    document.body.style.backgroundColor = "#B2704E";
    buttonOne.style = "display:none";
    buttonTwo.style = "display:none"; 
}
function workTwo(){
    image.setAttribute("src","https://cdn.glitch.me/81156cac-13ae-42ab-b74d-80f0a6eda90f%2Fimage10.jpeg?v=1636829820203");
    text.textContent = "She will drop a school and now she is styding at CanSheCode!";
    text.classList.add("colorThree");
    document.body.style.backgroundColor = "#B1E8ED";
    buttonOne.style = "display:none";
    buttonTwo.style = "display:none"; 
}

function choiceTwo() {
    image.setAttribute("src","https://cdn.glitch.me/81156cac-13ae-42ab-b74d-80f0a6eda90f%2Fimage6.jpeg?v=1636829801370");
    text.textContent = "What major will she choose?";
    buttonOne.textContent = "Biology";
    buttonTwo.textContent = "Science";
    buttonOne.addEventListener("click",major);
    buttonTwo.addEventListener("click",majorTwo);
}
function major(){
    image.setAttribute("src","https://cdn.glitch.me/81156cac-13ae-42ab-b74d-80f0a6eda90f%2Fimage11.jpeg?v=1636829825796");
    text.textContent = "Will she look for a job?";
    buttonOne.textContent = "Yes";
    buttonTwo.textContent = "No";
    buttonOne.addEventListener("click",job);
    buttonTwo.addEventListener("click",jobTwo);
}
function job(){
    image.setAttribute("src","https://cdn.glitch.me/81156cac-13ae-42ab-b74d-80f0a6eda90f%2Fimage12.jpeg?v=1636829841353");
    text.textContent = "Elle will become a Pharmacologist!";
    text.classList.add("colorFour");
    document.body.style.backgroundColor = "#DAEAF6";
    buttonOne.style = "display:none";
    buttonTwo.style = "display:none"; 
}
function majorTwo(){
    image.setAttribute("src","https://cdn.glitch.me/81156cac-13ae-42ab-b74d-80f0a6eda90f%2Fimage13.jpeg?v=1636829848362");
    text.textContent = "Will she get a promotion?";
    buttonOne.textContent = "Yes";
    buttonTwo.textContent = "No";
    buttonOne.addEventListener("click",career);
    buttonTwo.addEventListener("click",careerTwo);
}
function career(){
    image.setAttribute("src","https://cdn.glitch.me/81156cac-13ae-42ab-b74d-80f0a6eda90f%2Fimage14.jpeg?v=1636829854107");
    text.textContent = "She will get a promotion in really big company";
    text.classList.add("colorFive");
    document.body.style.backgroundColor = "#A7BCB9";
    buttonOne.style = "display:none";
    buttonTwo.style = "display:none"; 
}
function jobTwo(){
    image.setAttribute("src","https://cdn.glitch.me/81156cac-13ae-42ab-b74d-80f0a6eda90f%2Fimage15.jpeg?v=1636829861511");
    text.textContent = "She will decide to take a break and will work as beauty consultant for while!";
    text.classList.add("colorSix");
    document.body.style.backgroundColor = "#FFC6BE";
    buttonOne.style = "display:none";
    buttonTwo.style = "display:none"; 
}
function careerTwo(){
    image.setAttribute("src","https://cdn.glitch.me/81156cac-13ae-42ab-b74d-80f0a6eda90f%2Fimage16.jpeg?v=1636829868901");
    text.textContent = "She will decide to be a hair dresser!";
    text.classList.add("colorSeven");
    document.body.style.backgroundColor = "#EB8F8F";
    buttonOne.style = "display:none";
    buttonTwo.style = "display:none"; 
}

gsap.from("#myImage",{duration:2,opacity:0,scale:1.5})
gsap.from("h1",{y:-100,opacity:0,delay:0.8,duration:3})

