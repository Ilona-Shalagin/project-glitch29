const image = document.querySelector("#myImage");
const text = document.querySelector("h2");
const textTwo = document.querySelector("h1");
const buttonOne = document.querySelector("#one");
const buttonTwo = document.querySelector("#two");

buttonOne.addEventListener("click",choice);
buttonTwo.addEventListener("click",choiceTwo);

function choice(){
    image.setAttribute("src","_image2portrait.jpeg");
    text.textContent = "What major will she choose? ";
    buttonOne.textContent = "Journalism";
    buttonTwo.textContent = "Political science";
    buttonOne.addEventListener("click",study);
    buttonTwo.addEventListener("click",studyTwo);
}
function study(){
    image.setAttribute("src","_image3portrait.jpeg");
    text.textContent = "Will she get a job?";
    buttonOne.textContent = "Yes";
    buttonTwo.textContent = "No";
    buttonOne.addEventListener("click",degree);
    buttonTwo.addEventListener("click",degreeTwo);
}
function degree(){
    image.setAttribute("src","_image5portrait.jpeg");
    text.textContent = "Elle will be very succesfull in her field!";
    text.classList.add("color");
    document.body.style.backgroundColor = "#E7B2A5";
    buttonOne.style = "display:none";
    buttonTwo.style = "display:none"; 
}   
function studyTwo(){
    image.setAttribute("src","_image8portrait.jpeg");
    text.textContent = "will she get a job?";
    buttonOne.textContent = "Yes";
    buttonTwo.textContent = "No";
    buttonOne.addEventListener("click",work);
    buttonTwo.addEventListener("click",workTwo);
}
function work(){
    image.setAttribute("src","_image7portrait.jpeg");
    text.textContent = "She will be working as immigration lawer!";
    text.classList.add("colorOne");
    document.body.style.backgroundColor = "#FBFFE0"
    buttonOne.style = "display:none";
    buttonTwo.style = "display:none"; 
}
function degreeTwo(){
    image.setAttribute("src","_image9portrait.jpeg");
    text.textContent = "She will be working as a waitress.It's temporarily! ";
    text.classList.add("colorTwo");
    textTwo.classList.add("colorChange");
    document.body.style.backgroundColor = "#B2704E";
    buttonOne.style = "display:none";
    buttonTwo.style = "display:none"; 
}
function workTwo(){
    image.setAttribute("src","_image10portrait.jpeg");
    text.textContent = "She will drop a school and now she is styding at CanSheCode!";
    text.classList.add("colorThree");
    document.body.style.backgroundColor = "#B1E8ED";
    buttonOne.style = "display:none";
    buttonTwo.style = "display:none"; 
}

function choiceTwo() {
    image.setAttribute("src","_image6portrait.jpeg");
    text.textContent = "What major will she choose?";
    buttonOne.textContent = "Biology";
    buttonTwo.textContent = "Science";
    buttonOne.addEventListener("click",major);
    buttonTwo.addEventListener("click",majorTwo);
}
function major(){
    image.setAttribute("src","_image11portrait.jpeg");
    text.textContent = "Will she look for a job?";
    buttonOne.textContent = "Yes";
    buttonTwo.textContent = "No";
    buttonOne.addEventListener("click",job);
    buttonTwo.addEventListener("click",jobTwo);
}
function job(){
    image.setAttribute("src","_image12portrait.jpeg");
    text.textContent = "Elle will become a Pharmacologist!";
    text.classList.add("colorFour");
    document.body.style.backgroundColor = "#DAEAF6";
    buttonOne.style = "display:none";
    buttonTwo.style = "display:none"; 
}
function majorTwo(){
    image.setAttribute("src","_image13portrait.jpeg");
    text.textContent = "Will she get a promotion?";
    buttonOne.textContent = "Yes";
    buttonTwo.textContent = "No";
    buttonOne.addEventListener("click",career);
    buttonTwo.addEventListener("click",careerTwo);
}
function career(){
    image.setAttribute("src","_image14portrait.jpeg");
    text.textContent = "She will get a promotion in really big company";
    text.classList.add("colorFive");
    document.body.style.backgroundColor = "#A7BCB9";
    buttonOne.style = "display:none";
    buttonTwo.style = "display:none"; 
}
function jobTwo(){
    image.setAttribute("src","_image15portrait.jpeg");
    text.textContent = "She will decide to take a break and will work as beauty consultant for while!";
    text.classList.add("colorSix");
    document.body.style.backgroundColor = "#FFC6BE";
    buttonOne.style = "display:none";
    buttonTwo.style = "display:none"; 
}
function careerTwo(){
    image.setAttribute("src","_image15portrait.jpeg");
    text.textContent = "She will decide to be a hair dresser!";
    text.classList.add("colorSeven");
    document.body.style.backgroundColor = "#EB8F8F";
    buttonOne.style = "display:none";
    buttonTwo.style = "display:none"; 
}

gsap.from("#myImage",{duration:2,opacity:0,scale:1.5})
gsap.from("h1",{y:-100,opacity:0,delay:0.8,duration:3})

