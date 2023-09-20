/* Iteration 4: Make Everything Work */
// <!-- Harry Potter - background, face, scarf1, scarf2, hair, text -->
var background=document.getElementById("background");
var buttonbackground=document.getElementById("buttonbackground");

buttonbackground.oninput = () => {
    // console.log("my color input is working");
    background.style.fill = buttonbackground.value;
};

var face=document.getElementById("face");
var buttonface=document.getElementById("buttonface");

buttonface.oninput = () => {
    // console.log("my colour input is working");
    face.style.fill = buttonface.value;
}

var scarf1=document.getElementById("scarf1");
var buttonscarf1=document.getElementById("buttonscarf1");

buttonscarf1.oninput = () => {
    // console.log("my colour input is working");
    scarf1.style.fill = buttonscarf1.value;
}

var scarf2=document.getElementById("scarf2");
var buttonscarf2=document.getElementById("buttonscarf2");

buttonscarf2.oninput = () => {
    // console.log("my colour input is working");
    scarf2.style.fill = buttonscarf2.value;
}

var hair=document.getElementById("hair");
var buttonhair=document.getElementById("buttonhair");

buttonhair.oninput = () => {
    // console.log("my colour input is working");
    hair.style.fill = buttonhair.value;
}

var text=document.getElementById("text");
var buttontext=document.getElementById("buttontext");

buttontext.oninput = () => {
    // console.log("my colour input is working");
    text.style.fill = buttontext.value;
}
