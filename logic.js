
const projectsContainer = document.querySelector(".projects");
const home = window.location.href.endsWith("home.html");
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
        image: "images/groceypal.gif",
        projectLink: "https://fidotheprince.github.io/weather-app/",
        aboutLink: "hangman.html",
        codeLink: "https://github.com/fidotheprince/hangman"
    },
    {
        title: "Achievable App",
        image: "images/groceypal.gif",
        projectLink: "http://achievable.site/",
        aboutLink: "achievable.html",
        codeLink: "https://github.com/fidotheprince/achievable"
    }
]
const projectCard = (title, image, projectLink, aboutLink, codeLink) => `
    <h2 class="project-header">${title}</h2>
    <div class="image-container">
        <a class="options-link" href="${aboutLink}">
            <img class="project-image" src="${image}">
        </a>
    </div>
    <div class="project-options">
        <div class="project-opts" onclick="window.location.href='${aboutLink}'">
            <a class="options-link" href="${aboutLink}">About</a>
            <a class="options-link" href="${aboutLink}">
                <i class="fas fa-project-diagram"></i> 
            </a>
        </div>
        <div class="project-opts" onclick="window.location.href='${projectLink}'">
            <a class="options-link" href="${projectLink}">Try</a>
            <a class="options-link" href="${projectLink}">
                <i class="fas fa-play"></i>
            </a>
        </div>
        <div class="project-opts" onclick="window.location.href='${codeLink}'">
            <a class="options-link" href="${projectLink}">Code</a>
            <a class="options-link" href="${codeLink}">
                <i class="fas fa-code"></i> 
            </a>
        </div>
    </div>
`;
const generateHomeProjectItems = () => {
    projects.forEach(({title, image, projectLink, aboutLink, codeLink}, index) => {
        let projectNumber = index + 1;
        const div = document.createElement("div");
        div.classList.add("project");
        div.classList.add(`p-${projectNumber}`)
        div.innerHTML = projectCard(title, image, projectLink, aboutLink, codeLink);
        projectsContainer.appendChild(div);
    })
}
window.onload = () => home && generateHomeProjectItems();
