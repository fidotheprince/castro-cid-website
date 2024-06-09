
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
        title: "Secure Swift",
        image: "images/sscart.png",
        projectLink: "https://secure-swift-shoppers-cart.netlify.app/",
        about: "<span class='title'>Secure Swift</span> brings together the functionality of a modern e-commerce shopping cart, via stripe integration, and it also implements a beautiful user interface that targets a specific niche audience. The application is a great balance of form and function and build through a collaboration of developers.",
        codeLink: "https://github.com/grantGCode/Shopping-Cart-Application-Frontend"
    },
    {
        title: "Fundamental Web Design",
        image: "images/fundemental-webdesign.png",
        projectLink: "https://fundemental-web-design.vercel.app/",
        about: `<span class='title'>Fundamental Web Design</span> is conceptualized Figma, and built in Next JS this project is a reflection of the two technologies I've grown the most fond of in my years as a professional developer.`,
        codeLink: "https://github.com/grantGCode/Fundamental-Web-Design-Landing-Pagee"
    },
    {
        title: "Grocery Pal",
        image: "images/groceypal.gif",
        projectLink: "https://effulgent-praline-4dbf11.netlify.app/",
        about: `<span class='title'>Grocery Pal</span> allows users to categorize their grocery lists using a Text Model (AI) GPT 3.5 Turbo-infused API I built. This application is perfect for users who frequenct grocery stores and like to stay organized. Accordingly, this application will automatically sort the list by category and display the sorted list to the user.`,
        codeLink: "http://github.com/fidotheprince/dynamic-shopping-list"
    },
    {
        title: "Flixx",
        image: "images/flix.gif",
        projectLink: "https://effortless-donut-7f22db.netlify.app/",
        about: `I cloned and improved <span class='title'>Flixx</span>, a movie search and rating website; the original site is from Brad Traversy. Accordingly, the original application had a security vulnerability that exposed API credentials to network clients. To fix this issue, I moved the credentials to a hosted node.js server and made data available through custom API endpoints. I also restructured the application to mimic React component patterns in native JavaScript.`,
        codeLink: "https://github.com/fidotheprince/flixx"
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

const projectCard = (image, about, projectLink, codeLink) => `
    <div class="image-container">
        <a class="options-link" href="${about}">
            <img class="project-image" src="${image}">
        </a>
    </div>
    <div class="options-and-about-container">
        <div class="project-about">
            <p class="about-description">${about}</p>
        </div>
        <div class="project-options">
            <div class="project-opts use" onclick="window.location.href='${projectLink}'">
                <a class="options-link" href="${projectLink}">
                    <i class="fas fa-play"></i>
                </a>
            </div>
            <div class="project-opts code" onclick="window.location.href='${codeLink}'">
                <a class="options-link" href="${codeLink}">
                    <i class="fas fa-code-exception fa-code"></i>
                </a>
            </div>
        </div>
    </div>
`;

const generateHomeProjectItems = () => {
    removeCurrentProjects();
    projects.forEach(({image, about, projectLink, codeLink}, index) => {
        console.log(codeLink)
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

window.onload = () => generateInterface();