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
    "h1": "DOM\nIs\nAwesome",
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
    "address" : "123 Way 456 Street\nSomewhere, USA",
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


const links = document.getElementsByTagName('a');
Array.from(links).forEach(link => {
  links[0].textContent = "Services";
  links[1].textContent = "Product";
  links[2].textContent = "Vision";
  links[3].textContent = "Features";
  links[4].textContent = "About";
  links[5].textContent = "Contact";
  link.style.color = "green";
  link.style.fontWeight = "bold";
  link.style.fontSize = "1.4rem";
});

const home = document.createElement('a');
home.textContent = "Home";
const parent = document.querySelector("nav")
parent.prepend(home);

home.style.color = "blue";
home.style.fontSize = "1.4rem";
home.style.fontWeight = "bold";


const blog = document.createElement('a');
blog.textContent = "Blog";
const parentTwo = document.querySelector("nav")
parentTwo.append(blog);

blog.style.color = "blue";
blog.style.fontSize = "1.4rem";
blog.style.fontWeight = "bold";


const bigImage = document.getElementById("cta-img");
bigImage.src = siteContent["cta"]["img-src"];

const mainTitle = document.querySelector("h1");
mainTitle.textContent = siteContent["cta"]["h1"];

mainTitle.style.whiteSpace = "pre";

const mainButton = document.querySelector("button");
mainButton.textContent = siteContent["cta"]["button"];

const middleImage = document.getElementById("middle-img");
middleImage.src = siteContent["main-content"]["middle-img-src"];

const sectionTitles = document.querySelectorAll("h4");
sectionTitles[0].textContent = siteContent["main-content"]["features-h4"];
sectionTitles[1].textContent = siteContent["main-content"]["about-h4"];
sectionTitles[2].textContent = siteContent["main-content"]["services-h4"];
sectionTitles[3].textContent = siteContent["main-content"]["product-h4"];
sectionTitles[4].textContent = siteContent["main-content"]["vision-h4"];
sectionTitles[5].textContent = siteContent["contact"]["contact-h4"];

sectionTitles.forEach(element => {
  element.style.color = "orange";
  element.style.fontWeight = "bold";
  element.style.fontSize = "1.6rem";
})

const pContent = document.querySelectorAll("p");
pContent[0].textContent = siteContent["main-content"]["features-content"];
pContent[1].textContent = siteContent["main-content"]["about-content"];
pContent[2].textContent = siteContent["main-content"]["services-content"];
pContent[3].textContent = siteContent["main-content"]["product-content"];
pContent[4].textContent = siteContent["main-content"]["vision-content"];
pContent[5].textContent = siteContent["contact"]["address"];
pContent[5].style.whiteSpace = "pre";
pContent[6].textContent = siteContent["contact"]["phone"];
pContent[7].textContent = siteContent["contact"]["email"];
pContent[8].textContent = siteContent["footer"]["copyright"];

pContent.forEach(els => {
  els.style.fontSize = "1.2rem";
})

// try to make a button that when clicked changes the website
// idea: when button is clicked, it changes the colors of the paragraph content.

const colorButton = document.createElement('button');
colorButton.textContent = "More colors!!";
const buttonParent = document.querySelector("footer")
buttonParent.append(colorButton);

colorButton.style.color = "darkorchid";
colorButton.style.fontSize = "1.4rem";
colorButton.style.fontWeight = "bold";
colorButton.style.padding = "1.5%";
colorButton.style.marginTop = "2%";
colorButton.style.backgroundColor = "coral";
colorButton.style.borderRadius = "5px";
colorButton.style.border = "1px solid black";

colorButton.addEventListener('mouseover', (event) => {
  event.target.textContent = " Warning: Don't do it !!";
  event.target.style.color = "yellow";
  event.target.style.backgroundColor = "darkblue";
})

colorButton.addEventListener('click', (event) => {
  event.target.style.backgroundColor = "black";
  event.target.textContent = "You still clicked it :( "
})

colorButton.addEventListener('click', (event) => {
  alert('Sorry! The colors button is not working yet');
})
