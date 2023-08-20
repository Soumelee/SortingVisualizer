customSize();

// function wait() {
//     let slider = document.getElementById('slider');
//     const sliderValueDisplay = document.getElementById('sliderValue');
//     const time=parseInt(slider.value);
//     slider.addEventListener('input', () => {
//         sliderValueDisplay.textContent = slider.value;
//         time = parseInt(slider.value);
//     });
//     return new Promise(resolve => setTimeout(resolve, time));
// }
const slider = document.getElementById('slider');
const sliderValueDisplay = document.getElementById('sliderValue');
let animationDelay = parseInt(slider.value);
slider.addEventListener('input', () => {
    sliderValueDisplay.textContent = slider.value;
    animationDelay = parseInt(slider.value);
});
function wait() {
    return new Promise(resolve => setTimeout(resolve, animationDelay));
}

function togglePlayPause(){
    alert('Press OK to resume.');
}

function showBars(array) {
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
        container.appendChild(bar);
    }
}
function customSize() {
    document.getElementById("customArray").value="";
    const lenInput = document.getElementById("len");
    const numberOfBars = parseInt(lenInput.value, 10);
    if(numberOfBars==1){
        alert("An array of length =1 is sorted in itself! Enter value > 1 to visualize the sorting process :)");
        return;
    }
    if(numberOfBars==0 || lenInput.value==""){
        alert("🤦‍♀️ That is an empty array! Enter value > 1")
        return;
    }
    const array = [];
        for (let i = 0; i < numberOfBars; i++) {
            array[i] = Math.random() * (1.0 - 0.1) + 0.1;
            array[i]= Math.floor(array[i] * 100)
        }
    showBars(array);
}
function customArray(){
    const customArrayInput = document.getElementById("customArray");
    if(customArrayInput.value===""){
        alert("🧐 No custom array values given");
        return;
    }
    const customArrayStr = customArrayInput.value.trim();
    const array = customArrayStr.split(",").map(item => parseInt(item.trim(), 10));
    if(array.length==1){
        alert("One value is sorted in itself! Enter multiple values to visualize the sorting process :)");
        return;
    }
    showBars(array);
}

