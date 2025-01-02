let boxs = document.getElementsByClassName('box');
console.log(boxs);
document.getElementById("box_1").style.color = 'red';

// for (let i = 0; i < boxs.length; i++) {
//     boxs[i].style.backgroundColor = 'yellow';
//     boxs[i].style.border = '2px solid blue';
// }
function click(e) {
    let btn = document.getElementById("box_1");
    btn.addEventListener('click', () => {
        alert('Hello World');
        document.querySelector(".box1").innerHTML ="  you were clicked!";
    });
}

function keyDown(e) {
    document.addEventListener("keydown",(e) => {
        if(e.key === "Enter"){
            alert('Hello World');
            document.querySelector(".box1").innerHTML ="  you were clicked!";
        }
    });
}

function interval(){
    function getRandomColots(){
        let val1 = Math.ceil(0+ Math.random()*255);
        let val2 = Math.ceil(0+ Math.random()*255);
        let val3 = Math.ceil(0+ Math.random()*255);
        return `rgb(${val1},${val2},${val3})`;
    }
    setInterval(() => {
        document.querySelector(".box").style.backgroundColor = getRandomColots();
    }, 5000);
}

function proms(){
    let prom1 = new Promise((resolve, reject) => {
        let a = Math.random();
        if(a < 0.5){
           reject("Invalid,not supported"+a);
        }
        else {
            setTimeout(() => {
                console.log("promise is done");
                resolve("success");
            },3000);
        }
    });
    prom1.then((a) => {
        console.log(a);
    }).catch((err) => {
        console.log(err);
    });
};




