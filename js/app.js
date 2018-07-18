var openclose;
var showHome;
var showProjects;
var showAbout;
var showContact;

let menuButton = $(".close-button");

openclose = function() {
  return $(".close-button").click(function() {
    if ($(".info-page").hasClass("open")) {
      $(".info-page").removeClass("open");
    } else {
      $(".nav-bar").toggleClass("open");
    };
    return $(this).toggleClass("open");
  });
};

function closeNav() {
  return $(".nav-bar").removeClass("open");
};

function closeMenu() {
  $(".close-button").removeClass("open");
};

function openMenuBtn() {
  if (!$(".close-button").hasClass("open")) {
    $(".close-button").toggleClass("open");
  };
}

showHome = function() {
  $(".home-btn").click(function() {
    window.location.reload(true);
  });
};

showProjects = function() {
  $(".projects-btn").click(function() {
    closeNav();
    closeMenu();
  });
};

showAbout = function() {
  $(".about-btn").click(function(){
    openMenuBtn();
    closeNav();
    $("#about").addClass("open");
  })
}

showContact = function() {
  return $(".contact-btn").click(function(){
    openMenuBtn();
    closeNav();
    $("#contact").addClass("open");
  })
}

jQuery(document).ready(function() {
  openclose();
  showAbout();
  showHome();
  showProjects();
  showContact();
});
