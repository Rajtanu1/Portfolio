let project1ImageContainer = document.querySelector('.project1__image-container');
let project2ImageContainer = document.querySelector('.project2__image-container');
let project3ImageContainer = document.querySelector('.project3__image-container');
let project1ImageElement = document.querySelector('.project1__img');
let project2ImageElement = document.querySelector('.project2__img');
let project3ImageElement = document.querySelector('.project3__img');
let project1InfoButton = document.querySelector('.project1__info-button');
let project2InfoButton = document.querySelector('.project2__info-button');
let project3InfoButton = document.querySelector('.project3__info-button');
let moreAboutMyselfContainer = document.querySelector('.more-about-myself');
let projectsContainer = document.querySelector('.projects');
let contactInfoContainer = document.querySelector('.contact-info');
let header = document.querySelector('.header');
let navbar = document.querySelector('.navbar');
let navbarList = document.querySelector('.navbar__list');
let navbarIcon = document.querySelector('.header__navbar-icon');
let navbarVisibility;

let checkTransformValuePresence = function(element) {
  if(element.style.transform !== "") {
    return true;
  } else {
    return false;
  }
};

let animateObservedElement = function(elementToAnimate) {
  if(elementToAnimate === moreAboutMyselfContainer) {
    let h2Element = document.querySelector('.more-about-myself__h2-span');
    let handwaveIcon = document.querySelector('.hand-wave');

    h2Element.style.animationName = "stretch-and-emerge";
    handwaveIcon.style.animationName = "hand-waving";
  } else if(elementToAnimate === projectsContainer) {
    let h2Element = document.querySelector('.projects__h2-span');

    h2Element.style.animationName = "stretch-and-emerge"
  } else if(elementToAnimate === contactInfoContainer) {
    let h2Element = document.querySelector('.contact-info__h2-span');

    h2Element.style.animationName = "stretch-and-emerge"
  }
}

let showHeader = function() {
  header.style.top = "0px";
};

let hideHeader = function() {
  header.style.top = "-4rem";
}

let showNavbar = function() {
  navbar.style.transform = "rotateX(0deg)";
}

let hideNavbar = function() {
  navbar.style.transform = "rotateX(-90deg)";
}

let intersectionObserverCallback = function(arrayOfIntersectionObserverEntryObjects) {
  arrayOfIntersectionObserverEntryObjects.forEach( entryObject => {
    let observedElement = entryObject.target;
    if(entryObject.isIntersecting) {
      animateObservedElement(observedElement);
    }
  });
};

let intersectionObserver = new IntersectionObserver(intersectionObserverCallback, {root: null, rootMargin: "0px", threshold: 0.15});

intersectionObserver.observe(moreAboutMyselfContainer);
intersectionObserver.observe(projectsContainer);
intersectionObserver.observe(contactInfoContainer);

project1ImageElement.addEventListener('mouseenter', function(event) {
  project1ImageElement.style.animationName = 'scale-to-disappear';
});

project1ImageContainer.addEventListener('mouseleave', function(event) {
  project1ImageElement.style.animationName = 'scale_down-to-appear';
});

project2ImageElement.addEventListener('mouseenter', function(event) {
  project2ImageElement.style.animationName = 'scale-to-disappear';
});

project2ImageContainer.addEventListener('mouseleave', function(event) {
  project2ImageElement.style.animationName = 'scale_down-to-appear';
});

project3ImageElement.addEventListener('mouseenter', function(event) {
  project3ImageElement.style.animationName = 'scale-to-disappear';
});

project3ImageContainer.addEventListener('mouseleave', function(event) {
  project3ImageElement.style.animationName = 'scale_down-to-appear';
});

project1InfoButton.addEventListener('click', function(event) {
  let isTransformedElement = checkTransformValuePresence(project1ImageContainer);
  let transformValue = "rotate(-110deg)";

  if(isTransformedElement) {
     project1ImageContainer.style.transform = "";
     project1InfoButton.style.backgroundColor = "black";
     project1InfoButton.style.color = "white";
  } else {
    project1ImageContainer.style.transform = transformValue;
    project1InfoButton.style.backgroundColor = "white";
    project1InfoButton.style.color = "black";
  }
});

project2InfoButton.addEventListener('click', function(event) {
  let isTransformedElement = checkTransformValuePresence(project2ImageContainer);
  let transformValue = "rotate(-110deg)";

  if(isTransformedElement) {
     project2ImageContainer.style.transform = "";
     project2InfoButton.style.backgroundColor = "black";
     project2InfoButton.style.color = "white";
  } else {
    project2ImageContainer.style.transform = transformValue;
    project2InfoButton.style.backgroundColor = "white";
    project2InfoButton.style.color = "black";
  }
});


project3InfoButton.addEventListener('click', function(event) {
  let isTransformedElement = checkTransformValuePresence(project3ImageContainer);
  let transformValue = "rotate(-110deg)";

  if(isTransformedElement) {
     project3ImageContainer.style.transform = "";
     project3InfoButton.style.backgroundColor = "black";
     project3InfoButton.style.color = "white";
  } else {
    project3ImageContainer.style.transform = transformValue;
    project3InfoButton.style.backgroundColor = "white";
    project3InfoButton.style.color = "black";
  }
});

navbarList.addEventListener('click', function(event) {
  let eventTarget = event.target;
  if(eventTarget.parentElement === navbarList ) {
    hideHeader();
  }
});

navbarIcon.addEventListener('click', function(event) {
  if(navbarVisibility) {
    navbarIcon.style.transform = "rotate(0deg)";
    hideNavbar();
    navbarVisibility = false;
  } else {
    navbarIcon.style.transform = "rotate(270deg)";
    showNavbar();
    navbarVisibility = true;
  }
});

window.addEventListener('wheel', function(event) {
  showHeader();
});
