const n = 10;//current max 40 looks good
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
        
        const beforeElement = document.createElement("div"); // Create a real element for ::before content
        beforeElement.classList.add("bar-before");
        beforeElement.textContent = Math.floor(array[i] * 100);
        bar.appendChild(beforeElement);

        if (move && move.indices.includes(i)) {
            bar.style.backgroundColor = move.type == "swap" ? "#960200" : "#C5AF1B";
        }
        document.getElementById("container").appendChild(bar);
    }
}



