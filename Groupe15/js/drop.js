let btndrop=document.querySelector("#drop");
let dropmenu=document.querySelector(".dropdown_menu");

let clicked1 = false;


btndrop.addEventListener('click', ()=>{
    if(!clicked1){
        clicked1=true;
        dropmenu.style.display ="block";
     
    }
    else{
        clicked1=false;
        dropmenu.style.display ="none";
    }
});
