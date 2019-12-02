def printline(var text) {
  var par = document.createElement("p");
  var text2 = document.createTextNode(text);
  par.appendChild(text);
  document.body.appendChild(par);
}
