//option 1: directly set on the HTML element


// option 2: 

function makeBlue(){
    document.body.style.backgroundColor = 'blue';
}

function makeRed(){
    document.body.style.backgroundColor ='red';
}
function makeBlackMamba() {
    document.body.style.backgroundColor = 'black';
    }


    function makeTomato() {
        document.body.style.backgroundColor = 'tomato';
        }
// option 3: add onclick function [we will use this sometimes]


const makeBluebutton = document.getElementById('make_blue');
makeBluebutton.onclick = makeBlue;


const purpleButton = document.getElementById('make_purple');
purpleButton.onclick = function makePurple(){
document.body.style.backgroundColor = 'purple';
}

//option: 4 //

const pinkButton = document.getElementById('make_pink');
pinkButton.addEventListener('click', makePink);

function makePink(){
    document.body.style.backgroundColor = 'pink';
}

//option: 5//

const makeGreenButton = document.getElementById("make_green");
makeGreenButton.addEventListener("click", function makeGreen(){
 document.body.style.backgroundColor = 'green';
});

//option: 6 Final eta beshi use kora hobe 

document.getElementById("make_goldenrod").addEventListener("click", function(){
    document.body.style.backgroundColor = "goldenrod";
})