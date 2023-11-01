async function bubbleSort() {
    console.log("Bubble sort");

    let info = document.getElementById("info");
    info.innerHTML = "";
    let pseudocode = document.createElement('pre');
    pseudocode.innerHTML = `
    function bubbleSort(arr) {
        for (let i = 0; i < arr.length; i++) {
            for (let j = 1; j < arr.length - i; j++) {
                if (arr[j - 1] > arr[j]) {
                    swap(arr, j, j - 1);
                }
            }
        }
    }
    `
    info.appendChild(pseudocode);


    const pause = document.querySelector(".pause");
    pause.style.visibility = "visible";

    disableButtons();

    const bar = document.querySelectorAll(".bar");
    const barBefore = document.querySelectorAll(".bar-before");

    let jtag = document.createElement('span'),
        jminus1tag = document.createElement('span');
    jtag.innerHTML = 'j';
    jtag.setAttribute('class', 'tags');
    jminus1tag.innerHTML = 'j-1';
    jminus1tag.setAttribute('class', 'tags');

    for (let i = 0; i < bar.length; i++) {
        for (let j = 1; j < bar.length - i; j++) {
            bar[j].style.background = "#1F71FF";
            bar[j].appendChild(jtag);

            bar[j - 1].style.background = "#1F71FF";
            bar[j - 1].appendChild(jminus1tag);

            await wait();

            if (parseInt(barBefore[j - 1].textContent) > parseInt(barBefore[j].textContent)) {
                //swap glow
                bar[j].style.boxShadow = "0px -5px 10px 5px #85B1FF";
                bar[j - 1].style.boxShadow = "0px -5px 10px 5px #85B1FF";
                await wait();

                //swap
                let temp = bar[j - 1].style.height;
                bar[j - 1].style.height = bar[j].style.height;  //barBefore[j-1].textContent=parseFloat(bar[j-1].style.height)
                bar[j].style.height = temp;   //barBefore[j].textContent=parseFloat(bar[j].style.height);
                
                let temp2 = barBefore[j - 1].textContent;
                barBefore[j - 1].textContent = barBefore[j].textContent;
                barBefore[j].textContent = temp2;
                await wait();

            }
            bar[j].style.boxShadow = "";
            bar[j - 1].style.boxShadow = "";

            bar[j].style.background = "gray";
            bar[j - 1].style.background = "gray";
        }
        bar[bar.length - 1 - i].style.background = "#0C9795";
    }
    pause.style.visibility = "hidden";
    // bar[1].removeChild(jtag);
    // bar[0].removeChild(jminus1tag);
    jtag.remove();
    jminus1tag.remove();
    // info.innerHTML = "";


    enableButtons();
}