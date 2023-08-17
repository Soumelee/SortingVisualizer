async function bubbleSort(){
    console.log("Bubble sort");
    const bar=document.querySelectorAll(".bar");
    const barBefore=document.querySelectorAll(".bar-before");
    for (let i = 0; i < bar.length; i++) {
        for (let j = 1; j < bar.length-i; j++) {
            bar[j].style.background="#001F54";
            bar[j-1].style.background="#001F54";
            
            await wait();

            if(parseInt(barBefore[j-1].textContent) > parseInt(barBefore[j].textContent)){
                //swap
                let temp=bar[j-1].style.height;
                bar[j-1].style.height=bar[j].style.height;  //barBefore[j-1].textContent=parseFloat(bar[j-1].style.height)
                bar[j].style.height=temp;   //barBefore[j].textContent=parseFloat(bar[j].style.height);

                let temp2=barBefore[j-1].textContent;
                barBefore[j-1].textContent=barBefore[j].textContent;
                barBefore[j].textContent=temp2;

            }
            bar[j].style.background="gray";
            bar[j-1].style.background="gray";
        }
        bar[bar.length-1-i].style.background="#08605F";    
    }
}