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

    const relativeWidth=(container.clientWidth)/(array.length);
    const marginWidth = relativeWidth / 4;
    // console.log(relativeWidth,marginWidth);

    for (let i = 0; i < array.length; i++) {
        const bar = document.createElement("div");   
        const relativeHeight = (array[i] / maxElement) * 100;     
        bar.style.height = relativeHeight + "%";
        bar.classList.add("bar");        
        
        bar.style.width="20px";
        bar.style.marginLeft=bar.style.marginRight="5px";
       

        const beforeElement = document.createElement("div"); 
        beforeElement.classList.add("bar-before");
        beforeElement.textContent = array[i];
        bar.appendChild(beforeElement);
        
        const afterElement = document.createElement("div"); 
        afterElement.classList.add("bar-after");
        afterElement.textContent = i;
        bar.appendChild(afterElement);       
        container.appendChild(bar);     
        
        if(array.length>25){
            bar.style.width=relativeWidth+ "%";            
            bar.style.marginLeft=marginWidth+ "px";
            bar.style.marginRight="0px";
            beforeElement.style.display="none";
            afterElement.style.display="none";
        }
    }
}
function customSize() {
    document.querySelector(".pause").style.visibility = "hidden";
    enableButtons();


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
    document.querySelector(".pause").style.visibility = "hidden";
    enableButtons();
    
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

function enableButtons(){
    let buttons = document.querySelectorAll("button[id$='bubble'], button[id$='insertion'], button[id$='selection'], button[id$='merge'], button[id$='quick']");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = false;
        buttons[i].style.cursor = "pointer";

    }

    let buttons1 = document.querySelectorAll("button[id$='bubble1'], button[id$='insertion1'], button[id$='selection1'], button[id$='merge1'], button[id$='quick1']");
    for (let i = 0; i < buttons1.length; i++) {
        buttons1[i].disabled = false;
        buttons1[i].style.cursor = "pointer";
        
    }
}
function disableButtons() {
    let buttons = document.querySelectorAll("button[id$='bubble'], button[id$='insertion'], button[id$='selection'], button[id$='merge'], button[id$='quick']");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
        buttons[i].style.cursor = "not-allowed";

    }

    let buttons1 = document.querySelectorAll("button[id$='bubble1'], button[id$='insertion1'], button[id$='selection1'], button[id$='merge1'], button[id$='quick1']");
    for (let i = 0; i < buttons1.length; i++) {
        buttons1[i].style.cursor = "not-allowed";        
    }
}