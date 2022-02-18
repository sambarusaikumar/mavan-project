// GSAP timeline initialization
let tl = gsap.timeline();
let newtl = gsap.timeline();
const exploreBtn = document.getElementById("explore-btn");
const close = document.getElementById("close");

// span text animation with timeline
tl.to("span", { y: 0, duration: 1, stagger: 0.3 });
tl.fromTo(".passage", { opacity: 0 }, { opacity: 1, duration: 0.5 }, "-=1");

// Explore onclick event
exploreBtn.addEventListener("click", () => {
  newtl
    .to(".container2", {
      x: 0,
      duration: 0.5,
      opacity: 1,
      pointerEvents: "auto",
      scale: 1,
    })
    .play();
});

// close
close.addEventListener("click", () => {
  newtl.reverse();
});

// function for hiding the element
function hide(element) {
  document.getElementById(element).style.display = "none";
}

// function for showing the element
function show(element) {
  document.getElementById(element).style.display = "block";
}

function hovering() {
  // you can replace 'img' with the id of the element you are hovering
  // you can replace 'image1' with the id of the image you want to show
  // repeat the two mouse events 'onmouseover' and 'onmouseleave' for every image

  // Image 1
  document.getElementById("img1").onmouseover = function () {
    // calling the show() function
    show("image1");
  };
  document.getElementById("img1").onmouseleave = function () {
    // calling the hide() function
    hide("image1");
  };

  // Image 2
  document.getElementById("img2").onmouseover = function () {
    show("image2");
  };
  document.getElementById("img2").onmouseleave = function () {
    hide("image2");
  };

  // Image 3
  document.getElementById("img3").onmouseover = function () {
    show("image3");
  };
  document.getElementById("img3").onmouseleave = function () {
    hide("image3");
  };
}

hovering();
