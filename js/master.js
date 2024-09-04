// Add Class Open to Settings Box
let gear = document.querySelector(".toggle-settings .gear")
gear.onclick = function () {
  let set = document.querySelector(".settings-box")
  gear.classList.toggle("fa-spin");
  set.classList.toggle("open");
}
// --------------------------
// Switch Colors
const colorsli = document.querySelectorAll(".colors li")
colorsli.forEach(li => {
  li.addEventListener("click", function (ele) {
    document.documentElement.style.setProperty('--main-color', ele.target.getAttribute("data-color"));

    localStorage.setItem("color-option", ele.target.getAttribute("data-color"))

    // Remove Class Avtive From Li 
    colorsli.forEach(function (li) {
      li.classList.remove("active")
    });
    ele.target.classList.add("active");
  })
})
// ------
if (localStorage.getItem("color-option") != null) {
  document.documentElement.style.setProperty('--main-color', localStorage.getItem("color-option"))

  colorsli.forEach(function (li) {
    li.classList.remove("active")
  });
  document.querySelector(`[data-color="${localStorage.getItem("color-option")}"]`).classList.add("active")
}
// -----------
let randomBgOption = true;
let bgInterval; // Variables To Control The Background Interval
// Switch Random Bg Option
const randombg = document.querySelectorAll(".bg-option span");
randombg.forEach(span => {
  span.addEventListener("click", function (ele) {
    
    // Remove Class Avtive From Span
    randombg.forEach(function (span) {
      span.classList.remove("active")
    });
    ele.target.classList.add("active");

    if (ele.target.dataset.background === "yes") {
      randomBgOption = true;
      randomizeImgs();

      localStorage.setItem("bgColor-option", true)
    } else {
      randomBgOption = false;
      clearInterval(bgInterval);

      localStorage.setItem("bgColor-option", false)
    }
  })
})
// ------
if (localStorage.getItem("bgColor-option") != null) {
  
  if (localStorage.getItem("bgColor-option") === 'true') {
    randomBgOption = true;
    randomizeImgs();
  } else {
    randomBgOption = false;
  }

  randombg.forEach(function (span) {
    span.classList.remove("active")
  });
  if (localStorage.getItem("bgColor-option") === 'true') {
    document.querySelector(`[data-background="yes"]`).classList.add("active")
  } else {
    document.querySelector(`[data-background="no"]`).classList.add("active")
  }
} else {
  randomizeImgs();
}

let landing = document.querySelector(".landing-page")
// Get Array Of Imgs
let imgArray = ["landing01-1920x1080.jpg", "landing02-1920x1080.jpg", "landing03-1920x1080.jpg", "landing04-1920x1080.jpg", "landing05-1920x1080.jpg"]

// random background option
function randomizeImgs() {
  if (randomBgOption === true) {
    bgInterval = setInterval(() => {
      // Random Number
      let randomNumber = Math.floor(Math.random() * imgArray.length)
    
      // Change Background Img 
      landing.style.backgroundImage = `url("imgs/${imgArray[randomNumber]}")`
    }, 7000)
  }
}
// --------------------------

// Bullets

let bulletsSpan = document.querySelectorAll(".bullets-option span")
bulletsSpan.forEach(span => {
  span.addEventListener("click", function (ele) {
    
    // Remove Class Avtive From Span
    bulletsSpan.forEach(function (span) {
      span.classList.remove("active")
    });
    ele.target.classList.add("active");
    if (ele.target.getAttribute("data-display") === "show") {
      document.querySelector(".nav-bullets").style.display = 'block'
    }
    else  {
      document.querySelector(".nav-bullets").style.display = 'none'
    }
  })
})

// Reset Button
let resetButton = document.querySelector(".reset-option");
resetButton.onclick = function () {
  localStorage.removeItem("color-option")
  localStorage.removeItem("bgColor-option")

  window.location.reload();
}

// --------------------------
let ourSkills = document.querySelector(".skills")

// Button to Top
let scrollToTop = document.createElement("div")
scrollToTop.className = 'scroll-to-top'
let iconscrollToTop = document.createElement("i")
iconscrollToTop.className = 'fa fa-arrow-up top'
scrollToTop.appendChild(iconscrollToTop)
document.body.appendChild(scrollToTop)
let navBullets = document.querySelector(".nav-bullets")

window.onscroll = function () {
  // offset top
  let skillsOffsetTop = ourSkills.offsetTop;
  // offset height
  let skillsOffsetHeight = ourSkills.offsetHeight;
  // window height
  let windowHeight = this.innerHeight;
  // window scroll top
  let windowScrollTop = this.scrollY;
  if (windowScrollTop > (skillsOffsetTop + skillsOffsetHeight - windowHeight)) {
    
    // width of span in our skills
    document.querySelectorAll('.skill-progress span').forEach(span => {
      span.style.width = span.dataset.progress;
    });
    scrollToTop.style.bottom = '25px'
    navBullets.style.right = '10px'
  } else {
    scrollToTop.style.bottom = '-50px'
    navBullets.style.right = '-50px'
  }
  
  scrollToTop.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scroll effect
    });
  })
}
// --------------------------
// Create Popup With The Image
let ourGallery = document.querySelectorAll(".gallery img")
ourGallery.forEach(img => {
  img.addEventListener("click", (e) => {
    // create overlay element
    let overlay = document.createElement("div");
    overlay.className = 'popup-overlay';
    document.body.appendChild(overlay);

    // create the popup
    let popupBox = document.createElement("div");
    popupBox.className = 'popup-box'

    if (img.alt !== null) {
      let headingImg = document.createElement("h3")
      headingImg.textContent = img.alt

      popupBox.appendChild(headingImg)
    }

    let popupImage = document.createElement("img");
    popupImage.src = img.src

    popupBox.appendChild(popupImage)
    document.body.appendChild(popupBox)

    let closeButton = document.createElement("span")
    closeButton.textContent = 'X'
    popupBox.appendChild(closeButton)
    closeButton.onclick = function () {
      overlay.remove();
      popupBox.remove();
    }
  })
})
// --------------------------
// Timeline Box
let timelineBoxHeightLeft = document.querySelector(".left .box")
let timelineBoxHeightRight = document.querySelector(".right .box")

if (timelineBoxHeightLeft.offsetHeight > timelineBoxHeightRight.offsetHeight) {
  timelineBoxHeightLeft.style.height = Math.round(timelineBoxHeightLeft.offsetHeight) + 'px';
  timelineBoxHeightRight.style.height = Math.round(timelineBoxHeightLeft.offsetHeight) + 'px';
} else {
  timelineBoxHeightRight.style.height = Math.round(timelineBoxHeightRight.offsetHeight) + 'px';
  timelineBoxHeightLeft.style.height = Math.round(timelineBoxHeightRight.offsetHeight) + 'px';
}

// --------------------------
// Testimonials
let testimonialsP1 = document.querySelector(".testimonials .box .one")
let testimonialsP2 = document.querySelector(".testimonials .box .two")
let testimonialsP3 = document.querySelector(".testimonials .box .three")

if (testimonialsP1.offsetHeight > testimonialsP2.offsetHeight && testimonialsP1.offsetHeight > testimonialsP3.offsetHeight) {
  testimonialsP1.style.height = Math.round(testimonialsP1.offsetHeight) + 'px';
  testimonialsP2.style.height = Math.round(testimonialsP1.offsetHeight) + 'px';
  testimonialsP3.style.height = Math.round(testimonialsP1.offsetHeight) + 'px';
} else  if (testimonialsP2.offsetHeight > testimonialsP1.offsetHeight && testimonialsP2.offsetHeight > testimonialsP3.offsetHeight){
  testimonialsP2.style.height = Math.round(testimonialsP2.offsetHeight) + 'px';
  testimonialsP1.style.height = Math.round(testimonialsP2.offsetHeight) + 'px';
  testimonialsP3.style.height = Math.round(testimonialsP2.offsetHeight) + 'px';
} else {
  testimonialsP3.style.height = Math.round(testimonialsP3.offsetHeight) + 'px';
  testimonialsP1.style.height = Math.round(testimonialsP3.offsetHeight) + 'px';
  testimonialsP2.style.height = Math.round(testimonialsP3.offsetHeight) + 'px';
}

// ----------------------------------------------
// Enhance Code And Create Function
// Scroll To Somewhere
function scrollToSomewhere(element) {
  element.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(e.target.dataset.section).scrollIntoView({
        behavior: 'smooth'
      })
    })
  })
}
// Select All Bullets
scrollToSomewhere(document.querySelectorAll(".nav-bullets .bullet"))
// Select All Links
scrollToSomewhere(document.querySelectorAll(".landing-page .header ul a"))
// ----------------


// toggle menu
let buttonToglle = document.querySelector(".toggle-menu");
let theLinks = document.querySelector(".links ul");

buttonToglle.onclick = function (e) {

  // Stop Propagation on buttonToglle
  e.stopPropagation();

  theLinks.classList.toggle("open");
  buttonToglle.classList.toggle("menu-active");
  if (buttonToglle.classList.contains('menu-active')) {
    document.querySelectorAll(".toggle-menu span").forEach((e) => {
      e.style.backgroundColor = 'var(--main-color)'
    })
  } else {
    document.querySelectorAll(".toggle-menu span").forEach((e) => {
      e.style.backgroundColor = '#fff'
    })
  }
}
// Click Anywhere Outside Menu And Toggle Button
document.addEventListener('click', (e) => {
  if (e.target !== buttonToglle && e.target !== theLinks) {

    if (theLinks.classList.contains("open")) {
      theLinks.classList.remove("open");
      buttonToglle.classList.remove("menu-active");
    }

  }
  if (buttonToglle.classList.contains('menu-active')) {
    document.querySelectorAll(".toggle-menu span").forEach((e) => {
      e.style.backgroundColor = 'var(--main-color)'
    })
  } else {
    document.querySelectorAll(".toggle-menu span").forEach((e) => {
      e.style.backgroundColor = '#fff'
    })
  }
})
// Stop Propagation on theLinks
theLinks.onclick = function (e) {
  e.stopPropagation();
}