const project = [
    {
        image: "gapshap.webp",
        heading: "GapShap",
        deployLink: "https://gapshap.abhisheksinghal.in",
        description: "Our Peer-to-Peer Connection platform that allows you to connect with friends and others around the world without the need for any login.",
        techStack: [
            "Html",
            "Css",
            "Peer.Js",
            "React.Js"
        ],
        isCodeLink: "",
        codeLink: "https://github.com/Abhimrt/Gapshap"

    },
    {
        image: "clubevents.png",
        heading: "Club Events",
        deployLink: "https://clubevents.vercel.app/",
        description: "Designed a user-friendly platform that will enable everyone to stay updated on upcoming events hosted by different societies and clubs within colleges.",
        techStack: [
            "Html",
            "Css",
            "Next.Js",
            "Firebase",
        ],
        isCodeLink: "scale-0",
        codeLink: ""

    },
    {
        image: "gam-hub.webp",
        heading: "GameHub",
        deployLink: "https://gamehub.abhisheksinghal.in/",
        description: "Web application featuring games made with different algorithms powering them. Implemented backtracking algorithm for solving hard Sudoku puzzles with real-time.",
        techStack: [
            "Html",
            "Css",
            "React.Js",
            "Canvas",
            "Backtracking"
        ],
        isCodeLink: "",
        codeLink: "https://github.com/Abhimrt/GameHub"

    },
    {
        image: "bbl.webp",
        heading: "Management",
        deployLink: "",
        description: "Transformed time for users by empowering them to schedule garbage pickup and eliminating the need for 100% dependency on the garbage truck.",
        techStack: [
            "Html",
            "Css",
            "Sass",
            "React.Js",
            "TomTom Map API",
        ],
        isCodeLink: "",
        codeLink: ""

    },
    {
        image: "wwn.webp",
        heading: "WWA",
        deployLink: "https://wwa.abhisheksinghal.in/",
        description: "WhatsApp without adding a number, enter the number of the receiver push the chat button and directly send a message to them.",
        techStack: [
            "Html",
            "Css",
            "Javascript",
        ],
        isCodeLink: "scale-0",
        codeLink: ""

    },
]


var projectContainer = document.querySelector(".projectScrollWrapperInner");
console.log(projectContainer.innerHTML)

projectContainer.innerHTML = ""


project.forEach((e) => {
    projectContainer.innerHTML += `
    <div>
    <div class="image">
    <img src="images/projects/${e.image}" alt="">
    </div>
    <div class="content">
    <div class="bar"></div>
    <div class="heading">
        <h3>${e.heading}</h3>
        <a target=”_blank”  class="link" href="${e.deployLink}">Link <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
    </div>
    <p>${e.description}</p>
    <div class="heading">
        <ul>
        <li>
        ${e.techStack.join("</li><li>")}
        </li>
        </ul>
        <a target=”_blank”  class="link mt-[5rem] ${e.isCodeLink}" href="${e.codeLink}">Code <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
    </div>
    </div>
    </div>
`
})


projectContainer.innerHTML += `
        <div>
            <a target=”_blank”  class="moreLink" href="project.html"><span>Explore More!!</span></a>
        </div>
`