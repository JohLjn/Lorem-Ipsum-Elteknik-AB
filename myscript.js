// Nav-förminskning vid scroll

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 150 ||
    document.documentElement.scrollTop > 150
  ) {
    document.getElementById("navbar").style.paddingTop = "5px";
    document.getElementById("navbar").style.paddingBottom = "5px";
    document.getElementById("nav").style.top = "44px";
    document.getElementById("nav_logo").style.height = "50px";
  } else {
    document.getElementById("navbar").style.paddingTop = "25px";
    document.getElementById("navbar").style.paddingBottom = "25px";
    document.getElementById("nav").style.top = "114px";
    document.getElementById("nav_logo").style.height = "80px";
  }
}

// Hamburgarmenyn

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("#nav");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav_links").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

// Slide-in effekt på content

const sliders = document.querySelectorAll(".first_article, .second_article");
const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -300px 0px",
};

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

sliders.forEach((slider) => {
  appearOnScroll.observe(slider);
});
