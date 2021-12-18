const likebtn= document.querySelector(".like-btn");
let likeIcon =document.querySelector("#icon");
let count = document.querySelector("#count");

//like button clicked
let clicked = false;


likebtn.addEventListener('click', ()=>{
    if(!clicked){
        clicked=true;
        likeIcon.innerHTML=`<i class="fa fa-thumbs-up"><i>`;
     
        count.textContent++;
    }
    else{
        clicked=false;
        likeIcon.innerHTML=`<i class="fa fa-thumbs-up"><i>`;
        count.textContent--;
    }
});
