function chBackcolor(color) {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}


function greetUser() {
    document.getElementById("greeting").innerHTML = "Hello from external JavaScript!";
}

function calculateSum(a, b) {
    return a + b;
}

// This code runs when the page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log("External JavaScript file loaded successfully!");
});


var buttons = document.getElementsById("container");

button.onclick = onbuttonclicked;

function onbuttonclicked(){
    if (onbuttonclicked) {
        button1.style.backgroundColor = "red";
        button1.disabled=true;
    } else {
        button1.style.backgroundColor = "green";
        button1.disabled=false;
      }
    }
