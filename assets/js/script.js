custom();
function init(n) {
    const customArrayInput = document.getElementById("customArray");
    const customArrayStr = customArrayInput.value.trim();
    if (customArrayStr === "") {
        const array = [];
        for (let i = 0; i < n; i++) {
            array[i] = Math.random() * (1.0 - 0.1) + 0.1;
            array[i]= Math.floor(array[i] * 100)
        }
        showBars(array);
    }
    else {
        const array = customArrayStr.split(",").map(item => parseInt(item.trim(), 10));
        showBars(array);
    }

}
const time=200;
function wait() {
    return new Promise(resolve => setTimeout(resolve, time));
}

function showBars(array, move) {
    document.getElementById("container").innerHTML = "";
    for (let i = 0; i < array.length; i++) {
        const bar = document.createElement("div");
        // bar.style.height = Math.floor(array[i] * 100) + "%";
        bar.style.height = array[i] + "%";
        bar.classList.add("bar");

        const beforeElement = document.createElement("div"); // Create a real element for ::before content
        beforeElement.classList.add("bar-before");
        beforeElement.textContent = array[i];
        bar.appendChild(beforeElement);

        if (move && move.indices.includes(i)) {
            bar.style.backgroundColor = move.type == "swap" ? "#960200" : "#C5AF1B";
        }
        document.getElementById("container").appendChild(bar);
    }
}
function custom() {
    const lenInput = document.getElementById("len");
    const numberOfBars = parseInt(lenInput.value, 10);
    init(numberOfBars);
}


