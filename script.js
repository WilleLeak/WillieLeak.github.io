async function fetch_projects() {
    let url = `https://sce-development.github.io/Workshop/Website%20Series/Week%203/fakeAPI.json`;
    let data = await fetch(url).then(resp => resp.json());
    console.log(data);

    // var div = document.createElement("div");
    // div.className = "project";

    // data.map(projectData => `<h1>name<\h1>`)
    // for(var i = 0; i < data.length; i++){
    //     div.appendChild(projectData)
    // }


    let container = document.getElementById("project-container");
    console.log(container)
    data = data.map(project => `
        <div class ="project">
            <h1>${project.name}</h1>
                <a href="${project.link}>
                    <img src = ${project.picture}></img>
                    <p>${project.description}
                </a?>
        </div>`);
    
    const innerProjects = data.join("\n");
    container.innerHTML = innerProjects
}