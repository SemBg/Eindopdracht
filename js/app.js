document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  let destination = urlParams.get("destination");
  console.log(destination)
  if (!destination) {
    destination = 'Parijs'
  }
  let elementH3s = document.querySelectorAll('h3');
  let destinationElements = document.querySelectorAll('.destination');

  for (let i = 0; i < elementH3s.length; i++) {
    elementH3s[i].innerText = destination;
  }

  for (let i = 0; i < destinationElements.length; i++) {
    destinationElements[i].innerText = destination;
  }

  const destinationElement = document.getElementById("destination");
  destinationElement.textContent = destination;
});
