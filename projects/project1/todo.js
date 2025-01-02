const inputBox = document.getElementById("input-box");
const listContainer= document.getElementById("list-container");
function addTask(){
    if(inputBox.value === ''){
        inputBox.classList.add('shake');
        inputBox.addEventListener('animationend',() => {
            inputBox.classList.remove('shake');
        }, {once:true});
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showlist(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showlist()