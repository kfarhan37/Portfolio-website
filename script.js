var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

var typed = new Typed('.auto-type', {
  strings: ["Java Programmer", "Technocrat", "Web Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true
})


function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("activelink");
  }
  for (tabconent of tabcontents) {
    tabconent.classList.remove("activetab");
  }
  event.currentTarget.classList.add("activelink");
  document.getElementById(tabname).classList.add("activetab");
}


const scriptURL = 'https://script.google.com/macros/s/AKfycbwvgAP_hg6GUplDdqKMepdob7eDBtJWH6NjaUTTTxyNcEqXMCWsy-zutl9vqMi7jUqSaQ/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      msg.innerHTML = "Details have been sent Successfully!"
      setTimeout(function () {
        msg.innerHTML = ""
      }, 5000)
      form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})

var sidemenu = document.getElementById('sidemenu');
function openmenu() {
  sidemenu.style.right = "0";
}
function closemenu() {
  sidemenu.style.right = "-200px";
}