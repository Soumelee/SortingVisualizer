async function selectionSort() {
    const pause = document.querySelector(".pause");
    pause.style.visibility = "visible";

    disableButtons();

    console.log("Selection sort");
    let info = document.getElementById("info");
    info.innerHTML = "";
    let pseudocode = document.createElement('pre');
    pseudocode.innerHTML = `
    function selectionSort(arr) {
        for (let i = 0; i < arr.length - 1; i++) {
            let min = i;    
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[j] < arr[minIndex]) 
                    min = j;                
            }    
            if (min !== i) 
                swap(arr, i, min);
        }
    }
    `
    info.appendChild(pseudocode);
    const bar = document.querySelectorAll(".bar");
    const barBefore = document.querySelectorAll(".bar-before");

    let itag, jtag, smalltag;
    itag = document.createElement("span");
    jtag = document.createElement("span");
    smalltag = document.createElement("span");
    itag.setAttribute('class', 'tags');
    jtag.setAttribute('class', 'tags');
    smalltag.setAttribute('class', 'tags');
    itag.innerHTML = "i";
    jtag.innerHTML = "j";
    smalltag.innerHTML = "min";
    let smalltagTracker = -1;

    for (let i = 0; i < bar.length; i++) {
        let minValue = i;
        bar[i].style.background = "#9B7EDE";//i bar where swap will happen is purple
        bar[i].appendChild(itag);
        for (let j = i + 1; j < bar.length; j++) {
            bar[j].style.background = "#1F71FF"; //current j bar is blue
            bar[j].appendChild(jtag);


            await wait();

            if (parseInt(barBefore[j].textContent) < parseInt(barBefore[minValue].textContent)) {
                if (minValue != i) {
                    bar[minValue].style.background = "gray";//old min is black
                    bar[minValue].removeChild(smalltag);
                }


                minValue = j;
                bar[minValue].style.background = "#D2374F";//new min red bar                
                bar[minValue].appendChild(smalltag);
                smalltagTracker = j;
                await wait();
            }
            else {
                bar[j].style.background = "gray";
            }
        }

        if (i !== minValue) {
            //swap glow
            bar[i].style.boxShadow = "0px -5px 10px 5px #85B1FF";
            bar[minValue].style.boxShadow = "0px -5px 10px 5px #85B1FF";
            await wait();
            //swap
            let temp = bar[i].style.height;
            bar[i].style.height = bar[minValue].style.height;
            bar[minValue].style.height = temp;

            let tempBefore = barBefore[i].textContent;
            barBefore[i].textContent = barBefore[minValue].textContent;
            barBefore[minValue].textContent = tempBefore;
            await wait();

            bar[i].style.boxShadow = "";
            bar[minValue].style.boxShadow = "";
        }

        bar[minValue].style.background = "gray";
        bar[i].style.background = "#0C9795";//green

        smalltag.remove();
    }

    itag.remove();
    jtag.remove();

    // info.innerHTML = "";

    pause.style.visibility = "hidden";

    enableButtons();
}