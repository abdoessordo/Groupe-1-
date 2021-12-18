var feild =document.querySelector('.comment textarea');
var backup =feild.getAttribute('.comment textarea.placeholder');
var btn = document.querySelector('.btn-comment');
var clear = document.getElementById('clear')

//comment section
feild.onfocus =function(){
    this.setAttribute('placeholder','');
    this.style.border='1px solid #efef';
    btn.style.display ="block";
}
feild.onblur =function(){
    this.setAttribute('placeholder',backup);
    this.style.border='none';
}
clear.onclick = function(){
    btn.style.display= 'none';
    feild.value='';
}