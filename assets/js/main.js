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
var mybutton = document.querySelector(".back-to-top");
mybutton.addEventListener("click", topFunction);

window.addEventListener("scroll", () => {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } else {
    document.getElementById("header").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;

  scrollFunction();
  pageProgressBarFunc();
});

function scrollFunction() {
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

  document.body.scrollIntoView({
    behavior: "smooth",
  });
}

function pageProgressBarFunc() {
  const scrollContainer = () => {
    return document.documentElement || document.body;
  };

  const pageProgressBar = document.querySelector(".progress-bar");

  const scrolledPercentage =
    (scrollContainer().scrollTop /
      (scrollContainer().scrollHeight - scrollContainer().clientHeight)) *
    100;

  console.log(scrolledPercentage, "scroll");
  pageProgressBar.style.width = `${scrolledPercentage}%`;

  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove("hidden");
  } else {
    backToTopButton.classList.add("hidden");
  }
}

var naavy = document.querySelectorAll(".nav-link");
var naavyMobile = document.querySelectorAll(".mobile-menu__nav-link");
var length = naavy.length;
var lengthMobile = naavyMobile.length;

for (var i = 0; i < length; i++) {
  naavy[i].addEventListener("click", function () {
    highlight(this);
  });
}
for (var i = 0; i < lengthMobile; i++) {
  naavyMobile[i].addEventListener("click", function () {
    highlightMobile(this);
  });
}

function highlight(element) {
  for (var i = 0; i < length; i++) {
    naavy[i].classList.remove("active");
  }

  element.classList.add("active");
}

function highlightMobile(element) {
  for (var i = 0; i < length; i++) {
    naavyMobile[i].classList.remove("active");
  }

  element.classList.add("active");
}

const Titles = ["Software Engineer", "Full-Stack Developer", "Cloud Developer"];
let count = 0;
let index = 0;
let currentTitle = "";
let title = "";

function TypingText() {
  if (count === Titles.length) {
    count = 0;
  }

  currentTitle = Titles[count];
  title = currentTitle.slice(0, ++index);

  document
    .querySelectorAll(".typing-text")
    .forEach((typing) => (typing.textContent = title));

  if (title.length === currentTitle.length) {
    count++;
    index = 0;
  }
  setTimeout(TypingText, 150);
}
TypingText();

//

function getFullyear() {
  document.getElementById(
    "copyright-year"
  ).innerText = `${new Date().getFullYear()}   `;
}

getFullyear();
