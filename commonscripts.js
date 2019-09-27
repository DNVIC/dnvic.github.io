



var x = document.getElementsByClassName("btn");


var i;

for (i = 0; i < x.length; i++) {
    console.log(x[i].id);
    var d = [];
    d.push[x[i].id]
    document.getElementById(x[i].id).addEventListener("click", function(event) {
        console.log(event.target.id);
        location.href = event.target.id;
    });
    //console.log(location.href + " Button " + i + " href");
}

// toggle when clicked
function dropdown() {
    document.getElementById("theselector").classList.toggle("show");
}

// close window when clicking off think
window.onclick = function(event) {
  if (!event.target.matches('.thelink')) {

    var dropdowns = document.getElementsByClassName("insideselector");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openList = dropdowns[i];
      if (openList.classList.contains('show')) {
        openList.classList.remove('show');
      }
    }
  }
}
