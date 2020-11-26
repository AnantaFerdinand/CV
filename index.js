
let title = document.getElementsByTagName('h1').innerText;
title = document.getElementById('header 2').innerText = "Student";
console.log(title);

let age = document.getElementById("age").value;
console.log(age);


function hello(){
    let value = document.getElementById("age").value;
    document.getElementsByTagName("p").innerText = value;
    document.querySelector(".td").style.fontFamily = "Times New Roman";
    document.querySelector(".td").style.color = "greenlime";
    document.querySelector(".td").style.fontSize = "3em";
    document.querySelector(".td").style.backgroundColor ="black";

    document.querySelector(".h1").style.backgroundColor = "green";

    document.querySelector(".a").style.Color = "darkblue";
    document.querySelector(".a").style.fontSize = "30px";

    let span = document.getElementsByTagName("span") [0];
    span.style.color="red";
}