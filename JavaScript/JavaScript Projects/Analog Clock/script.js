var dialLines = document.getElementsByClassName('diallines');
var clockEl = document.getElementsByClassName('clock')[0];

for (var i = 1; i < 60; i++) {
  clockEl.innerHTML += "<div class='diallines'></div>";
  dialLines[i].style.transform = "rotate(" + 6 * i + "deg)";
}

function clock() {
  var weekday = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      d = new Date(),
      h = d.getHours(),
      m = d.getMinutes(),
      s = d.getSeconds(),
      date = d.getDate(),
      month = d.getMonth() + 1,
      year = d.getFullYear(),
           
      hDeg = h * 30 + m * (360/720),
      mDeg = m * 6 + s * (360/3600),
      sDeg = s * 6,
      
      hEl = document.querySelector('.hour-hand'),
      mEl = document.querySelector('.minute-hand'),
      sEl = document.querySelector('.second-hand'),
      dateEl = document.querySelector('.date'),
      dayEl = document.querySelector('.day');
  
      var day = weekday[d.getDay()];
  
  if(month < 9) {
    month = "0" + month;
  }
  
  hEl.style.transform = "rotate("+hDeg+"deg)";
  mEl.style.transform = "rotate("+mDeg+"deg)";
  sEl.style.transform = "rotate("+sDeg+"deg)";
  dateEl.innerHTML = date+"/"+month+"/"+year;
  dayEl.innerHTML = day;
}

setInterval("clock()", 100);





const body = document.querySelector("body"),
hourHand = document.querySelector(".hour")
minuteHand = document.querySelector(".minute")
secondHand = document.querySelector(".second")
modeSwitch = document.querySelector(".mode-switch");

if(localStorage.getItem("mode") === "Dark Mode"){
    body.classList.add("dark");
    modeSwitch.textContent = "Light Mode";
}

modeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");
    const isDarkMode = body.classList.contains("dark");
    modeSwitch.textContent = isDarkMode ? "Light Mode" : "Dark Mode";
    localStorage.setItem("mode", isDarkMode ? "Dark Mode" : "Light Mode");
});

const updateTime = () => {
    let date = new Data (),
    secToDeg = (date.getSeconds() / 60) * 360,
    minToDeg = (date.getMinutes() / 60) * 360,
    hrToDeg = (date.getHours() / 12) * 360;
    
    secondHand.style.transform = 'rotate(${secToDeg}deg)';
    minuteHand.style.transform = 'rotate(${minToDeg}deg)';
    hourHandHand.style.transform = 'rotate(${hrToDeg}deg)';
 };

 setInterval(updateTime, 1000);

 updateTime();