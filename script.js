async function fetch_projects() {
    let url = `https://sce-development.github.io/Workshop/Website%20Series/Week%203/fakeAPI.json`;
    const data = await fetch(url).then(resp => resp.json());
    console.log(data);

    const container = document.getElementById("project-container");
    data.forEach(project => {
        const projectElement = document.createElement("div");
        projectElement.classList.add('project');
        const projectSkills = project.skills.map(skill => `<li>${skill}</li>`).join("\n");
        projectElement.innerHTML = `
            <img src="${project.picture}" alt="${project.name}"/>
            <h3> <a href="${project.link}" target="_blank">${project.name}</a></h3>
            <p>${project.description}</p>
            <ul>${projectSkills}</ul>
            `;
        container.appendChild(projectElement);
    });
}
    
    
    
    
    
    // console.log(container)
    // data = data.map(project => `
    //     <div class ="project">
    //         <h1>${project.name}</h1>
    //         <a href="${project.link}>here</a>
    //         <img src = ${project.picture}></img>
    //         <p>${project.description}</p>
    //     </div>`);
    
    

    // const innerProjects = data.join("\n");
    // container.innerHTML = innerProjects
