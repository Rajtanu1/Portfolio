let project1ImageContainer = document.querySelector(".project1__image-container");
let project2ImageContainer = document.querySelector(".project2__image-container");
let project3ImageContainer = document.querySelector(".project3__image-container");
let project1ImageElement = document.querySelector(".project1__img");
let project2ImageElement = document.querySelector(".project2__img");
let project3ImageElement = document.querySelector(".project3__img");
let project1DescriptionContainer = document.querySelector(".project1__description");
let project2DescriptionContainer = document.querySelector(".project2__description");
let project3DescriptionContainer = document.querySelector(".project3__description");
let project1InfoButton = document.querySelector(".project1__info-button");
let project2InfoButton = document.querySelector(".project2__info-button");
let project3InfoButton = document.querySelector(".project3__info-button");
let moreAboutMyselfContainer = document.querySelector(".more-about-myself");
let projectsContainer = document.querySelector(".projects");
let contactInfoContainer = document.querySelector(".contact-info");
let contactForm = document.querySelector(".contact-info__form");
let formSubmitButton = document.querySelector(".form__submit-button");
let formBackButton = document.querySelector(".form__back-button");
let header = document.querySelector(".header");
let navbar = document.querySelector(".navbar");
let navbarList = document.querySelector(".navbar__list");
let navbarIcon = document.querySelector(".header__navbar-icon");
let navbarVisibility;
let rocketIcon = document.querySelector(".fa-rocket");
let leftArrowIcon = document.querySelector(".fa-arrow-left-long");
let sentText = document.querySelector(".sent-text");
let thankyouContainer = document.querySelector(".form__thank-you-container");
let httpRequest = new XMLHttpRequest();
let viewportWidth = window.innerWidth;

let checkTransformValuePresence = function (element) {
  if (element.style.transform !== "") {
    return true;
  } else {
    return false;
  }
};

let extractFormData = function (form) {
  let formData = {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value
  }
  return formData;
};

let checkFormValidity = function () {
  let name = contactForm.name.value;
  let email =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(contactForm.email.value);
  let message = contactForm.message.value;
  let arrayOfFormValues = [name, email, message];

  return arrayOfFormValues.indexOf(false) === -1 && arrayOfFormValues.indexOf("") === -1 ? true : false;
};

let clearFormInputFields = function () {
  contactForm.name.value = "";
  contactForm.email.value = "";
  contactForm.message.value = "";
};

let animateObservedElement = function (elementToAnimate) {
  if (elementToAnimate === moreAboutMyselfContainer) {
    let h2Element = document.querySelector(".more-about-myself__h2-span");
    let handwaveIcon = document.querySelector(".hand-wave");

    h2Element.style.animationName = "stretch-and-emerge";
    handwaveIcon.style.animationName = "hand-waving";
  } else if (elementToAnimate === projectsContainer) {
    let h2Element = document.querySelector(".projects__h2-span");

    h2Element.style.animationName = "stretch-and-emerge";
  } else if (elementToAnimate === contactInfoContainer) {
    let h2Element = document.querySelector(".contact-info__h2-span");

    h2Element.style.animationName = "stretch-and-emerge";
  }
};

let showHeader = function () {
  header.style.top = "0px";
};

let hideHeader = function () {
  header.style.top = "-4rem";
};

let showNavbar = function () {
  navbar.style.transform = "rotateX(0deg)";
};

let hideNavbar = function () {
  navbar.style.transform = "rotateX(-90deg)";
};

let intersectionObserverCallback = function (arrayOfIntersectionObserverEntryObjects) {
  arrayOfIntersectionObserverEntryObjects.forEach((entryObject) => {
    let observedElement = entryObject.target;

    if (entryObject.isIntersecting) {
      animateObservedElement(observedElement);
    }
  });
};

let intersectionObserver = new IntersectionObserver(intersectionObserverCallback, { root: null, rootMargin: "0px", threshold: 0.15 });

intersectionObserver.observe(moreAboutMyselfContainer);
intersectionObserver.observe(projectsContainer);
intersectionObserver.observe(contactInfoContainer);

project1ImageElement.addEventListener("mouseenter", function (event) {
  project1ImageElement.style.animationName = "scale-to-disappear";
});

project1ImageContainer.addEventListener("mouseleave", function (event) {
  project1ImageElement.style.animationName = "scale_down-to-appear";
});

project2ImageElement.addEventListener("mouseenter", function (event) {
  project2ImageElement.style.animationName = "scale-to-disappear";
});

project2ImageContainer.addEventListener("mouseleave", function (event) {
  project2ImageElement.style.animationName = "scale_down-to-appear";
});

project3ImageElement.addEventListener("mouseenter", function (event) {
  project3ImageElement.style.animationName = "scale-to-disappear";
});

project3ImageContainer.addEventListener("mouseleave", function (event) {
  project3ImageElement.style.animationName = "scale_down-to-appear";
});

project1InfoButton.addEventListener("click", function (event) {
  let isTransformedElement = checkTransformValuePresence(project1ImageContainer);
  let transformValue = "rotate(-110deg)";

  if (isTransformedElement) {
    project1ImageContainer.style.transform = "";
    project1InfoButton.style.backgroundColor = "black";
    project1InfoButton.style.color = "white";
  } else {
    project1ImageContainer.style.transform = transformValue;
    project1InfoButton.style.backgroundColor = "white";
    project1InfoButton.style.color = "black";
  }
});

project2InfoButton.addEventListener("click", function (event) {
  let isTransformedElement = checkTransformValuePresence(project2ImageContainer);
  let transformValue = "rotate(-110deg)";

  if (isTransformedElement) {
    project2ImageContainer.style.transform = "";
    project2InfoButton.style.backgroundColor = "black";
    project2InfoButton.style.color = "white";
  } else {
    project2ImageContainer.style.transform = transformValue;
    project2InfoButton.style.backgroundColor = "white";
    project2InfoButton.style.color = "black";
  }
});

project3InfoButton.addEventListener("click", function (event) {
  let isTransformedElement = checkTransformValuePresence(project3ImageContainer);
  let transformValue = "rotate(-110deg)";

  if (isTransformedElement) {
    project3ImageContainer.style.transform = "";
    project3InfoButton.style.backgroundColor = "black";
    project3InfoButton.style.color = "white";
  } else {
    project3ImageContainer.style.transform = transformValue;
    project3InfoButton.style.backgroundColor = "white";
    project3InfoButton.style.color = "black";
  }
});

contactForm.addEventListener("keyup", function (event) {
  let targetElement = event.target;

  if (checkFormValidity() === true && targetElement.checkValidity() === true) {
    formSubmitButton.style.backgroundColor = "#7a61da";
  } else {
    formSubmitButton.style.backgroundColor = "#dfdfdff2";
  }
});

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  let formData = extractFormData(contactForm);
  httpRequest.open("POST", "https://formsubmit.co/994b926934c1ae40e2af507b73f2a6df", true);
  httpRequest.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
  httpRequest.send(JSON.stringify(formData));
});

formSubmitButton.addEventListener("click", function (event) {
  if (checkFormValidity()) {
    rocketIcon.style.animationName = "launch";
    sentText.style.animationName = "slide-right";
    contactForm.style.animationName = "scale-change";
    thankyouContainer.style.animationDelay = "3s";
    thankyouContainer.style.animationName = "scale-change";
    leftArrowIcon.style.animationName = "pointing-left";
  } else {
    return;
  }
});

formBackButton.addEventListener("click", function (event) {
  rocketIcon.style.animationName = "";
  sentText.style.animationName = "";
  contactForm.style.animationName = "";
  thankyouContainer.style.animationDelay = "0s";
  thankyouContainer.style.animationName = "scale-down";
  clearFormInputFields();
});

navbarList.addEventListener("click", function (event) {
  let eventTarget = event.target;

  if (eventTarget.parentElement === navbarList) {
    hideHeader();
  }
});

navbarIcon.addEventListener("click", function (event) {
  if (navbarVisibility) {
    navbarIcon.style.transform = "rotate(0deg)";
    hideNavbar();
    navbarVisibility = false;
  } else {
    navbarIcon.style.transform = "rotate(270deg)";
    showNavbar();
    navbarVisibility = true;
  }
});

if(viewportWidth <= 768) {
  let heightValue = "253px";

  project1ImageContainer.style.height = heightValue;
  project2ImageContainer.style.height = heightValue;
  project3ImageContainer.style.height = heightValue;
  project1DescriptionContainer.style.height = heightValue;
  project2DescriptionContainer.style.height = heightValue;
  project3DescriptionContainer.style.height = heightValue;

  window.addEventListener("scroll", function (event) {
    showHeader();
  });
} else {
  window.addEventListener("wheel", function (event) {
  showHeader();
  });
};
