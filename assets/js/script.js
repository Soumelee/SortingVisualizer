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
    const container = document.getElementById("container");
    container.innerHTML = "";
    const maxElement = Math.max(...array);

    for (let i = 0; i < array.length; i++) {
        const bar = document.createElement("div");   
        const relativeHeight = (array[i] / maxElement) * 100;     
        bar.style.height = relativeHeight + "%";
        bar.classList.add("bar");

        const beforeElement = document.createElement("div"); 
        beforeElement.classList.add("bar-before");
        beforeElement.textContent = array[i];
        bar.appendChild(beforeElement);

        const afterElement = document.createElement("div"); 
        afterElement.classList.add("bar-after");
        afterElement.textContent = i;
        bar.appendChild(afterElement);

        if (move && move.indices.includes(i)) {
            bar.style.backgroundColor = move.type == "swap" ? "#960200" : "#C5AF1B";
        }
        container.appendChild(bar);
    }
}
function customSize() {
    document.getElementById("customArray").value="";
    custom();
}
function custom() {
    const lenInput = document.getElementById("len");
    const numberOfBars = parseInt(lenInput.value, 10);
    init(numberOfBars);
}


