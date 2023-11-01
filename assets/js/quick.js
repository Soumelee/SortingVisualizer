//#0C9795 is green color for final sorted element or bar
async function quickSort() {
    const pause = document.querySelector(".pause");
    pause.style.visibility = "visible";

    disableButtons();

    console.log("Quick sort");

    let info = document.getElementById("info");
    info.innerHTML = "";
    let pseudocode = document.createElement('pre');
    pseudocode.innerHTML = `
    function quickSort(arr, l, r) {
        if (l < r) {
            const pivotIndex = partition(arr, l, r);
            quickSort(arr, l, pivotIndex - 1);
            quickSort(arr, pivotIndex + 1, r);
        }
    }
    function partition(arr, l, r) {
        const pivot = arr[r]; 
        let i = l - 1;    
        for (let j = l; j < r; j++) { 
            if (arr[j] < pivot) { 
                i++;
                swap(arr, i, j);
            }
        }    
        swap(arr, i + 1, pivot);
        return i + 1;
    }  
    `
    info.appendChild(pseudocode);

    const bar = document.querySelectorAll(".bar");
    const barBefore = document.querySelectorAll(".bar-before");
    let l = 0, r = bar.length - 1;
    await quickSortfun(bar, barBefore, l, r);
    pause.style.visibility = "hidden";

    enableButtons();
}
async function quickSortfun(bar, barBefore, l, r) {

    if (l < r) {
        let pivotIndex = await partition(bar, barBefore, l, r);
        await quickSortfun(bar, barBefore, l, pivotIndex - 1);
        await quickSortfun(bar, barBefore, pivotIndex + 1, r);
    }
    else {
        if (l >= 0 && r >= 0 && l < bar.length && r < bar.length) {
            bar[r].style.background = "#0C9795";//green
            bar[l].style.background = "#0C9795";
        }
    }
}
async function partition(bar, barBefore, l, r) {
    let pivottag = document.createElement('span');
    pivottag.setAttribute('class', 'tags');
    pivottag.innerHTML = "pivot";

    let jtag = document.createElement('span');
    jtag.setAttribute('class', 'tags');
    jtag.innerHTML = "j";

    let itag = document.createElement('span');
    itag.setAttribute('class', 'tags');
    itag.innerHTML = "i";

    let i1tag = document.createElement('span');
    i1tag.setAttribute('class', 'tags');
    i1tag.innerHTML = "i+1";

    //pivot is r

    let i = l - 1;
    try {
        bar[i].appendChild(itag);
    } catch (error) {

    }


    bar[r].style.background = "#D2374F";//pivot element red 
    bar[r].appendChild(pivottag);

    for (let j = l; j <= r; j++) {
        bar[j].style.background = "yellow";
        bar[j].appendChild(jtag);
        await wait();

        if (parseInt(barBefore[j].textContent) < parseInt(barBefore[r].textContent)) {
            i++;
            bar[i].appendChild(itag);

            if (i !== j) {
                //swap glow            
                bar[j].style.boxShadow = "0px -5px 10px 5px #92C4DD";
                bar[i].style.boxShadow = "0px -5px 10px 5px #92C4DD";
                await wait();

                //swap
                let temp = bar[i].style.height;
                bar[i].style.height = bar[j].style.height;
                bar[j].style.height = temp;

                let tempBefore = barBefore[i].textContent;
                barBefore[i].textContent = barBefore[j].textContent;
                barBefore[j].textContent = tempBefore;
                await wait();

                bar[j].style.boxShadow = "";
                bar[i].style.boxShadow = "";
            }


            bar[i].style.background = "orange";//less than pivot orange
            if (i != j) bar[j].style.background = "orange";
            await wait();
        }
        else {
            bar[j].style.background = "pink";//greater than pivot pink
        }
    }
    i++;
    bar[i].appendChild(i1tag);
    await wait();

    //swap glow            
    bar[r].style.boxShadow = "0px -5px 10px 5px #92C4DD";
    bar[i].style.boxShadow = "0px -5px 10px 5px #92C4DD";
    await wait();

    //swap pivot to correct position
    let temp = bar[i].style.height;
    bar[i].style.height = bar[r].style.height;
    bar[r].style.height = temp;

    let tempBefore = barBefore[i].textContent;
    barBefore[i].textContent = barBefore[r].textContent;
    barBefore[r].textContent = tempBefore;
    await wait();
    bar[r].style.boxShadow = "";
    bar[i].style.boxShadow = "";

    bar[r].style.background = "pink";
    bar[i].style.background = "#0C9795";

    await wait();

    for (let k = 0; k < bar.length; k++) {
        if (!bar[k].style.background === "#0C9795") {
            bar[k].style.background = "gray";
        }
    }
    pivottag.remove();
    itag.remove();
    jtag.remove();
    i1tag.remove();
    return i;

}
