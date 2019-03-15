function hide(e,reflow){
    if(reflow) {
        console.log(e);
        e.style.display="none";
    }else{
        e.style.visibility="hidden";
    }
}