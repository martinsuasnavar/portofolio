//selecting buttons
const myNavigatorButtons = document.getElementsByClassName("navigator-button");
const myFacadeAboutMeButton = document.getElementById("facade_about_me_button");
const myCVDownloadButton = document.getElementById("cv_download_button")


function alertNoButtonFunctionality(event){
    event.preventDefault(); //prevent the default behavior of anchor (<a>) tags
    alert("This button has not functionality yet");
}

//event listener, needed to create alerts for buttons that still need proper functionality
for (let i = 0; i < myNavigatorButtons.length; i++){
    myNavigatorButtons[i].addEventListener("click", function(event){
        alertNoButtonFunctionality(event);
    });
}

myFacadeAboutMeButton.addEventListener("click", function(event){
    const targetElement = document.getElementById("contents");

    targetElement.scrollIntoView({behavior: "smooth"});
});


myCVDownloadButton.addEventListener("click", function(event){
    alertNoButtonFunctionality(event);
});

