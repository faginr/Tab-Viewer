function openTab(name){
    let i, tabcontent, tabBtn;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i<tabcontent; i++){
        tabcontent[i].getElementsByClassName.display = "none";
    }
    document.querySelector('#' + name).style.display = "block";
}