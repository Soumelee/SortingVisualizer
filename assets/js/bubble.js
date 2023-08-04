async function bubbleSort(){
    console.log("Bubble sort");
    const bar=document.querySelectorAll(".bar");
    for (let i = 0; i < bar.length; i++) {
        for (let j = 1; j < bar.length-i; j++) {
            bar[j].style.background="#001F54";
            bar[j-1].style.background="#001F54";
            
            await wait();

            if(parseInt(bar[j-1].style.height)>(parseInt(bar[j].style.height))){
                //swap
                let temp=bar[j-1].style.height;
                bar[j-1].style.height=bar[j].style.height;
                bar[j].style.height=temp;
            }
            bar[j].style.background="black";
            bar[j-1].style.background="black";
        }
        bar[bar.length-1-i].style.background="#08605F";
        
    }
}