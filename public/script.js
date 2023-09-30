//////////////////
//////////////////
////JavaScript////
//////////////////
//////////////////





///////////
//BUTTONS//
///////////


//selecting buttons
const myNavigatorButtons = document.getElementsByClassName("navigator-button");


function alertNoButtonFunctionality(event){
    event.preventDefault(); //prevent the default behavior of anchor (<a>) tags
    alert("This button has no functionality yet");
}

//event listener, needed to create alerts for buttons that still need proper functionality
for (let i = 0; i < myNavigatorButtons.length; i++){
    myNavigatorButtons[i].addEventListener("click", function(event){
        alertNoButtonFunctionality(event);
    });
}






//////////////
//ANIMATIONS//
//////////////


function fullOpacityAfterAnimation(selector, time){
    const box = document.querySelector(selector);

    //after a delay, hide element again with animation
    setTimeout(function(){
        box.style.opacity = 1;
    }, time);
}

fullOpacityAfterAnimation("#facade", 200);
fullOpacityAfterAnimation(".facade-item", 1000);
fullOpacityAfterAnimation("#facade-about-me-button-placeholder", 1000);