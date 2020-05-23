console.log("hey there");

function showPopup() {
  console.log("open sesam");
  var popup = document.getElementById("popup");
  popup.classList.add("show");
}

function hidePopup() {
  console.log("fecha-te");
  var popup = document.getElementById("popup");
  popup.classList.remove("show");
}
