async function insertionSort(){
    console.log("Insertion sort");
    const bar=document.querySelectorAll(".bar");
    let key;
    bar[0].style.background="#08605F";

    for (let i = 1; i < bar.length; i++) {
        bar[i].style.background="#001F54";
        key=(bar[i].style.height);
        let j=i-1;
        await wait();

        while((j >=0) && (bar[j].style.height)>key){
            
            bar[j].style.background="#001F54";
            bar[j+1].style.height=bar[j].style.height;
            j=j-1;
            await wait();
            for (let k = i; k >=0; k--) {
                bar[k].style.background="#08605F";                
            }
        }

        bar[j+1].style.height=key;
        bar[i].style.background="#08605F";
    }
}
