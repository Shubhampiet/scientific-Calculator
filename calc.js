let string="";
let buttons=document.querySelectorAll("button")
Array.from(buttons).forEach(element=>{
element.addEventListener("click", (e)=>{
//    console.log(e.target)
if(e.target.innerHTML=="C"){
    string="";
    document.querySelector("input").value=string;
}
  else if(e.target.innerHTML=="="){
    try{
        string=eval(string)
    document.querySelector("input").value=string;
    }

    catch(error){
        string="error"
        document.querySelector("input").value=string;
    }
   }
    else {
        string=string+e.target.innerHTML;
    document.querySelector("input").value=string;
    }
})
})
Math.sqrt(Number)