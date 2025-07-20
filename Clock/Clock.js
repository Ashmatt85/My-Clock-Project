//Clock for Client

const military = document.getElementById("military")
const button = document.getElementById("toggle")
const body = document.getElementById("body")
const clock = document.getElementById("clock");

function newClock(){

  const nameOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const now = new Date;
  var hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  const date = now.getDay();
  const dayName = nameOfWeek[date];
var cycle = "";

if (format12_24 === "12") {
  cycle = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  hours = String(hours).padStart(2, "0");

return `${dayName}: ${hours}:${minutes}:${seconds} ${cycle}`;
}else {
  return `${dayName}: ${hours}:${minutes}:${seconds}`;
}
}

 if (clock){
    clock.textContent = newClock();

  setInterval(() => {
    clock.textContent = newClock();
      }, 1000);
    }else{
    console.error("digital clock is not found");
}

var darkMode = false;

button.addEventListener("click", function () {
  if (darkMode === false) {
    darkMode = true;
    button.textContent = "Light Mode";

    body.style.color = "white";
    body.style.background = "black";
    button.style.color = "#333";
    button.style.background = "white";
    military.style.color = "blue";
    military.style.background = "white";
    clock.style.color = "black";
    clock.style.background = "pink";
    clock.style.border = "25px outset limegreen";
    toggle.style.color = "blue";
    toggle.style.background = "white";
  } else {
    darkMode = false;
    button.textContent = "Dark Mode";

    body.style.color = "black";
    body.style.background = "pink";
    button.style.color = "#333";
    button.style.background = "white";
    button.style.border = "darkgrey";
    military.style.color = "blue";
    military.style.background = "white";
    clock.style.border = "25px outset lightgrey";
    clock.style.background = "lightblue";
  }
});

var format12_24 = "12";

military.addEventListener("click", () => {
  if (format12_24 === "12") {
    format12_24 = "24";
    military.textContent = "12 Hour Clock";
  } else {
    format12_24 = "12";
    military.textContent = "24 Hour Clock";
  }
});


