function menu() {
    var x = document.getElementById("nav-links");
    if(x.className === ""){
        x.className = "menu-vertical";
    }else{
        x.className = "";
    }

}