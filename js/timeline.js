const timeline = [
    {
        heading: "Dr. A.P.J. Abdul Kalam Technical University",
        position: "B.Tech - Computer Science and Information Technology",
        date: "April, 2020 - April, 2024 ",
        description: "",
    },
    {
        heading: "Collaboration X Innovation",
        position: "President",
        date: "Nov, 2022 - Present",
        description: "",
    },
    {
        heading: "Reviving India",
        position: "Frontend Developer Intern",
        date: "May, 2023 - June, 2023",
        description: "",
    },
    {
        heading: "Student Council of Information Technology",
        position: "President",
        date: "May, 2023 - Present",
        description: "",
    },
    {
        heading: "Armus Digital",
        position: "Frontend Developer Intern",
        date: "Dec, 2023 - Present",
        description: "",
    },

]


var timelineContainer = document.querySelector(".timelineContent");
console.log(timelineContainer.innerHTML)

timelineContainer.innerHTML = ""


timeline.forEach((e) => {
    timelineContainer.innerHTML += `
    <div class="timelineTextBox" >
        <div class="border"></div>
        <h2>${e.heading} </h2>
        <div class="date">${e.date}</div>
        <div class="position">${e.position}</div>
        <p>${e.description}</p>
      </div>
`
})