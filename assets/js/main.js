"use strict";

/* ----------- Preloader Start ----------- */
function preloader() {
  const svg = document.getElementById("svg");
  const tl = gsap.timeline();
  const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
  const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";

  tl.to(".preloader-text", {
    delay: 0.5,
    y: -100,
    opacity: 0,
  });
  tl.to(svg, {
    duration: 0.1,
    // attr: { d: curve },
    ease: "power2.easeIn",
  }).to(svg, {
    duration: 0.5,
    attr: { d: flat },
    ease: "power2.easeOut",
  });
  tl.to(".preloader", {
    y: -1500,
  });
  tl.to(".preloader", {
    zIndex: -1,
    display: "none",
  });
}
preloader();
/* ----------- Preloader End ----------- */

/* ----------- custom Cursor Start ----------- */
const cursor = document.querySelector(".cursor");

if (cursor) {
  const editCursor = (e) => {
    const { clientX: x, clientY: y } = e;
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
  };
  window.addEventListener("mousemove", editCursor);

  document.querySelectorAll("a, .cursor-pointer").forEach((item) => {
    item.addEventListener("mouseover", () => {
      cursor.classList.add("cursor-active");
    });

    item.addEventListener("mouseout", () => {
      cursor.classList.remove("cursor-active");
    });
  });
}

/* ----------- Custom Cursor End ----------- */

/* ----------- Header Top Start ----------- */
const infoToggle = $(".info-toggle");
const headerTopbar = $(".header__topbar");

infoToggle.on("click", function (e) {
  if (headerTopbar.hasClass("active-info")) {
    headerTopbar.removeClass("active-info").slideUp(300, "swing");
    $(".overlayTwo").removeClass("active");
  } else {
    headerTopbar.addClass("active-info").slideDown(300, "swing");
    $(".overlayTwo").addClass("active");
  }
});

/* ----------- Header Top Start ----------- */

/* ----------- Sticky Menu Start ----------- */
$(window).on("scroll", function () {
  var scroll = $(window).scrollTop();
  if (scroll >= 20) {
    $(".header__navbar").addClass("sticky");
  } else {
    $(".header__navbar").removeClass("sticky");
  }
});
/* ----------- Sticky Menu End ----------- */

/* ----------- MeanMenu Start ----------- */
jQuery(document).ready(function () {
  const headerNavbar = jQuery(".header__navbar");
  const isHidden = headerNavbar.hasClass("fluid");

  headerNavbar.find("nav").each(function () {
    jQuery(this).meanmenu({
      meanMenuContainer: ".mobile-menu",
      meanScreenWidth: isHidden ? 99999 : 991,
      meanShowChildren: true,
      meanExpandableChildren: true,
      meanExpand: "",
      meanContract: "",
      meanRemoveAttrs: false,
      onePage: true,
    });
  });
});

/* ----------- MeanMenu End ----------- */

/* ----------- marquee-text Start ----------- */
// function initMarquee() {
//   // Define the screen size variable
//   const maxScreenSize = 768;
//   const upperLimitScreenSize = 1024;
//   const screenWidth = $(window).width();

//   const marqueeSpeed =
//     screenWidth <= maxScreenSize
//       ? 80
//       : screenWidth > maxScreenSize && screenWidth <= upperLimitScreenSize
//       ? 100
//       : 200;

//   $(".marquee-text").marquee({
//     speed: marqueeSpeed,
//     allowCss3Support: true,
//     css3easing: "linear",
//     easing: "linear",
//     pauseOnHover: true,
//     direction: "left",
//     gap: 30,
//     duplicated: true,
//     delayBeforeStart: 0,
//     startVisible: true,
//   });
// }

function initMarquee() {
  // First destroy any existing marquee to prevent duplicates
  $(".marquee-text").marquee("destroy");

  // Define the screen size variable
  const maxScreenSize = 768;
  const upperLimitScreenSize = 1024;
  const screenWidth = $(window).width();

  const marqueeSpeed =
    screenWidth <= maxScreenSize
      ? 80
      : screenWidth > maxScreenSize && screenWidth <= upperLimitScreenSize
      ? 100
      : 200;

  $(".marquee-text").marquee({
    speed: marqueeSpeed,
    allowCss3Support: true,
    css3easing: "linear",
    easing: "linear",
    pauseOnHover: true,
    direction: "left",
    gap: 30,
    duplicated: true,
    delayBeforeStart: 0,
    startVisible: true,
  });
}

// Initialize marquee on page load
initMarquee();
/* ----------- marquee-text End */

/* ----------- Odometer Counter Start ----------- */
$(".counter-count").each(function () {
  var $counterItem = $(this);
  $counterItem.isInViewport(function (status) {
    if (status === "entered") {
      $counterItem.find(".odometer").each(function () {
        var el = this;
        el.innerHTML = el.getAttribute("data-odometer-final");
      });
    }
  });
});
/* ----------- Odometer Counter End ----------- */

/* ----------- Skill Dot Start ----------- */
const dotWrappers = document.querySelectorAll(".dot-content-wrapper");

if (dotWrappers && dotWrappers.length > 0) {
  dotWrappers[1].classList.add("current");

  dotWrappers.forEach((wrapper) => {
    wrapper.addEventListener("mouseover", () => {
      dotWrappers.forEach((w) => w.classList.remove("current"));
      wrapper.classList.add("current");
    });

    wrapper.addEventListener("mouseleave", () => {
      dotWrappers.forEach((w) => w.classList.remove("current"));
      wrapper.classList.add("current");
    });
  });
}
/* ----------- Skill Dot End ----------- */

/* ----------- Pricing Package Start ----------- */
const packages = document.querySelectorAll(
  ".pricing__package, .pricing-2__item"
);

if (packages.length > 0) {
  packages.forEach((packageElement) => {
    packageElement.addEventListener("mouseenter", () => {
      // Remove the "active" class from all packages
      packages.forEach((pkg) => pkg.classList.remove("active"));

      // Add the "active" class to the current hovered package
      packageElement.classList.add("active");
    });
  });
}

/* ----------- Pricing Package End ----------- */

/* ----------- Mixitup Start ----------- */
const blogFilter = document.querySelector(".blog-filter__mixItUp");
if (blogFilter) {
  $(blogFilter).mixItUp();
}
/* ----------- Mixitup End ----------- */
// ================ Swiper Sliders Start ================

/* ----------- hero-photostudio__slider Start ----------- */
const heroPhotostudioSlider = document.querySelector(
  ".hero-photostudio__slider"
);

if (heroPhotostudioSlider) {
  var swiper = new Swiper(heroPhotostudioSlider, {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    speed: 2000,
    autoplay: {
      delay: 1,
      disableOnInteraction: false,
    },

    breakpoints: {
      425: {
        slidesPerView: 2,
      },
      576: {
        slidesPerView: 3,
        spaceBetween: 25,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 25,
      },
      1400: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
    },
  });
}
/* ----------- hero-photostudio__slider End ----------- */

/* ----------- testimonial__slider Start ----------- */

const testimonialSlider = document.querySelector(".testimonial__slider");

if (testimonialSlider) {
  var swiper = new Swiper(testimonialSlider, {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    speed: 2000,
    autoplay: {
      delay: 1,
      disableOnInteraction: false,
    },

    breakpoints: {
      992: {
        slidesPerView: 2,
      },
      1400: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
}

const testimonial3Slider = document.querySelector(".testimonial-3__slider");
const testimonial3Next = document.querySelector(".testimonial-3__next");
const testimonial3Prev = document.querySelector(".testimonial-3__prev");
if (testimonial3Slider && testimonial3Next && testimonial3Prev) {
  var testimonialCard = new Swiper(testimonial3Slider, {
    effect: "cards",
    grabCursor: false,
    centeredSlides: true,
    initialSlide: 1,
    loop: true,
    rotate: false,
    keyboardControl: true,
    navigation: {
      nextEl: testimonial3Next,
      prevEl: testimonial3Prev,
    },
    cardsEffect: {
      rotate: false,

      slideShadows: false,
      perSlideOffset: 9,
      perSlideScale: 9,
    },
  });
}

const testimonial4Slider = document.querySelector(".testimonial-4__slider");
const testimonial4Pagination = document.querySelector(
  ".testimonial-4__pagination"
);
if (testimonial4Slider) {
  var testimonialCard = new Swiper(testimonial4Slider, {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    speed: 2000,
    autoplay: {
      delay: 1,
      disableOnInteraction: false,
    },

    breakpoints: {
      992: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1400: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1500: {
        slidesPerView: 3,
        spaceBetween: 60,
      },
    },
    pagination: {
      el: testimonial4Pagination,
      clickable: true,
    },
  });
}

/* ----------- testimonial__slider End ----------- */

/* ----------- Service Activate Start ----------- */
// const serviceTitles = document.querySelectorAll(".service-title");
// const serviceImages = document.querySelectorAll(".services-2__thumbs img");

// if (serviceTitles.length > 0 && serviceImages.length > 0) {
//   serviceTitles[0].classList.add("active");
//   const firstLink = serviceTitles[0].querySelector("a");
//   if (firstLink) {
//     firstLink.classList.add("active");
//   }
//   serviceImages[0].classList.add("active");
//   serviceTitles.forEach((title, index) => {
//     const link = title.querySelector("a");

//     // Add hover event listener on the link inside the title
//     if (link) {
//       link.addEventListener("mouseenter", () => {
//         // Remove active class from all titles, links, and images
//         serviceTitles.forEach((t) => t.classList.remove("active"));
//         serviceTitles.forEach((t) => {
//           const l = t.querySelector("a");
//           if (l) l.classList.remove("active");
//         });
//         serviceImages.forEach((img) => img.classList.remove("active"));

//         // Add active class to the parent title and its link
//         title.classList.add("active");
//         link.classList.add("active");

//         // Add active class to the corresponding image
//         if (serviceImages[index]) {
//           serviceImages[index].classList.add("active");
//         }
//       });
//     }
//   });
// }

function initializeServiceHoverEffect(titleSelector, imageSelector) {
  const serviceTitles = document.querySelectorAll(titleSelector);
  const serviceImages = document.querySelectorAll(imageSelector);

  if (serviceTitles.length > 0 && serviceImages.length > 0) {
    // Set initial active classes
    serviceTitles[0].classList.add("active");
    const firstLink = serviceTitles[0].querySelector("a");
    if (firstLink) {
      firstLink.classList.add("active");
    }
    serviceImages[0].classList.add("active");

    // Add hover event listeners
    serviceTitles.forEach((title, index) => {
      const link = title.querySelector("a");

      const activate = () => {
        // Remove active classes from all titles, links, and images
        serviceTitles.forEach((t) => t.classList.remove("active"));
        serviceTitles.forEach((t) => {
          const l = t.querySelector("a");
          if (l) l.classList.remove("active");
        });
        serviceImages.forEach((img) => img.classList.remove("active"));

        // Add active class to the parent title, its link, and the corresponding image
        title.classList.add("active");
        if (link) link.classList.add("active");
        if (serviceImages[index]) {
          serviceImages[index].classList.add("active");
        }
      };

      if (link) {
        link.addEventListener("mouseenter", activate);
      }

      // Add hover event listener on the title itself
      title.addEventListener("mouseenter", activate);
    });
  }
}

// Usage example
initializeServiceHoverEffect(".service-title", ".services-2__thumbs img");
initializeServiceHoverEffect(".featcher", ".services-3__thumb img");

/* ----------- Service Activate End ----------- */

/* ----------- Magnific Popup gallery ----------- */
if ($(".popup-youtube").length > 0) {
  $(".popup-youtube").magnificPopup({
    type: "iframe",
  });
}

if ($(".instagram__gallery").length > 0) {
  $(".instagram__gallery").magnificPopup({
    delegate: "a",
    type: "image",
    tLoading: "Loading image #%curr%...",
    mainClass: "mfp-img-mobile",
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1],
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      titleSrc: function (item) {
        return item.el.attr("title");
      },
    },
  });
}

/* ----------- Magnific Popup gallery End ----------- */

/* ----------- brand-box-wrap Start ----------- */

jQuery(document).ready(function ($) {
  $(".brand-box-wrap").hover(function () {
    $(".brand-box-wrap").removeClass("active");
    $(this).addClass("active");
  });
});

/* ----------- brand-box-wrap End ----------- */

/* ----------- Portfolio Btn End ----------- */
$("#v-pills-tab .nav-link").on("shown.bs.tab", function (e) {
  setTimeout(initMarquee, 50);
});

/* ----------- Portfolio Btn End ----------- */

/* ======================== Swiper Sliders End ======================== */

/* ======================== GSAP Start ======================== */

/* ----------- GSAP Initialize Start  */

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, ScrollToPlugin, SplitText);
gsap.config({
  nullTargetWarn: false,
});

/* ----------- GSAP Initialize End ----------- */

/* ----------- GSAP btn-moveement Animation Start ----------- */
$(".btn-hover").on("mouseenter", function (e) {
  var x = e.pageX - $(this).offset().left;
  var y = e.pageY - $(this).offset().top;

  $(this).find("span").css({
    top: y,
    left: x,
  });
});

$(".btn-hover").on("mouseout", function (e) {
  var x = e.pageX - $(this).offset().left;
  var y = e.pageY - $(this).offset().top;

  $(this).find("span").css({
    top: y,
    left: x,
  });
});

const all_btns = gsap.utils.toArray(".btn-hover");
if (all_btns.length > 0) {
  var all_btn = gsap.utils.toArray(".btn-hover");
} else {
  var all_btn = gsap.utils.toArray("#btn-hover");
}
const all_btn_cirlce = gsap.utils.toArray(".btn-item");
all_btn.forEach((btn, i) => {
  $(btn).mousemove(function (e) {
    callParallax(e);
  });
  function callParallax(e) {
    parallaxIt(e, all_btn_cirlce[i], 180);
  }

  function parallaxIt(e, target, movement) {
    var $this = $(btn);
    var relX = e.pageX - $this.offset().left;
    var relY = e.pageY - $this.offset().top;

    gsap.to(target, 0.5, {
      x: ((relX - $this.width() / 2) / $this.width()) * movement,
      y: ((relY - $this.height() / 2) / $this.height()) * movement,
      ease: Power2.easeOut,
    });
  }
  $(btn).mouseleave(function (e) {
    gsap.to(all_btn_cirlce[i], 0.5, {
      x: 0,
      y: 0,
      ease: Power2.easeOut,
    });
  });
});
/* ----------- GSAP btn-moveement Animation End ----------- */

/* ----------- GSAP Image Animation Start ----------- */
const awardItemSelector = ".award__item";
const imgCursorSelector = ".img-cursor";
const allAwardItems = document.querySelectorAll(awardItemSelector);

if (allAwardItems.length > 0) {
  allAwardItems.forEach((el) => {
    const image = el.querySelector(imgCursorSelector);

    gsap.set(image, { yPercent: -50, xPercent: -50 });

    const setX = gsap.quickSetter(image, "x", "px"),
      setY = gsap.quickSetter(image, "y", "px"),
      align = (e) => {
        setX(e.clientX);
        setY(e.clientY);
      },
      startFollow = () => document.addEventListener("mousemove", align),
      stopFollow = () => document.removeEventListener("mousemove", align),
      fade = gsap.to(image, {
        autoAlpha: 1,
        ease: "none",
        paused: true,
        onReverseComplete: stopFollow,
      });

    el.addEventListener("mouseenter", (e) => {
      fade.play();
      startFollow();
      align(e);
    });

    el.addEventListener("mouseleave", () => {
      fade.reverse();
      stopFollow();
    });
  });
}

const portfolioItemSelector = ".portfolio__item";
const linkCursorSelector = ".link-cursor";
const allPortfolioItems = document.querySelectorAll(portfolioItemSelector);

if (allPortfolioItems.length > 0) {
  allPortfolioItems.forEach((el) => {
    const image = el.querySelector(linkCursorSelector);

    if (!image) return; // Skip if .link-cursor is not found

    // Preserve original href
    const href = image.getAttribute("href");

    gsap.set(image, {
      yPercent: -50,
      xPercent: -50,
      pointerEvents: "none",
    });

    const setX = gsap.quickSetter(image, "x", "px");
    const setY = gsap.quickSetter(image, "y", "px");

    const align = (e) => {
      setX(e.clientX);
      setY(e.clientY);
    };

    const startFollow = () => document.addEventListener("mousemove", align);
    const stopFollow = () => document.removeEventListener("mousemove", align);

    const fade = gsap.to(image, {
      autoAlpha: 1,
      ease: "none",
      paused: true,
      onReverseComplete: stopFollow,
    });

    el.addEventListener("mouseenter", (e) => {
      fade.play();
      startFollow();
      align(e); // Align cursor immediately on hover
    });

    el.addEventListener("mouseleave", () => {
      fade.reverse();
      stopFollow();
    });

    // Navigate to href on click
    if (href) {
      el.addEventListener("click", () => {
        window.location.href = href;
      });
    }
  });
}

/* ----------- GSAP Image Animation End ----------- */

/* ----------- GSAP Fade Animation Start ----------- */

if ($(".fade_bottom").length > 0) {
  gsap.set(".fade_bottom", { y: 100, opacity: 0 });
  const fadeArray = gsap.utils.toArray(".fade_bottom");
  fadeArray.forEach((item, i) => {
    let fadeTl = gsap.timeline({
      scrollTrigger: {
        trigger: item,
        start: "top center+=400",
      },
    });
    fadeTl.to(item, {
      y: 0,
      opacity: 1,
      ease: "power2.out",
      duration: 1.5,
      stagger: {
        each: 0.2,
      },
    });
  });
}

if ($(".fade_left").length > 0) {
  gsap.set(".fade_left", { x: -100, opacity: 0 });
  const fadeleftArray = gsap.utils.toArray(".fade_left");
  fadeleftArray.forEach((item, i) => {
    let fadeTl = gsap.timeline({
      scrollTrigger: {
        trigger: item,
        start: "top center+=100",
      },
    });
    fadeTl.to(item, {
      x: 0,
      opacity: 1,
      ease: "power2.out",
      duration: 2.5,
    });
  });
}

if ($(".fade_right").length > 0) {
  gsap.set(".fade_right", { x: 100, opacity: 0 });
  const faderightArray = gsap.utils.toArray(".fade_right");
  faderightArray.forEach((item, i) => {
    let fadeTl = gsap.timeline({
      scrollTrigger: {
        trigger: item,
        start: "top center+=100",
      },
    });
    fadeTl.to(item, {
      x: 0,
      opacity: 1,
      ease: "power2.out",
      duration: 2.5,
    });
  });
}

/* ----------- GSAP Fade Animation End ----------- */

/* ----------- GSAP Image Reveal Start ----------- */
let revealContainers = document.querySelectorAll(".reveal");
if (revealContainers.length > 0) {
  revealContainers.forEach((container) => {
    let image = container.querySelector("img");
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        toggleActions: "play none none none",
      },
    });

    tl.set(container, {
      autoAlpha: 1,
    });

    if (container.classList.contains("zoom-out") && image) {
      // Zoom-out effect
      tl.from(image, 2, {
        scale: 1.4,
        ease: Power2.out,
        delay: 1,
      });
    } else if (container.classList.contains("left")) {
      let xPercent = container.classList.contains("left") ? -100 : 100;
      tl.from(container, 2.5, {
        xPercent,
        ease: Power2.out,
      });
      tl.from(image, 2.5, {
        xPercent: -xPercent,
        scale: 1,
        delay: -2.5,
        ease: Power2.out,
      });
    } else if (container.classList.contains("right")) {
      let xPercent = container.classList.contains("right") ? 100 : 200;
      tl.from(container, 2.5, {
        xPercent,
        ease: Power2.out,
      });
      tl.from(image, 2.5, {
        xPercent: -xPercent,
        scale: 1,
        delay: -2.5,
        ease: Power2.out,
      });
    } else if (container.classList.contains("bottom")) {
      let yPercent = container.classList.contains("bottom") ? 100 : 200;
      tl.from(container, 2.5, {
        yPercent,
        ease: Power2.out,
      });
      tl.from(image, 2.5, {
        yPercent: -yPercent,
        scale: 1,
        delay: -2.5,
        ease: Power2.out,
      });
    }
  });
}
/* ----------- GSAP Image Reveal End ----------- */

/* ----------- GSAP Image-Movement Animation Start ----------- */
const elements = document.querySelectorAll(".img-movement");

if (elements.length > 0) {
  elements.forEach((element) => {
    element.addEventListener("mouseenter", (event) => {
      const rect = element.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      const bgX = (x / rect.width) * 80 - 40;
      const bgY = (y / rect.height) * 80 - 40;

      gsap.to(element, {
        duration: 0.6,
        ease: "power2.out",
        backgroundPosition: `${bgX}px ${bgY}px`,
      });
    });

    element.addEventListener("mousemove", (event) => {
      const rect = element.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      const bgX = (x / rect.width) * 400 - 200;
      const bgY = (y / rect.height) * 400 - 200;

      gsap.to(element, {
        duration: 0.3,
        backgroundPosition: `${bgX}px ${bgY}px`,
      });
    });

    element.addEventListener("mouseleave", () => {
      gsap.to(element, {
        duration: 1,
        ease: "power2.inOut",
        backgroundPosition: "center",
      });
    });
  });
}
/* ----------- GSAP Image-Movement Animation End ----------- */

/* ----------- GSAP Hero Title Animation Start ----------- */
// function createScrollAnimation() {
//   const startElements = document.querySelectorAll(".text-left");
//   const endElements = document.querySelectorAll(".text-right");

//   if (startElements.length === 0 && endElements.length === 0) return;

//   const tl = gsap.timeline({
//     scrollTrigger: {
//       trigger: ".hero-title",
//       start: "top center",
//       end: "bottom center",
//       scrub: 1,
//       toggleActions: "restart pause reverse pause",
//       onLeaveBack: () => {
//         if (startElements.length > 0) {
//           gsap.set(".text-left", { x: -100 });
//         }
//         if (endElements.length > 0) {
//           gsap.set(".text-right", { x: 100 });
//         }
//       },
//     },
//   });

//   if (startElements.length > 0) {
//     gsap.set(".text-left", { x: -100 });
//     tl.to(".text-left", {
//       x: 0,
//       duration: 1,
//       stagger: 0.2,
//     });
//   }

//   if (endElements.length > 0) {
//     gsap.set(".text-right", { x: 100 });
//     tl.to(
//       ".text-right",
//       {
//         x: 0,
//         duration: 1,
//         stagger: 0.2,
//       },
//       "<"
//     );
//   }
// }
// createScrollAnimation();
// window.addEventListener("resize", () => {
//   ScrollTrigger.refresh();
// });

document.addEventListener("DOMContentLoaded", () => {
  // Select all text elements
  const textLeft = document.querySelectorAll(".text-left");
  const textRight = document.querySelectorAll(".text-right");

  if (textLeft.length > 0 && textRight.length > 0) {
    // Default position
    gsap.set(textLeft, { x: 0 });
    gsap.set(textRight, { x: 0 });

    // Define animations based on screen size using ScrollTrigger.matchMedia
    ScrollTrigger.matchMedia({
      // For screens wider than 1023px
      "(min-width:1400px)": () => {
        gsap.to(textLeft, {
          x: -200,
          scrollTrigger: {
            trigger: ".hero-title",
            start: "top 30%",
            end: "bottom 30%",
            scrub: 1,
            toggleActions: "play reverse play reverse",
            markers: false,
          },
        });

        gsap.to(textRight, {
          x: 200,
          scrollTrigger: {
            trigger: ".hero-title",
            start: "top 30%",
            end: "bottom 30%",
            scrub: 1,
            toggleActions: "play reverse play reverse",
            markers: false,
          },
        });
      },
      "(min-width:1200px) and (max-width:1399px)": () => {
        gsap.to(textLeft, {
          x: -200,
          scrollTrigger: {
            trigger: ".hero-title",
            start: "top center",
            end: "bottom center",
            scrub: 1,
            toggleActions: "play reverse play reverse",
            markers: false,
          },
        });

        gsap.to(textRight, {
          x: 200,
          scrollTrigger: {
            trigger: ".hero-title",
            start: "top center",
            end: "bottom center",
            scrub: 1,
            toggleActions: "play reverse play reverse",
            markers: false,
          },
        });
      },

      // For screens between 0px and 1023px
      "(min-width:992px) and (max-width:1199px)": () => {
        gsap.to(textLeft, {
          x: -100, // Smaller animation distance
          scrollTrigger: {
            trigger: ".hero-title",
            start: "top 25%",
            end: "bottom 60%",
            scrub: 1,
            toggleActions: "play reverse play reverse",
            markers: false,
          },
        });

        gsap.to(textRight, {
          x: 100,
          scrollTrigger: {
            trigger: ".hero-title",
            start: "top 25%",
            end: "bottom 60%",
            scrub: 1,
            toggleActions: "play reverse play reverse",
            markers: false,
          },
        });
      },

      // For screens between 0px and 1023px
      "(max-width: 991px)": () => {
        gsap.to(textLeft, {
          x: -100, // Smaller animation distance
          scrollTrigger: {
            trigger: ".hero-title",
            start: "top 18%",
            end: "bottom 47%",
            scrub: 1,
            toggleActions: "play reverse play reverse",
            markers: false,
          },
        });

        gsap.to(textRight, {
          x: 100,
          scrollTrigger: {
            trigger: ".hero-title",
            start: "top 18%",
            end: "bottom 47%",
            scrub: 1,
            toggleActions: "play reverse play reverse",
            markers: false,
          },
        });
      },
    });
  }
});

// Add this CSS to ensure smooth transitions

/* ----------- GSAP Hero Title Animation End ----------- */

/* ----------- GSAP Brand Animation Start ----------- */
function initBrandAnimations() {
  const brandItems = document.querySelectorAll(".item-stagger");

  if (!brandItems || brandItems.length === 0) {
    return;
  }

  function getItemsByRow() {
    const items = Array.from(brandItems);
    const rows = {};

    items.forEach((item) => {
      const offsetTop = item.offsetTop;
      if (!rows[offsetTop]) {
        rows[offsetTop] = [];
      }
      rows[offsetTop].push(item);
    });

    return Object.values(rows);
  }

  const itemRows = getItemsByRow();

  if (!itemRows || itemRows.length === 0) {
    console.log("Error grouping items into rows");
    return;
  }

  try {
    itemRows.forEach((rowItems) => {
      if (!rowItems || rowItems.length === 0) return;

      gsap.set(rowItems, {
        opacity: 0,
        y: 50,
      });

      gsap.to(rowItems, {
        scrollTrigger: {
          trigger: rowItems[0],
          start: "top bottom",
          end: "bottom center",
          toggleActions: "play none none none",
          markers: false,
        },
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: {
          amount: 1,
          from: "start",
        },
        ease: "power2.out",
      });
    });
  } catch (error) {
    console.error("Error initializing brand animations:", error);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initBrandAnimations();
});
/* ----------- GSAP Brand Animation End ----------- */

/* ----------- GSAP Split text Animation Start  */
const st = document.querySelectorAll(".split-text");
if (st.length > 0) {
  st.forEach(function (el, index) {
    el.split = new SplitText(el, {
      type: "lines,words,chars",
      linesClass: "tp-split-line",
    });

    gsap.set(el, {
      perspective: 400,
    });

    // Get delay from data attribute (if exists)
    const delay = el.dataset.delay ? parseFloat(el.dataset.delay) : 0;

    // Check for classes and apply specific GSAP settings
    if (el.classList.contains("right")) {
      gsap.set(el.split.chars, {
        opacity: 0,
        x: "50",
        ease: "Back.easeOut",
      });
    }

    if (el.classList.contains("left")) {
      gsap.set(el.split.chars, {
        opacity: 0,
        x: "-50",
        ease: "circ.out",
      });
    }

    if (el.classList.contains("up")) {
      gsap.set(el.split.chars, {
        opacity: 0,
        y: "80",
        ease: "circ.out",
      });
    }

    if (el.classList.contains("down")) {
      gsap.set(el.split.chars, {
        opacity: 0,
        y: "-80",
        ease: "circ.out",
      });
    }

    // GSAP animation with ScrollTrigger
    el.anim = gsap.to(el.split.chars, {
      scrollTrigger: {
        trigger: el,
        start: "top 90%",
      },
      x: "0",
      y: "0",
      rotateX: "0",
      scale: 1,
      opacity: 1,
      duration: 0.4,
      delay: delay, // Add the delay here
      stagger: 0.02,
    });
  });
}
/* ----------- GSAP Split text Animation End  */

/* ----------- GSAP Experience__item-cart  Animation Start */
const experienceCards = document.querySelectorAll(".experience__item-cart");
if (experienceCards.length > 0) {
  gsap.set(experienceCards, {
    y: 100,
    opacity: 0,
    scale: 0.8,
  });

  experienceCards.forEach((card, index) => {
    gsap.to(card, {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 0.8,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: card,
        start: "top bottom-=100",
        end: "bottom center",
        toggleActions: "play none none reverse",
        markers: false,
      },
      delay: index * 0.1,
    });
  });
}
const accordionSections = document.querySelectorAll(".accordion-collapse");

if (accordionSections.length > 0) {
  accordionSections.forEach((section) => {
    section.addEventListener("show.bs.collapse", (e) => {
      const cards = section.querySelectorAll(".experience__item-cart");

      gsap.fromTo(
        cards,
        {
          y: 100,
          opacity: 0,
          scale: 0.8,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
          stagger: 0.1,
        }
      );
    });

    // Reset animation when accordion closes
    section.addEventListener("hide.bs.collapse", (e) => {
      const cards = section.querySelectorAll(".experience__item-cart");
      gsap.set(cards, {
        y: 100,
        opacity: 0,
        scale: 0.8,
      });
    });
  });
}
/* ----------- GSAP Experience__item-cart  Animation End */

/* ----------- GSAP Item-Popup Animation Start ----------- */
const items = document.querySelectorAll(".item-popup");

if (items.length > 0) {
  items.forEach((item, index) => {
    gsap.fromTo(
      item,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        delay: index * 0.15,
        scrollTrigger: {
          trigger: item,
          start: "top bottom",
          toggleActions: "play none none none",
          markers: false,
        },
      }
    );
  });
}
/* ----------- GSAP Item-Popup Animation End ----------- */

/* ----------- Section Jump Start ----------- */
const links = document.querySelectorAll(".section-link");

if (links && links.length > 0) {
  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      const targetID = this.getAttribute("href");
      const targetSection = document.querySelector(targetID);

      if (targetSection) {
        gsap.to(window, {
          duration: 1,
          scrollTo: {
            y: targetSection,
            offsetY: 50,
          },
        });
      } else {
        console.error(`Section with ID ${targetID} does not exist.`);
      }
    });
  });
}
/* ----------- Section Jump End ----------- */

/* ----------- Blog-link-icon Start ----------- */
document.addEventListener("DOMContentLoaded", () => {
  const blogThumbs = document.querySelectorAll(".blog-thumb");

  blogThumbs.forEach((blogThumb) => {
    const hoverArrow = blogThumb.querySelector(".hover-arrow");
    const image = blogThumb.querySelector("img");

    // Configuration for more responsive movement
    const config = {
      mouseEnterDuration: 0.1,
      mouseMoveDuration: 0.1,
      mouseLeaveEase: "none",
      mouseMoveEase: "none",
    };

    // Enter animation
    blogThumb.addEventListener("mouseenter", () => {
      // Fade and scale arrow
      gsap.to(hoverArrow, {
        opacity: 1,
        scale: 1,
        duration: config.mouseEnterDuration,
        ease: "power1.out",
      });

      // Scale image
      gsap.to(image, {
        scale: 1.05,
        duration: 0.4,
        ease: "power1.inOut",
      });
    });

    // Mouse move tracking
    blogThumb.addEventListener("mousemove", (e) => {
      const rect = blogThumb.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Quick, responsive arrow movement
      gsap.to(hoverArrow, {
        x: x,
        y: y,
        duration: config.mouseMoveDuration,
        ease: config.mouseMoveEase,
      });
    });

    // Leave animation
    blogThumb.addEventListener("mouseleave", () => {
      // Hide arrow
      gsap.to(hoverArrow, {
        opacity: 0,
        scale: 0.5,
        duration: 0,
        ease: config.mouseLeaveEase,
      });

      // Reset image scale
      gsap.to(image, {
        scale: 1,
        duration: 0.4,
        ease: "power1.inOut",
      });
    });
  });
});
/* ----------- Blog-link-icon End ----------- */

/* ----------- Section sticky Start ----------- */
ScrollTrigger.matchMedia({
  "(min-width: 992px)": function () {
    const contentScrolls = gsap.utils.toArray(".content-scroll");
    const piningAreas = gsap.utils.toArray(".pining-area");
    const contentPinings = gsap.utils.toArray(".content-pining");

    if (contentScrolls.length && piningAreas.length && contentPinings.length) {
      contentScrolls.forEach((contentScroll, index) => {
        const piningArea = piningAreas[index];
        const contentPining = contentPinings[index];

        if (piningArea && contentPining) {
          gsap.to(contentScroll, {
            scrollTrigger: {
              trigger: piningArea,
              start: "top -60",
              end: "bottom bottom",
              pin: contentPining,
              scrub: true,
              markers: false,
            },
          });
        }
      });
    }
  },
});

/* ----------- Section sticky End ----------- */

// Section Jump start
const jumpLinks = document.querySelectorAll(".section-link");
const header = document.querySelector("header");

if (jumpLinks && jumpLinks.length > 0) {
  jumpLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      const targetID = this.getAttribute("href");
      const targetSection = document.querySelector(targetID);

      if (targetSection) {
        const headerHeight = header ? header.offsetHeight : 0;
        const targetPosition = targetSection.offsetTop - headerHeight;

        gsap.to(window, {
          duration: 1,
          scrollTo: targetPosition,
        });
      } else {
        console.error(`Section with ID ${targetID} does not exist.`);
      }
    });
  });
}

// Section Jump End

// Webflow developer Start
document.addEventListener("DOMContentLoaded", () => {
  const spans = document.querySelectorAll(
    ".hero-developer__title span, .hero-ai-title span"
  );
  const developer__thumb = document.querySelectorAll(
    ".hero-developer__thumb img"
  );
  const headerArea = document.querySelectorAll(".header-area");
  const bornLocation = document.querySelectorAll(".born-location");
  const scrollDown = document.querySelectorAll(".scroll-down");

  const tl = gsap.timeline();

  tl.from(
    spans[0],
    {
      x: "-100%",
      opacity: 0,
      duration: 2,
      ease: "power3.out",
    },
    0.3
  ).from(
    spans[1],
    {
      x: "100%",
      opacity: 0,
      duration: 2,
      ease: "power3.out",
    },
    0.3
  );

  tl.from(
    developer__thumb,
    {
      y: "100%",
      opacity: 0,
      delay: 1,
      duration: 1.5,
      ease: "power4.out",
    },
    0
  );

  tl.from(
    headerArea,
    {
      y: "-100%",
      opacity: 0,
      delay: 1.5,
      duration: 0.8,
      ease: "power1.out",
    },
    0
  );

  tl.from(
    bornLocation,
    {
      x: "-100%",
      opacity: 0,
      delay: 1.3,
      duration: 0.5,
      ease: "power1.out",
    },
    0
  );
  tl.from(
    scrollDown,
    {
      x: "100%",
      opacity: 0,
      delay: 1.3,
      duration: 0.5,
      ease: "power1.out",
    },
    0
  );
});
// Webflow developer End

// Blog Title Effect Start
const blogTitles = document.querySelectorAll(".blog-title");

if (blogTitles.length > 0) {
  blogTitles.forEach((title) => {
    gsap.from(title, {
      duration: 1,
      y: 20,
      opacity: 0,
      ease: "power2.out",
      scrollTrigger: {
        trigger: title,
        start: "top 80%",
        end: "top 50%",
        scrub: true,
      },
    });
  });
}
// Blog Title Effect End

// Width Animation Effect Start
function handleAnimation() {
  if (window.innerWidth >= 992) {
    const videoArea = document.querySelectorAll(".video-area");

    if (videoArea.length > 0) {
      videoArea.forEach((contentArea) => {
        gsap.set(contentArea, { xPercent: -80 });

        gsap.to(contentArea, {
          xPercent: 0,
          scrollTrigger: {
            trigger: contentArea,
            start: "top center",
            end: "bottom bottom",
            scrub: true,
            markers: false,
          },
        });
      });
    }
  }
}

handleAnimation();
window.addEventListener("resize", handleAnimation);
// Width Animation Effect End

// title-stretch Animation Effect Start
gsap.utils.toArray(".title-stretch").forEach((title) => {
  const text = title.textContent.trim(); // Trim to remove leading/trailing spaces
  const chars = [...text];

  // Find middle spaces by checking if they have characters before and after
  const isMiddleSpace = (index) => {
    return chars[index] === " " && index > 0 && index < chars.length - 1;
  };

  title.innerHTML = chars
    .map((letter, index) => {
      if (letter === " ") {
        return `<span class="letter ${
          isMiddleSpace(index) ? "middle-space space" : "space"
        }">&nbsp;</span>`;
      }
      return `<span class="letter">${letter}</span>`;
    })
    .join("");

  const stretchDirection = title.dataset.stretch;
  const letters = gsap.utils.toArray(".letter", title);

  letters.forEach((letter) => {
    const hoverIn = () => {
      // Only apply animation if it's a letter or a middle space
      if (
        !letter.classList.contains("space") ||
        letter.classList.contains("middle-space")
      ) {
        if (
          stretchDirection === "stretch-up" ||
          stretchDirection === "stretch-down"
        ) {
          gsap.to(letter, {
            scaleY: 1.4,
            duration: 0.2,
            ease: "power4.out",
          });
        } else {
          gsap.to(letter, {
            scaleX: 1.4,
            scaleY: 1.4,
            duration: 0.2,
            ease: "power4.out",
          });
        }
      }
    };

    const hoverOut = () => {
      gsap.to(letter, {
        scaleX: 1,
        scaleY: 1,
        duration: 0.2,
        ease: "power4.in",
      });
    };

    // Add event listeners only to letters and middle spaces
    if (
      !letter.classList.contains("space") ||
      letter.classList.contains("middle-space")
    ) {
      letter.addEventListener("mouseenter", hoverIn);
      letter.addEventListener("mouseleave", hoverOut);
    }
  });
});
// title-stretch Animation Effect End

/* ======================== GSAP End ======================== */
