var web = document.getElementsByClassName("column web");
var art = document.getElementsByClassName("column art");
var sortStatus = document.querySelector("#projects .content p span");
var navMenu = document.querySelector(".nav-links-menu");
var header = document.querySelector("header");
var logo = document.querySelector("header nav section:first-child");
var overlay = document.querySelector(".overlay");
var menuOpened = false;
var projectDetails = document.querySelector(".project-details");
var detailsOpened = false;


/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    header.style.top = "0";
  } else {
    header.style.top = "-100px";
  }

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    header.style.background = "rgba(15, 15, 15, 0.3)";
    header.style.boxShadow =
      "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)";
    header.style.backdropFilter = "blur(10px)";
    header.style.padding = "10px 0";
  } else {
    header.style.background = "transparent";
    header.style.boxShadow = "none";
    header.style.backdropFilter = "none";
    header.style.padding = "30px 0";
  }

  prevScrollpos = currentScrollPos;
};

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
    menuOpen();
    return;
  }

  if (menuOpened === true) {
    menuClose();
    return;
  }
}

function menuOpen() {
  overlay.style.visibility = "visible";
  overlay.style.opacity = "1";
  navMenu.style.position = "fixed";
  navMenu.style.overflow = "hidden";
  navMenu.style.width = "70%";
  header.style.backdropFilter = "none";
  header.style.background = "none";
  header.style.boxShadow = "none";
  header.style.boxShadow = "none";
  document.querySelector(".nav-links li:last-child").innerHTML =
    '<span class="iconify" data-icon="ic:round-close" style="color: #4be3bf;"></span>';
  document.querySelector("html").style.overflow = "hidden";
  menuOpened = true;
  return;
}

function menuClose() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    header.style.background = "rgba(15, 15, 15, 0.3)";
    header.style.boxShadow =
      "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)";
    header.style.backdropFilter = "blur(10px)";
  }
  overlay.style.visibility = "hidden";
  overlay.style.opacity = "0";
  navMenu.style.width = "0%";
  document.querySelector("nav section:first-child").style.width = "auto";
  document.querySelector(".nav-links li:last-child").innerHTML =
    '<span class="iconify" data-icon="bytesize:menu" style="color: white;"></span>';
  document.querySelector("html").style.overflow = "inherit";
  menuOpened = false;
  return;
}

// $(".row .column > span").click(function(event) {
//   alert($(this).text());
// });

// const arr = [
//   {
//     name: "Portfolio",
//     year: "2022",
//     img: "img/portfolio.png",
//   },
//   {
//     name: "Metal Energy",
//     year: "2022",
//     img: "img/portfolio.png",
//   },
//   {
//     name: "Monterey Online",
//     year: "2022",
//     img: "img/portfolio.png",
//   },
//   {
//     name: "Viktor's Web Handbook",
//     year: "2022",
//     img: "img/portfolio.png",
//   }
// ]


function details() {

  // var projectTitle = document.querySelector(".project-details h2");

  // projectTitle.innerHTML = document.querySelector(".row .column span").innerHTML;

  if (detailsOpened === false) {
    detailsOpen();
    return;
  }

  if (detailsOpened === true) {
    detailsClose();
    return;
  }
}

function detailsOpen() {
  overlay.style.visibility = "visible";
  overlay.style.opacity = "1";
  projectDetails.style.visibility = "visible";
  projectDetails.style.opacity = "1";
  document.querySelector("html").style.overflow = "hidden";
  detailsOpened = true;
  return;
}

function detailsClose() {
  overlay.style.visibility = "hidden";
  overlay.style.opacity = "0";
  projectDetails.style.visibility = "hidden";
  projectDetails.style.opacity = "0";
  detailsOpened = false;
  return;
}

document.getElementById("logo").onclick = function () {
  if (menuOpened === true) {
    menu();
    return;
  }
};

$(window).on("load", function () {
  $(".loader-wrapper").fadeOut("slow");
});

