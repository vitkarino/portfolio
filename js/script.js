var web = document.getElementsByClassName("column web");
var art = document.getElementsByClassName("column art");
var sortStatus = document.querySelector("#projects .content span span");
var navMenu = document.querySelector(".nav-links-menu");
var menuOpened = false

function sortArt() {
  for (var i = 0; i < web.length; i++) web[i].style.display = "none";
  for (var i = 0; i < art.length; i++) art[i].style.display = "inherit";
  sortStatus.innerHTML = "Art";
}

function sortWeb() {
  for (var i = 0; i < web.length; i++) web[i].style.display = "inherit";
  for (var i = 0; i < art.length; i++) art[i].style.display = "none";
  sortStatus.innerHTML = "Web";
}

function sortAll() {
  for (var i = 0; i < web.length; i++) web[i].style.display = "inherit";
  for (var i = 0; i < art.length; i++) art[i].style.display = "inherit";
  sortStatus.innerHTML = "All";
}

function menu() {
  if (menuOpened === false) {
    navMenu.style.display = "flex"
    document.querySelector('html').style.overflow = "hidden"
    document.querySelector('.nav-links-menu').style.position = "fixed"
    document.getElementById('menu').style.position = "fixed"
    document.querySelector('.nav-links-menu').style.overflow = "hidden"
    menuOpened = true
    return;
  }

  if (menuOpened === true) {
    navMenu.style.display = "none"
    document.querySelector('html').style.overflow = "inherit"
    menuOpened = false
    return;
  }
}
