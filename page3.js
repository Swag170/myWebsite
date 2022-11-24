let greetingStart = "Greeting Selected: ";

function loadDoc() {
  console("test1");
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("div2").innerHTML =
    this.responseText;
  }
  xhttp.open("GET", "ajax_info.txt");
  console("print jazz;");
  xhttp.send();
  console("hi");
}

//these functions suck, lol
function loadGreeting() {
document.getElementById("Greeting").innerHTML = greetingStart + "Hi";
}

function loadGreeting2() {
document.getElementById("Greeting").innerHTML = greetingStart + "Bye";
}

function loadGreeting3() {
document.getElementById("Greeting").innerHTML = greetingStart + "Hello";
}

function loadGreeting4() {
document.getElementById("Greeting").innerHTML = greetingStart + "cya";
}

function loadGreeting5() {
document.getElementById("Greeting").innerHTML = greetingStart + "Good Morning";
}

function loadGreeting6() {
document.getElementById("Greeting").innerHTML = greetingStart + "Good Night";
}

function resetGreeting() {
document.getElementById("Greeting").innerHTML = greetingStart;
}





