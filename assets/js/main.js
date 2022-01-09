function openTab(evt, TabName) {
  const resumeeTabs = document.querySelectorAll(".resumee__tab-item");
  const tabContents = document.querySelectorAll(".tab-content");

  tabContents.forEach((tabContent) => {
    tabContent.style.display = "none";
  });

  resumeeTabs.forEach((resumeTab) => {
    resumeTab.className = resumeTab.className.replace(" active", " ");
  });

  document.getElementById(TabName).style.display = "block";
  evt.currentTarget.className += " active";
}

function progressBar() {
  const progresses = document.querySelectorAll(".progress-done");

  setTimeout(() => {
    progresses.forEach((progress) => {
      progress.style.opacity = 1;
      progress.style.width = progress.getAttribute("data-done") + "%";
    });
  }, 500);
}

progressBar();

var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".info--control__next",
    prevEl: ".info--control__prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  autoplay: {
    enabled: true,
    delay: 7000,
  },
  loop: true,
  speed: 900,
});

const clickout = document.querySelector(".mobile-navigation");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const mobileNavlink = document.querySelectorAll(".mobile-menu__nav-link");
const closeBtn = document.querySelector(".close-btn");

closeBtn.addEventListener("click", () => {
  clickout.classList.remove("open");
});
hamburgerMenu.addEventListener("click", () => {
  clickout.classList.add("open");
});
mobileNavlink.forEach((mobLink) => {
  mobLink.addEventListener("click", () => {
    clickout.classList.remove("open");
    console.log("yeah, link was click");
  });
});

const Navlinks = document.querySelectorAll(".nav-link");

Navlinks.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    navLink.classList.remove("active");
    navLink.className.replace(" active", " ");
    event.currentTarget.classList;
  });
});

var prevScrollpos = window.pageYOffset;
console.log(prevScrollpos, "pos");

window.addEventListener("scroll", () => {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
});
