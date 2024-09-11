//detecting button press
for(var i=0;i<document.querySelectorAll(".drum").length;i++)
    document.querySelectorAll(".drum")[i].addEventListener("click",over);
    function over(){
       var drago=this.innerHTML;
       Makesound(drago);
       style(drago);
}      
 //detecting key press
    document.addEventListener("keypress",sound);
    function sound(event){
        Makesound(event.key);
        style(event.key);
}

function Makesound(key){
    switch (key) {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case "j":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;  
        case "k":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;  
        case "l":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        default:
            console.log("Invalid key pressed");
    }

}

function style(design){
    var animation=document.querySelector("." + design);
    animation.classList.add("pressed");
    setTimeout(function(){
        animation.classList.remove("pressed");
    },100);
}




