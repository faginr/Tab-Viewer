function openTab(name){
    debugger;
    let i, tabContent;
    tabContent = document.querySelectorAll(".tab-content");
    for (i = 0; i<tabContent.length; i++){
        tabContent[i].style.display = "none";
    }
    document.querySelector('#' + name).style.display = "block";
}

document.querySelector(".active").click();