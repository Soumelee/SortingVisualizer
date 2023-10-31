async function selectionSort(){
    const pause=document.querySelector(".pause");
    pause.style.visibility = "visible";

    disableButtons();
    
    console.log("Selection sort");
    const bar=document.querySelectorAll(".bar");
    const barBefore=document.querySelectorAll(".bar-before");

    let itag, jtag, smalltag;
    itag = document.createElement("span");
    jtag = document.createElement("span");
    smalltag = document.createElement("span");
    itag.setAttribute('class', 'tags');
    jtag.setAttribute('class', 'tags');
    smalltag.setAttribute('class', 'tags');
    itag.innerHTML = "i";
    jtag.innerHTML = "j";
    smalltag.innerHTML= "min";

    for (let i = 0; i < bar.length; i++) {
        let minValue=i;
        bar[i].style.background="#9B7EDE";//i bar where swap will happen is purple
        bar[i].appendChild(itag);
        for (let j = i+1; j < bar.length; j++) {
            bar[j].style.background="#001F54"; //current j bar is blue
            bar[j].appendChild(jtag);
            
            
            await wait();

            if(parseInt(barBefore[j].textContent) < parseInt(barBefore[minValue].textContent)){
                if(minValue!=i){
                    bar[minValue].style.background="gray";//old min is black
                    bar[minValue].removeChild(smalltag);
                }
                
                minValue=j;
                bar[minValue].style.background="#A62639";//new min red bar
                bar[minValue].appendChild(smalltag);
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
    bar[bar.length-1].removeChild(itag);
    bar[bar.length-1].removeChild(jtag);
    bar[bar.length-1].removeChild(smalltag);

    pause.style.visibility = "hidden";

    enableButtons();
}