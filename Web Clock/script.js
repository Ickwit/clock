// constants
const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");
const HOURHANDFIX = document.querySelector("#hour-fix");
const MINUTEHANDFIX = document.querySelector("#minute-fix");
const SECONDHANDFIX = document.querySelector("#second-fix");

// Browser Throttling fix

var blurred = false;
var date = new Date();
var sec = date.getSeconds();
var min = date.getMinutes();
var hr = date.getHours();
let secPos = sec*6;
let minPos = min*6 + (secPos/60);
let hrPos = hr*(360/12) + (minPos/12);
SECONDHAND.style.transform = "rotate(" + secPos + "deg)";
MINUTEHAND.style.transform = "rotate(" + minPos + "deg)";
HOURHAND.style.transform = "rotate(" + hrPos + "deg)";
SECONDHAND.style.display = "block";
MINUTEHAND.style.display = "block";
HOURHAND.style.display = "block";

window.onblur = function() {
  blurred = true;

}
window.onfocus = function() {
    blurred ? location.reload(): false;
}

function runClock() {

  // Variable date set
  var date = new Date();
  var sec = date.getSeconds();
  var min = date.getMinutes();
  var hr = date.getHours();
  let secPos = sec*6;
  let minPos = min*6 + (secPos/60);
  let hrPos = hr*(360/12) + (minPos/12);

  // For Second Hand

  if (secPos != 0) {
    SECONDHAND.style.transform = "rotate(" + secPos + "deg)";
  } else {
    SECONDHAND.style.transform = "rotate(360deg)";
    SECONDHAND.addEventListener("transitionend", secTimeEnd);
    function secTimeEnd() {
      SECONDHAND.style.display = "none";
      SECONDHANDFIX.style.display = "block";
      SECONDHAND.style.transform = "rotate(0deg)";
      SECONDHAND.removeEventListener("transitionend", secTimeEnd);
      }
  }
  if (secPos == 6) {
    SECONDHANDFIX.style.transform = "rotate(" + secPos + "deg)";
    SECONDHANDFIX.addEventListener("transitionend", secTimeStart);
    function secTimeStart() {
      SECONDHAND.style.display = "block";
      SECONDHANDFIX.style.display = "none";
      SECONDHANDFIX.style.transform = "rotate(0deg)";
      SECONDHANDFIX.removeEventListener("transitionend", secTimeStart);
    }
  }

  // For Minute Hand

  if (minPos != 0) {
    MINUTEHAND.style.transform = "rotate(" + minPos + "deg)";
  } else {
    MINUTEHAND.style.transform = "rotate(360deg)";
    MINUTEHAND.addEventListener("transitionend", minTimeEnd);
    function minTimeEnd() {
      MINUTEHAND.style.display = "none";
      MINUTEHANDFIX.style.display = "block";
      MINUTEHAND.style.transform = "rotate(0deg)";
      MINUTEHAND.removeEventListener("transitionend", minTimeEnd);
      }
  }
  if (minPos == 0.1) {
    MINUTEHANDFIX.style.transform = "rotate(" + minPos + "deg)";
    MINUTEHANDFIX.addEventListener("transitionend", minTimeStart);
    function minTimeStart() {
      MINUTEHAND.style.display = "block";
      MINUTEHANDFIX.style.display = "none";
      MINUTEHANDFIX.style.transform = "rotate(0deg)";
      MINUTEHANDFIX.removeEventListener("transitionend", minTimeStart);
    }
  }

  // For Hour Hand

  if (hrPos != 0) {
    HOURHAND.style.transform = "rotate(" + hrPos + "deg)";
  } else {
    HOURHAND.style.transform = "rotate(360deg)";
    HOURHAND.addEventListener("transitionend", hrTimeEnd);
    function hrTimeEnd() {
      HOURHAND.style.display = "none";
      HOURHANDFIX.style.display = "block";
      HOURHAND.style.transform = "rotate(0deg)";
      HOURHAND.removeEventListener("transitionend", hrTimeEnd);
      }
  }
  if (hrPos == (3/360)) {
    HOURHANDFIX.style.transform = "rotate(" + hrPos + "deg)";
    HOURHANDFIX.addEventListener("transitionend", hrTimeStart);
    function hrTimeStart() {
      HOURHAND.style.display = "block";
      HOURHANDFIX.style.display = "none";
      HOURHANDFIX.style.transform = "rotate(0deg)";
      HOURHANDFIX.removeEventListener("transitionend", hrTimeStart);
    }
  }
}
setInterval(runClock, 1000);
