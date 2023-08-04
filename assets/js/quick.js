//#08605f is green color for final sorted element or bar
async function quickSort() {
    console.log("Quick sort");
    const bar = document.querySelectorAll(".bar");
    let l = 0, r = bar.length - 1;
    await quickSortfun(bar, l, r);
}
async function quickSortfun(bar, l, r) {

    if (l < r) {
        let pivotIndex = await partition(bar, l, r);
        await quickSortfun(bar, l, pivotIndex - 1);
        await quickSortfun(bar, pivotIndex + 1, r);
    }
    else {
        if (l >= 0 && r >= 0 && l < bar.length && r < bar.length) {
            bar[r].style.background = "#08605f";
            bar[l].style.background = "#08605f";
        }
    }
}
async function partition(bar, l, r) {
    //pivot is r
    let i = l - 1;
    bar[r].style.background = "#a62639";//pivot element red 
    for (let j = l; j <= r; j++) {
        bar[j].style.background = "yellow";  
        await wait();

        if (parseInt(bar[j].style.height) < parseInt(bar[r].style.height)) {
            i++;
            //swap
            let temp = bar[i].style.height;
            bar[i].style.height = bar[j].style.height;
            bar[j].style.height = temp;

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

    bar[r].style.background = "pink";
    bar[i].style.background = "#08605f";

    await wait();

    for (let k = 0; k < bar.length; k++) {
        if (!bar[k].style.background === "#08605f"){
            bar[k].style.background = "black";
        }
    }
    return i;

}
