// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $("header").outerHeight();

$(window).scroll(function (event) {
  didScroll = true;
});

setInterval(function () {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 250);

function hasScrolled() {
  var st = $(this).scrollTop();

  // Make sure they scroll more than delta
  if (Math.abs(lastScrollTop - st) <= delta) return;

  // If they scrolled down and are past the navbar, add class .nav-up.
  // This is necessary so you never see what is "behind" the navbar.
  if (st > lastScrollTop && st > navbarHeight) {
    // Scroll Down
    $("header").removeClass("nav-down").addClass("nav-up");
  } else {
    // Scroll Up
    if (st + $(window).height() < $(document).height()) {
      $("header").removeClass("nav-up").addClass("nav-down");
    }
  }

  lastScrollTop = st;
}

// function hasScrolled() {
//   let st = $(this).scrollTop();

//   console.log("was here");

//   if (Math.abs(lastScrollTop - st) <= delta) return;

//   console.log("here");

//   if (st > lastScrollTop && st > navbarHeight) {
//     $("nav").removeClass("nav-down").addClass("nav-up");
//   } else {
//     console.log("else case");
//     if (st + $(window).height() < $(document).height()) {
//       $("nav").removeClass("nav-up").addClass("nav-down");
//     }
//   }
//   lastScrollTop = st;
// }
