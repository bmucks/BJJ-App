window.onload = 


localStorage.clear();
alert("This version is still undergoing development for bracket sizes larger than eight competitors.")
let nameInput = document.querySelector("#nameform");
let compSubmit = document.querySelector("#submitname");
let competitorLog = document.querySelector("#competitorlist");
let proceed = document.querySelector('.startlanding');

nameInput.addEventListener("submit", addNames);
competitorLog.addEventListener("click", delName);
proceed.addEventListener("click", nextPage);

function addNames(e) {
  event.preventDefault();

  let personName = document.getElementById("nameform2").value; //get name values
  let createLi = document.createElement("li"); //create new li
  var textNode = document.createTextNode(personName); //get text node


  createLi.appendChild(textNode); //apend the li with node

  document.getElementById("competitorlist").appendChild(createLi); //finalize
  competitorLog.appendChild(createLi);
  nameform2.value = '';

  var olArray = document.getElementsByTagName('ol');
  var li = olArray[0].getElementsByTagName('li');
  var nameArray = new Array();

  for (var i = 0; i < li.length; i++) {
    nameArray.push(li[i].innerText)
  }
  localStorage.setItem("nameArray", JSON.stringify(nameArray));

  let liTotal = document.querySelectorAll("li").length;
  localStorage.setItem("liTotal", JSON.stringify(liTotal));

  console.log(liTotal);
}

function delName(e) {

  e.target.parentElement.removeChild(e.target);
}

function nextPage(e) {
  var ar = [];
  ar = document.getElementById("competitorlist").getElementsByTagName("li");

  for (i = 0; i < ar.length; i++) {
    console.log(ar[i].innerText);
  }
  window.location.href = "bjjbrack.html";

};

var input = document.getElementById("nameform2");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function (event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("submitname").click();
  }
})
;