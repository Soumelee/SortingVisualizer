async function insertionSort() {
    console.log("Insertion sort");

    let info = document.getElementById("info");
    info.innerHTML = "";
    let pseudocode = document.createElement('pre');
    pseudocode.innerHTML = `
    function insertionSort(arr) {
        for (let i = 1; i < arr.length; i++) {
            let key = arr[i];
            let j = i - 1;    
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j--;
            }    
            arr[j + 1] = key;
        }
    }    
    `
    info.appendChild(pseudocode);

    let keytag, jtag, jplus1tag;
    keytag = document.createElement('span');
    jtag = document.createElement('span');
    jplus1tag = document.createElement('span');
    keytag.setAttribute('class', 'tags');
    jtag.setAttribute('class', 'tags');
    jplus1tag.setAttribute('class', 'tags');
    keytag.innerHTML = 'key= ';
    jtag.innerHTML = 'j';
    jplus1tag.innerHTML = 'j+1';

    const pause = document.querySelector(".pause");
    pause.style.visibility = "visible";

    disableButtons();

    const bar = document.querySelectorAll(".bar");
    const barBefore = document.querySelectorAll(".bar-before");
    let key, keyBefore;
    bar[0].style.background = "#08605F";

    for (let i = 1; i < bar.length; i++) {
        bar[i].style.background = "#001F54";

        key = (bar[i].style.height);
        keyBefore = (barBefore[i].textContent);
        keytag.innerHTML = 'key= ' + keyBefore;
        bar[i].appendChild(keytag);

        let j = i - 1;
        bar[j].appendChild(jtag);
        await wait();

        while ((j >= 0) && (parseInt(barBefore[j].textContent)) > keyBefore) {

            bar[j].style.background = "#001F54"; //blue
            try {
                bar[j-1].appendChild(jtag);
            } catch (error) {
                jtag.parentNode.removeChild(jtag);
            }
            bar[j].appendChild(jplus1tag);            

            bar[j + 1].style.height = bar[j].style.height;           
            barBefore[j + 1].textContent = barBefore[j].textContent;

            j = j - 1;
            await wait();

            for (let k = i; k >= 0; k--) {
                bar[k].style.background = "#08605F";
            }
        }
        bar[j + 1].appendChild(jplus1tag);
        await wait();
        bar[j + 1].style.height = key;
        barBefore[j + 1].textContent = keyBefore;
        bar[j + 1].style.boxShadow = "0px -5px 10px 5px #85B1FF";
        await wait();
        bar[j + 1].style.boxShadow = "";
        await wait();
        bar[j + 1].removeChild(jplus1tag);

        bar[i].style.background = "#08605F";

    }
    jtag.remove();
    jplus1tag.remove();
    keytag.remove();
    pause.style.visibility = "hidden";

    enableButtons();
}
