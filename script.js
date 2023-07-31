document.getElementById("init").onclick = function () { init() };

const n = 20;
const array = [];
init();
function init() {
    for (let i = 0; i < n; i++) {
        array[i] = Math.random();
    }
    showBars();
}

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function showBars(move) {
    document.getElementById("container").innerHTML = "";
    for (let i = 0; i < array.length; i++) {
        const bar = document.createElement("div");
        bar.style.height = array[i] * 100 + "%";
        bar.classList.add("bar");

        if (move && move.indices.includes(i)) {
            bar.style.backgroundColor = move.type == "swap" ? "#960200" : "#C5AF1B";
        }
        document.getElementById("container").appendChild(bar);
    }
}



