let itemList = [];
let inputButton = document.querySelector(".input-btn");


function addItem(){
    let item = document.querySelector(".input-item").value;

    if(window.event.keyCode == 13){
        if(item != null){
            itemList.push(item);
            document.querySelector(".input-item").value = "";
            document.querySelector(".input-item").focus();
        }
    }
    showList();
}

function showList(){
    let list = "<ul>"
    for (let i = 0; i < itemList.length; i++){
        list += "<li>" +itemList[i] + "<span class='close' id=" + i + ">" + "\u00D7" + "</span></li>";
    }
    list += "</ul>";
    document.querySelector(".list").innerHTML = list;

    let deleteButtons = document.querySelectorAll(".close");
    for(let i = 0; i < deleteButtons.length; i++){
        deleteButtons[i].addEventListener("click", deleteItem);
    }
}

function deleteItem(){
    let id = this.getAttribute("id");
    itemList.splice(id, 1);
    showList();
}