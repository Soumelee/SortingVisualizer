async function insertionSort(){
    console.log("Insertion sort");
    const bar=document.querySelectorAll(".bar");
    const barBefore=document.querySelectorAll(".bar-before");
    let key, keyBefore;
    bar[0].style.background="#08605F";

    for (let i = 1; i < bar.length; i++) {
        bar[i].style.background="#001F54";
        
        key=(bar[i].style.height);
        keyBefore=(barBefore[i].textContent); 

        let j=i-1;
        await wait();

        while((j >=0) && (parseInt(barBefore[j].textContent))>keyBefore){
            
            bar[j].style.background="#001F54";
            bar[j+1].style.height=bar[j].style.height;  
            
            barBefore[j+1].textContent=barBefore[j].textContent;
            
            j=j-1;

            await wait();

            for (let k = i; k >=0; k--) {
                bar[k].style.background="#08605F";                
            }
        }

        bar[j+1].style.height=key;  
        barBefore[j+1].textContent=keyBefore;

        bar[i].style.background="#08605F";
    }
}
