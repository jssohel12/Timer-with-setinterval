let para = document.querySelector('.count');
let count = 0,
clear;

document.querySelector(".run").addEventListener("click",()=>{
    clear = setInterval(valueCount,1);
});

document.querySelector(".stop").addEventListener("click", ()=>{
    clearInterval(clear);
});

function valueCount(){
    count++;
    para.innerHTML = count;
};




let jara = document.querySelector('.count-two');
let point = 0,
blaze;

document.querySelector(".run-two").addEventListener("click",()=>{
    blaze = setInterval(blazeCount,1);
});

document.querySelector(".stop-two").addEventListener("click", ()=>{
    clearInterval(blaze);
});

function blazeCount(){
    point++;
    jara.innerHTML = point;
};




let dara = document.querySelector('.count-three');
let joint = 0,
glaze;

document.querySelector(".run-three").addEventListener("click",()=>{
    glaze = setInterval(glazeCount,1);
});

document.querySelector(".stop-three").addEventListener("click", ()=>{
    clearInterval(glaze);
});

function glazeCount(){
    joint++;
    dara.innerHTML = joint;
};