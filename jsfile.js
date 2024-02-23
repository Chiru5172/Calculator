window.onload=function(){
    let fnRes=document.getElementById("result")
    //console.log(fnRes)
    function getele(){
        let uInp=this.innerHTML;
        if(uInp=="="){
            fnRes.value=eval(fnRes.value);
        }
        else if(uInp=="C"){
            fnRes.value="";
        }
        else if(uInp=="DEL"){
            fnRes.value=fnRes.value.substring(0,fnRes.value.length-1);
        }
        else{
            fnRes.value+=uInp
        }
    }

    //collect all buttons in calc programme
    let allbtns=document.getElementById("allinputs").getElementsByTagName("button")
    for(let i=0;i<allbtns.length;i++){
        allbtns[i].addEventListener("click",getele);
    }
}