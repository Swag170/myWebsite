function randomize() {
  //document.getElementById('p1').style.color = randomColors();
  document.body.style.backgroundColor = randomColors();
  document.body.style.color = randomColors();
}


// random colors - taken from here:
// http://www.paulirish.com/2009/random-hex-color-code-snippets/

function randomColors() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}



function startDrag(e) {
  // determine event object
  if (!e) {
    var e = window.event;
  }

  // IE uses srcElement, others use target
  var targ = e.target ? e.target : e.srcElement;

  if (targ.className != 'dragme') {
    return
  };
  // calculate event X, Y coordinates
  offsetX = e.clientX;
  offsetY = e.clientY;

  // assign default values for top and left properties
  if (!targ.style.left) {
    targ.style.left = '0px'
  };
  if (!targ.style.top) {
    targ.style.top = '0px'
  };

  // calculate integer values for top and left 
  // properties
  coordX = parseInt(targ.style.left);
  coordY = parseInt(targ.style.top);
  drag = true;

  // move div element
  document.onmousemove = dragDiv; 
}

function dragDiv(e) {
  if (!drag) {
    return
  };
  if (!e) {
    var e = window.event
  };
  var targ = e.target ? e.target : e.srcElement;
  // move div element
  targ.style.left = coordX + e.clientX - offsetX + 'px';
  targ.style.top = coordY + e.clientY - offsetY + 'px';
  return false;
}

function stopDrag() {
  drag = false;
}
window.onload = function() {
  document.onmousedown = startDrag;
  document.onmouseup = stopDrag;
}
