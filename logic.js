
const hero = document.querySelector(".hero");
const projectsContainer = document.querySelector(".projects");
const selectablesContainer = document.querySelector(".selectables");
const bottomBackground = document.querySelector(".bottom-background");
const secretMenuContainer = document.querySelector(".secret-menu-container");
const home = window.location.href.endsWith("home.html");
const selectables = [
    {
        url: "#projects",
        parentClass: "selectable",
        iconClass: "fas lead fa-code",
    },
    {
        url: "https://github.com/fidotheprince",
        parentClass: "selectable",
        iconClass: "fab fa-github-square",
    },
    {
        url: "https://www.linkedin.com/in/alvaro-castro-cid-1160081a5/",
        parentClass: "selectable",
        iconClass: "fab fa-linkedin",
    },
    {
        url: "mailto:alvarocastrocid1@gmail.com",
        parentClass: "selectable",
        iconClass: "fas fa-envelope",   
    }
]
const projects = [
    {
        title: "Grocery Pal",
        image: "images/groceypal.gif",
        projectLink: "https://effulgent-praline-4dbf11.netlify.app/",
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        codeLink: "http://github.com/fidotheprince/dynamic-shopping-list"
    },
    {
        title: "Hangman App",
        image: "images/groceypal.gif",
        projectLink: "https://fidotheprince.github.io/weather-app/",
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        codeLink: "https://github.com/fidotheprince/hangman"
    },
    {
        title: "Achievable App",
        image: "images/groceypal.gif",
        projectLink: "http://achievable.site/",
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        codeLink: "https://github.com/fidotheprince/achievable"
    }
]

const removeCurrentProjects = () => {
    while (projectsContainer.firstChild) {
        projectsContainer.removeChild(projectsContainer.firstChild);
    }
}

const selectableCard = (iconClass) => `<i class="${iconClass}"></i>`;

const generateSelectables = () => {

    selectables.forEach(({url, parentClass, iconClass}, index) => {
        const div = document.createElement("div");
        const first = index === 0;
        div.classList.add(parentClass);
        first && div.classList.add("lead");
        div.onclick = () => window.location.href = url;
        div.innerHTML = selectableCard(iconClass);
        selectablesContainer.appendChild(div);
    })

}

const projectCard = (image, about, projectLink, aboutLink, codeLink) => `
    <div class="image-container">
        <a class="options-link" href="${aboutLink}">
            <img class="project-image" src="${image}">
        </a>
    </div>
    <div class="project-about">
        <p class="about-description">${about}</p>
    </div>
    <div class="project-options">
        <div class="project-opts use" onclick="window.location.href='${projectLink}'">
            <a class="options-link" href="${projectLink}">
                <i class="fas fa-play"></i>
                <span>Use</span>
            </a>
        </div>
        <div class="project-opts code" onclick="window.location.href='${codeLink}'">
            <a class="options-link" href="${codeLink}">
                <i class="fas fa-code-exception fa-code"></i>
                <span>Code</span> 
            </a>
        </div>
    </div>
`;

const generateHomeProjectItems = () => {
    removeCurrentProjects();
    projects.forEach(({image, about, projectLink, codeLink}, index) => {
        let projectNumber = index + 1;
        const div = document.createElement("div");
        div.classList.add("project");
        div.classList.add(`p-${projectNumber}`)
        div.innerHTML = projectCard(image, about, projectLink, codeLink);
        projectsContainer.appendChild(div);
    })
}


const generateInterface = () => {
    generateSelectables();
    generateHomeProjectItems();
}

let observer = new IntersectionObserver((entries) => {
    secretMenuContainer.style.display = "none";
    entries.forEach(entry => {
        entry.isIntersecting ? 
        secretMenuContainer.style.display = "block": 
        secretMenuContainer.style.display = "none";
    });
})

window.onload = () => generateInterface();
observer.observe(bottomBackground);