async function mergeSort(){
    const pause=document.querySelector(".pause");
    pause.style.visibility = "visible";

    disableButtons();

    console.log("Merge sort");

    let info = document.getElementById("info");
    info.innerHTML = "";
    let pseudocode = document.createElement('pre');
    pseudocode.innerHTML = `    
    function mergeSort(arr, l, r) {
        if (l < r) {
            const m = Math.floor(l + (r - l) / 2);
            mergeSort(arr, l, m);
            mergeSort(arr, m + 1, r);
            merge(arr, l, m, r);
        }
    }
    function merge(arr, l, m, r) {
        const n1 = m - l + 1;
        const n2 = r - m;    
        const L = new Array(n1);
        const R = new Array(n2);    
        for (let i = 0; i < n1; i++)
            L[i] = arr[l + i];
        for (let j = 0; j < n2; j++)
            R[j] = arr[m + 1 + j];    
        let i = 0;
        let j = 0;
        let k = l;    
        while (i < n1 && j < n2) {
            if (L[i] <= R[j]) {
                arr[k] = L[i];
                i++;
            } else {
                arr[k] = R[j];
                j++;
            }
            k++;
        }    
        while (i < n1) {
            arr[k] = L[i];
            i++;
            k++;
        }    
        while (j < n2) {
            arr[k] = R[j];
            j++;
            k++;
        }
    }     
    `
    info.appendChild(pseudocode);

    const bar = document.querySelectorAll(".bar");
    const barBefore=document.querySelectorAll(".bar-before");

    let l = 0, r = bar.length - 1;
    await mergeSortFun(bar, barBefore, l, r);    
    pause.style.visibility = "hidden";

    enableButtons();
}

async function mergeSortFun(bar, barBefore, l, r) {
    if (l >= r) {
        return;
    }
    let m = Math.floor(l + (r - l) / 2);
    await mergeSortFun(bar, barBefore, l, m);
    await mergeSortFun(bar, barBefore, m + 1, r);
    await merge(bar, barBefore, l, m, r);
}
async function merge(bar, barBefore, l, m, r) {
    const size1 = m - l + 1;
    const size2 = r - m;
    
    let temp1 = new Array(size1);
    let temp2 = new Array(size2);
    let temp1Before = new Array(size1);
    let temp2Before = new Array(size2);

    for (let i = 0; i < size1; i++) {
        temp1[i] = bar[l + i].style.height;
        temp1Before[i] = barBefore[l + i].textContent;
        
        await wait();
        bar[l + i].style.background="#9B7EDE";//purple left temp array
    }
    for (let i = 0; i < size2; i++) {
        temp2[i] = bar[m + 1 + i].style.height;
        temp2Before[i] = barBefore[m + 1 + i].textContent;
        
        await wait();
        bar[m + 1 + i].style.background="#E1BC29";//yellow right temp array
    }
    
    await wait();
    let i = 0, j = 0, k = l;
    while (i < size1 && j < size2) {
        await wait();
        if (parseInt(temp1Before[i]) <= parseInt(temp2Before[j])) {
            if(size1+size2==bar.length){
                bar[k].style.background="#08605F";//final sorted green bars
            }
            else bar[k].style.background="#2FEEEB";//temp sorted light green
            
            bar[k].style.height = temp1[i];    
            barBefore[k].textContent=temp1Before[i];

            i++;
        }
        else {
            if(size1+size2==bar.length){
                bar[k].style.background="#08605F";//final sorted green bars
            }
            else bar[k].style.background="#2FEEEB";//temp sorted light green
            bar[k].style.height = temp2[j];     
            barBefore[k].textContent=temp2Before[j];
            j++;
        }
        k++;
    }
    while (i < size1) {
        await wait();
        if(size1+size2==bar.length){
            bar[k].style.background="#08605F";//final sorted green bars
        }
        else bar[k].style.background="#2FEEEB";//temp sorted light green
        
        bar[k].style.height = temp1[i];     
        barBefore[k].textContent=temp1Before[i];

        i++;
        k++;
    }
    while (j < size2) {
        await wait();
        if(size1+size2==bar.length){
            bar[k].style.background="#08605F";//final sorted green bars
        }
        else bar[k].style.background="#2FEEEB";//temp sorted light green 
        
        bar[k].style.height = temp2[j];     
        barBefore[k].textContent=temp2Before[j];

        j++;
        k++;
    }

}