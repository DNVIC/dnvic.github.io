



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

