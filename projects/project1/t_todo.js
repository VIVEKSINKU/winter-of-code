const inputBox = document.getElementById("input-box");
const lcont = document.getElementById("list-container");
let lst = document.getElementsByClassName("list");
let rightbox = document.getElementById('right');
let leftbox = document.getElementById('left');
function addTask() {
    if (inputBox.value === '') {
        inputBox.classList.add('shake');
        inputBox.addEventListener('animationend', () => {
            inputBox.classList.remove('shake');
        }, { once: true });
    }
    else {
        let li = document.createElement("div");
        li.className = "list ";
        li.draggable = true;
        li.innerHTML = inputBox.value;
        lcont.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}
lcont.addEventListener("click", function (e) {
    if (e.target.tagName === "DIV") {
        e.target.classList.toggle("l-checked");
        sright(e.target);
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);
function sright(e) {
    rightbox.appendChild(e);
    rightbox.addEventListener("click", function (e) {
        if (e.target.tagName === "SPAN") {
            sleft(e.target);
            saveData();
        }
    }, false);
    saveData();
};
function sleft(e) {
    leftbox.appendChild(e.parentElement);
    saveData();
    e.addEventListener("click", function (ele) {
        if (ele.target.tagName === "SPAN") {
            ele.target.parentElement.remove();
            saveData();
        }
    }, false);
    saveData();
}
function saveData() {
    localStorage.setItem("data", lcont.innerHTML);
}
function showlist() {
    lcont.innerHTML = localStorage.getItem("data");
}

