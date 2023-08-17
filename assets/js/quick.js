//#08605f is green color for final sorted element or bar
async function quickSort() {
    console.log("Quick sort");
    const bar = document.querySelectorAll(".bar");
    const barBefore=document.querySelectorAll(".bar-before");
    let l = 0, r = bar.length - 1;
    await quickSortfun(bar, barBefore, l, r);
}
async function quickSortfun(bar, barBefore, l, r) {

    if (l < r) {
        let pivotIndex = await partition(bar, barBefore, l, r);
        await quickSortfun(bar, barBefore, l, pivotIndex - 1);
        await quickSortfun(bar, barBefore, pivotIndex + 1, r);
    }
    else {
        if (l >= 0 && r >= 0 && l < bar.length && r < bar.length) {
            bar[r].style.background = "#08605f";
            bar[l].style.background = "#08605f";
        }
    }
}
async function partition(bar, barBefore, l, r) {
    //pivot is r
    let i = l - 1;
    bar[r].style.background = "#a62639";//pivot element red 
    for (let j = l; j <= r; j++) {
        bar[j].style.background = "yellow";  
        await wait();

        if (parseInt(barBefore[j].textContent) < parseInt(barBefore[r].textContent)) {
            i++;
            //swap
            let temp = bar[i].style.height;
            bar[i].style.height = bar[j].style.height;      
            bar[j].style.height = temp;     
            
            let tempBefore = barBefore[i].textContent;
            barBefore[i].textContent = barBefore[j].textContent;      
            barBefore[j].textContent = tempBefore;     

            bar[i].style.background = "orange";//less than pivot orange
            if (i != j) bar[j].style.background = "orange";

            await wait();
        }
        else {
            bar[j].style.background = "pink";//greater than pivot pink
        }
    }
    i++;
    await wait();
    //swap pivot to correct position
    let temp = bar[i].style.height;
    bar[i].style.height = bar[r].style.height;      
    bar[r].style.height = temp;     
    
    let tempBefore = barBefore[i].textContent;
    barBefore[i].textContent = barBefore[r].textContent;      
    barBefore[r].textContent = tempBefore;     

    bar[r].style.background = "pink";
    bar[i].style.background = "#08605f";

    await wait();

    for (let k = 0; k < bar.length; k++) {
        if (!bar[k].style.background === "#08605f"){
            bar[k].style.background = "gray";
        }
    }
    return i;

}
