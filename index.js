// menu hamburger
document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById("menu-icon");
    const menuList = document.getElementById("menu-list");
    const joinButton = document.querySelector('.join');
  
    menuIcon.addEventListener("click", () => {
      menuList.classList.toggle("hidden"); 
    });
  });

// section faq
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

// alert form
document.getElementById('loginForm').addEventListener('submit', function (event) {
  event.preventDefault(); 
  alert('Welcome to WebFun 😊');
  window.location.href = '/index.html';
});







