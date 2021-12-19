var dropdown = document.getElementsByClassName("dropdown");
var i;

	for (i = 0; i < dropdown.length; i++) {
	  dropdown[i].addEventListener("click", function() {
	    this.classList.toggle("active");
	    var dropdownContent = this.nextElementSibling;
	    if (dropdownContent.style.display === "block") {
	      dropdownContent.style.display = "none";
	    } else {
	      dropdownContent.style.display = "block";
	    }
	  });
}

function ShowAndHide ()
{
	var x = document.getElementById("menu");
	if (x.style.display === "block") 
	{
		x.style.display = "none";
	}else{

		x.style.display = "block";
	}
}



function maFonction() {
  var div = document.getElementById("maDIV");
  if (div.style.display === "none") {
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
}
