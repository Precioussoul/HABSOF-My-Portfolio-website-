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

// var Scrollbar = window.Scrollbar;
// Scrollbar.init(document.querySelector("#scroll-container"), {
//   damping: 0.05,
//   renderByPixel: true,
//   continuousScrolling: true,
//   alwaysShowTracks: true,
// });

function smoothScrollbar() {
  var isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Nokia|Opera Mini/i.test(
      navigator.userAgent
    )
      ? true
      : false;

  if (!isMobile) {
    gsap.registerPlugin(ScrollTrigger);
    let bodyScrollBar = Scrollbar.init(
      document.querySelector("#scroll-container"),
      {
        damping: 0.03,
        renderByPixel: true,
        continuousScrolling: true,
        alwaysShowTracks: true,
      }
    );

    ScrollTrigger.scrollerProxy("#scroll-container", {
      scrollTop(value) {
        if (arguments.length) {
          bodyScrollBar.scrollTop = value;
        }
        return bodyScrollBar.scrollTop;
      },
    });
    bodyScrollBar.addListener(ScrollTrigger.update);

    const menu = document.querySelector(".nav-list");

    menu.querySelectorAll(".nav-link").forEach(function (link) {
      link.addEventListener("click", function (e) {
        e.preventDefault();

        const target = link.getAttribute("href");

        if (
          document.querySelector(target).classList.contains("features__link")
        ) {
          bodyScrollBar.scrollTo(
            0,
            document.querySelector(target).parentElement.offsetTop,
            1000
          );
        } else {
          bodyScrollBar.scrollTo(
            0,
            document.querySelector(target).offsetTop,
            1000
          );
        }
      });
    });

    const slider = document.querySelector("#Contact");

    var scrollToHere = slider.offsetTop;

    document.querySelector(".contact-me").addEventListener("click", () => {
      bodyScrollBar.scrollTo(0, scrollToHere, 1000);
    });
  }
}

smoothScrollbar();

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

const header = document.getElementById("header");
const bodyInner = document.querySelector(".body-inner");

if (header.classList.contains("main-header")) {
  bodyInner.prepend(header);
  console.log("yes , we have it");
}

const Navlinks = document.querySelectorAll(".nav-link");

Navlinks.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    navLink.classList.remove("active");
    navLink.className.replace(" active", " ");
    event.currentTarget.classList;
  });
});

let scrollbar = Scrollbar.init(document.querySelector("#scroll-container"), {
  damping: 0.03,
  renderByPixel: true,
  continuousScrolling: true,
  alwaysShowTracks: true,
});

scrollbar.addListener((status) => {
  //
});
