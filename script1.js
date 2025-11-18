let is24Hour = true;

function toggleFormat() {
  is24Hour = !is24Hour;
}

function changeColor() {
  const color = document.getElementById("colorPicker").value;
  const clock = document.getElementById("clock");
  clock.style.color = color;
  clock.style.textShadow = `0 0 10px ${color}, 0 0 20px ${color}, 0 0 30px ${color}`;
}

function updateClock() {
  const clock = document.getElementById("clock");
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");

  if (!is24Hour) {
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    clock.textContent = `${hours.toString().padStart(2, "0")}:${minutes}:${seconds} ${ampm}`;
  } else {
    clock.textContent = `${hours.toString().padStart(2, "0")}:${minutes}:${seconds}`;
  }
}

setInterval(updateClock, 1000);
updateClock();
