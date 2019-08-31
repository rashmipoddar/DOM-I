const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let ctaImage = document.getElementById("cta-img");
ctaImage.src = siteContent.cta["img-src"];

let middleImage = document.getElementById("middle-img");
middleImage.src = siteContent["main-content"]["middle-img-src"];

let anchorTags = document.querySelectorAll('a');
let values = Object.values(siteContent.nav);
let anchorTagValues = values.slice(0, values.length - 1);
anchorTags.forEach((anchor, index) => {
  anchor.textContent = anchorTagValues[index];
  anchor.style.color = "green";
});

let mainHeading = document.querySelector('.cta-text h1');
mainHeading.textContent = siteContent.cta.h1;

let button = document.querySelector('.cta-text button');
button.textContent = siteContent.cta.button;

let contentHeaders = document.querySelectorAll('.text-content h4');
contentHeaders[0].textContent = siteContent["main-content"]["features-h4"];
contentHeaders[1].textContent = siteContent["main-content"]["about-h4"];
contentHeaders[2].textContent = siteContent["main-content"]["services-h4"];
contentHeaders[3].textContent = siteContent["main-content"]["product-h4"];
contentHeaders[4].textContent = siteContent["main-content"]["vision-h4"];

let contentParas = document.querySelectorAll('.text-content p');
contentParas[0].textContent = siteContent["main-content"]["features-content"];
contentParas[1].textContent = siteContent["main-content"]["about-content"];
contentParas[2].textContent = siteContent["main-content"]["services-content"];
contentParas[3].textContent = siteContent["main-content"]["product-content"];
contentParas[4].textContent = siteContent["main-content"]["vision-content"];

let contact = document.querySelectorAll('.contact p');
let { address, phone, email } = siteContent.contact;
let contactArray = [];
contactArray.push(address, phone, email);
contact.forEach((element, index) => element.textContent = contactArray[index]);


let contactHeader = document.querySelector('.contact h4');
contactHeader.textContent = siteContent.contact["contact-h4"];

let footer = document.querySelector('footer p');
footer.textContent = siteContent.footer.copyright;

let priorNav = document.createElement('a');
let firstNavTextNode = document.createTextNode('First Link')
priorNav.appendChild(firstNavTextNode);
let lastNav = document.createElement('a');
let lastNavTextNode = document.createTextNode('Last Link');
lastNav.appendChild(lastNavTextNode);
let parent = document.querySelector('nav');

parent.prepend(priorNav);
parent.appendChild(lastNav);


button.addEventListener('click', () => button.style.color = "blue");
button.addEventListener('click', () => mainHeading.textContent = "I changed because the button has been clicked");

let addressLine = document.querySelector('.contact p');
let address1 = '123 Way 456 Street';
let address2 = 'Somewhere, USA';
addressLine.innerHTML = address1 + "<br/>" + address2;
