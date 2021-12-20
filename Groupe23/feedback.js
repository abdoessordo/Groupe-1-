var feild = document.querySelector('textarea');
var backUp = feild.getAttribute('placeholder')
var btn = document.querySelector('.btn');
var clear = document.getElementById('clear')

feild.onfocus = function(){
    this.setAttribute('placeholder','');
    this.style.borderBlockColor = '#333'
    btn.style.display = 'block'
}

feild.onblur = function(){
    this.setAttribute('placeholder',backUp)
    this.style.borderBlockColor = '#aaa'
}

clear.onclick = function(){
    btn.style.display = 'none';
    feild.value= '';
}
var submit = document.querySelector('.addComment');
submit.onclick = () => {
    let comment = document.querySelector('.text').value;
    if (comment === ""){
        return false
    } else {
        var newComment = document.createElement('div');
        newComment.className = 'x';
        newComment.innerHTML = comment;
        document.querySelector('.avis').appendChild(newComment);
        feild.value= '';
        return false;
    }
}