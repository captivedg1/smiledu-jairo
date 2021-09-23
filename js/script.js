document.getElementById("mOver").onmouseover = function() {mouseOver()};
document.getElementById("mOver").onmouseout = function() {mouseOut()};

function mouseOver() {
  document.getElementById("paddLeft").style.paddingLeft = "255px";
}

function mouseOut() {
  document.getElementById("paddLeft").style.paddingLeft = "0px";
}


document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, options);
  });


// ACCORDION

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

// MENU ACCORDION FLOAT

function openMenu(){
    document.getElementById("action-button").classList.toggle("open");
}

function openSubMenu(){
    document.getElementById("openSubMenu").classList.toggle("openSubMenu");
}

//MODAL HISTORICO

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
