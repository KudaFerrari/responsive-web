var active = "all";
function toggleDefender(){
    if(active != "def"){
        hideElement(".atk_item");
        showElement(".def_item");
        applyActiveButton("def_btn");
        applyInactiveButton("atk_btn");
        active = "def";
    }
    else if (active == "def"){
        showElement(".atk_item");
        applyInactiveButton("def_btn");
        active = "all";
    }
}
function toggleAttacker(){
    if(active != "atk"){
        hideElement(".def_item");
        showElement(".atk_item");
        applyActiveButton("atk_btn");
        applyInactiveButton("def_btn");
        active = "atk";
    }
    else if (active == "atk"){
        showElement(".def_item");
        applyInactiveButton("atk_btn");
        active = "all";
    }
}
function hideElement(kelas){
    var item = document.getElementById("items").querySelectorAll(kelas);
    var len = item.length;
    for(var i = 0; i < len; i++){
        item[i].style.display = "none";
    }
}
function showElement(kelas){
    var item = document.getElementById("items").querySelectorAll(kelas);
    var len = item.length;
    for(var i = 0; i < len; i++){
        item[i].style.display = "inline-block";
    }
}
function applyActiveButton(id){
    var  b = document.getElementById(id);
    b.style.backgroundColor = "white";
    b.style.color = "black";
    b.style.borderColor = "white";
}
function applyInactiveButton(id){
    var b = document.getElementById(id);
    b.style.backgroundColor = "#23242d";
    b.style.borderColor = "#3f4353";
    b.style.color= "white";
}