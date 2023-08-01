async function mergeSort(){
    console.log("Merge sort");
    const bar = document.querySelectorAll(".bar");
    let l = 0, r = bar.length - 1;
    mergeSortFun(bar, l, r);
    console.log("sort complete");
}

async function mergeSortFun(bar, l, r) {
    
    if (l >= r) {
        return;
    }
    let m = Math.floor(l + (r - l) / 2);
    await mergeSortFun(bar, l, m);
    await mergeSortFun(bar, m + 1, r);
    await merge(bar, l, m, r);
}
async function merge(bar, l, m, r) {
    const size1 = m - l + 1;
    const size2 = r - m;
    
    let temp1 = new Array(size1);
    let temp2 = new Array(size2);

    for (let i = 0; i < size1; i++) {
        temp1[i] = bar[l + i].style.height;
        
        await wait(500);
        bar[l + i].style.background="#9B7EDE";//purple left temp array
    }
    for (let i = 0; i < size2; i++) {
        temp2[i] = bar[m + 1 + i].style.height;
        
        await wait(500);
        bar[m + 1 + i].style.background="#E1BC29";//yellow right temp array
    }
    
    await wait(500);
    let i = 0, j = 0, k = l;
    while (i < size1 && j < size2) {
        await wait(500);
        if (parseInt(temp1[i]) <= parseInt(temp2[j])) {
            if(size1+size2==bar.length){
                bar[k].style.background="#08605F";//final sorted green bars
            }
            else bar[k].style.background="#2FEEEB";//temp sorted light green
            bar[k].style.height = temp1[i];
            i++;
        }
        else {
            if(size1+size2==bar.length){
                bar[k].style.background="#08605F";//final sorted green bars
            }
            else bar[k].style.background="#2FEEEB";//temp sorted light green
            bar[k].style.height = temp2[j];
            j++;
        }
        k++;
    }
    while (i < size1) {
        await wait(500);
        if(size1+size2==bar.length){
            bar[k].style.background="#08605F";//final sorted green bars
        }
        else bar[k].style.background="#2FEEEB";//temp sorted light green
        bar[k].style.height = temp1[i];
        i++;
        k++;
    }
    while (j < size2) {
        await wait(500);
        if(size1+size2==bar.length){
            bar[k].style.background="#08605F";//final sorted green bars
        }
        else bar[k].style.background="#2FEEEB";//temp sorted light green 
        bar[k].style.height = temp2[j];
        j++;
        k++;
    }

}