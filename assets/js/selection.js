async function selectionSort(){
    const pause=document.querySelector(".pause");
    pause.style.visibility = "visible";
    
    console.log("Selection sort");
    const bar=document.querySelectorAll(".bar");
    const barBefore=document.querySelectorAll(".bar-before");
    for (let i = 0; i < bar.length; i++) {
        let minValue=i;
        bar[i].style.background="#9B7EDE";//i bar where swap will happen is purple
        for (let j = i+1; j < bar.length; j++) {
            bar[j].style.background="#001F54"; //current j bar is blue
            
            await wait();

            if(parseInt(barBefore[j].textContent) < parseInt(barBefore[minValue].textContent)){
                if(minValue!=i){
                    bar[minValue].style.background="gray";//old min is black
                }
                
                minValue=j;
                bar[minValue].style.background="#A62639";//new min red bar
            }
            else{
                bar[j].style.background="gray";
            }
        }
        // await wait();
        //swap
        let temp=bar[i].style.height;
        bar[i].style.height=bar[minValue].style.height;     
        bar[minValue].style.height=temp;  

        let tempBefore=barBefore[i].textContent;
        barBefore[i].textContent=barBefore[minValue].textContent;     
        barBefore[minValue].textContent=tempBefore;   

        bar[minValue].style.background="gray";
        bar[i].style.background="#08605F";
    }
    pause.style.visibility = "hidden";
}