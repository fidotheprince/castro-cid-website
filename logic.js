
const photoContainer = document.querySelector(".photo-grid-container");
const menuContainer = document.getElementById("menu-container");
const home = window.location.href.endsWith("home.html");
const offSetMenu = menuContainer.offsetTop;
const projects = [
    {
        title: "Grocery Pal",
        image: "images/groceypal.gif",
        projectLink: "https://effulgent-praline-4dbf11.netlify.app/",
        aboutLink: "list.html",
        codeLink: "http://github.com/fidotheprince/dynamic-shopping-list"
    },
    {
        title: "Hangman App",
        image: "images/hmPostTwo.jpg",
        projectLink: "https://fidotheprince.github.io/weather-app/",
        aboutLink: "hangman.html",
        codeLink: "https://github.com/fidotheprince/hangman"
    },
    {
        title: "Achievable App",
        image: "images/sandTimer.jpg",
        projectLink: "http://achievable.site/",
        aboutLink: "achievable.html",
        codeLink: "https://github.com/fidotheprince/achievable"
    }
]

const projectCard = (title, image, projectLink, aboutLink, codeLink) =>` 
    <div id="project-header" class="item-in-item">${title}</div>
    <div id="list-gif" class="item-in-item">
        <a href="${aboutLink}">
            <img src="${image}">
        </a>
    </div>
    <div id="project-footer" class="item-in-item">
        <a href="${aboutLink}">
            <div class="project-opts">
                <i class="fas fa-project-diagram"></i> 
                About
            </div>
        </a> 
        <a href="${projectLink}">
            <div class="project-opts"><i class="fas fa-play"></i> Demo
        </div>
        </a>
        <a href="${codeLink}">
            <div class="project-opts"><i class="fas fa-code"></i> Code
        </div>
        </a>
`;

const stickMenu = () => {
    window.pageYOffset >= offSetMenu 
    ? menuContainer.classList.add("sticky") 
    : menuContainer.classList.remove("sticky");
}

const generateHomeProjectItems = () => {
    projects.forEach(({title, image, projectLink, aboutLink, codeLink}) => {
        const div = document.createElement("div");
        div.classList.add("photo-grid-item");
        div.innerHTML = projectCard(title, image, projectLink, aboutLink, codeLink);
        photoContainer.appendChild(div);
    })
}

window.onscroll = () => stickMenu();
window.onload = () => home && generateHomeProjectItems();