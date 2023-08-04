const n = 20;
const array = [];
init();
function init() {
    for (let i = 0; i < n; i++) {
        array[i] = Math.random()*(1.0 - 0.1) + 0.1;
    }
    showBars();
}
const time=200;
function wait() {
    return new Promise(resolve => setTimeout(resolve, time));
}

function showBars(move) {
    document.getElementById("container").innerHTML = "";
    for (let i = 0; i < array.length; i++) {
        const bar = document.createElement("div");
        bar.style.height = Math.floor(array[i] * 100) + "%";
        bar.classList.add("bar");

        if (move && move.indices.includes(i)) {
            bar.style.backgroundColor = move.type == "swap" ? "#960200" : "#C5AF1B";
        }
        document.getElementById("container").appendChild(bar);
    }
}



