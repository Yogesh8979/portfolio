/* ==========================================
   PROJECT DETAILS PAGE
   ========================================== */

document.addEventListener("DOMContentLoaded", () => {

    // Get project id from URL
    const params = new URLSearchParams(window.location.search);
    const projectId = params.get("id");

    // Find project
    const project = projectsData.find(p => p.id === projectId);

    // If project doesn't exist
    if (!project) {
        document.body.innerHTML = `
            <div style="padding:80px;text-align:center">
                <h1>404</h1>
                <p>Project not found.</p>
                <a href="index.html">← Back to Portfolio</a>
            </div>
        `;
        return;
    }

    // ===========================
    // Basic Information
    // ===========================

    document.title = project.title;

    document.getElementById("projectTitle").textContent =
        project.title;

    document.getElementById("projectDescription").textContent =
        project.description;

    // ===========================
    // Buttons
    // ===========================

    document.getElementById("githubBtn").href =
        project.github;

    document.getElementById("docsBtn").href =
        project.docs;

    document.getElementById("linkedinBtn").href =
        project.linkedin;

    // ===========================
    // Tech Stack
    // ===========================

    const techStack =
        document.getElementById("techStack");

    project.tech.forEach(tech => {

        const tag = document.createElement("span");

        tag.textContent = tech;

        techStack.appendChild(tag);

    });

    // ===========================
    // YouTube
    // ===========================

    document.getElementById("youtubeVideo").src =
        project.youtube;

    // ===========================
    // Screenshots
    // ===========================

    const screenshots =
        document.getElementById("screenshots");

    project.screenshots.forEach(image => {

        const img =
            document.createElement("img");

        img.src = image;

        img.alt = project.title;

        img.loading = "lazy";

        screenshots.appendChild(img);

    });



    // ===========================
    // Business Problem
    // ===========================

    const businessProblemList =
        document.getElementById("businessProblemList");

    if (project.businessProblem) {

        project.businessProblem.forEach(problem => {

            const li = document.createElement("li");

            li.textContent = problem;

            businessProblemList.appendChild(li);

        });

    }
    // ===========================
    // Features
    // ===========================

    const featureList =
        document.getElementById("featuresList");

    project.features.forEach(feature => {

        const li =
            document.createElement("li");

        li.textContent = feature;

        featureList.appendChild(li);

    });

    // ===========================
    // Challenges
    // ===========================

    const challengeList =
        document.getElementById("challengesList");

    project.challenges.forEach(challenge => {

        const li =
            document.createElement("li");

        li.textContent = challenge;

        challengeList.appendChild(li);

    });

    // ===========================
    // Learnings
    // ===========================

    const learningList =
        document.getElementById("learningsList");

    project.learnings.forEach(item => {

        const li =
            document.createElement("li");

        li.textContent = item;

        learningList.appendChild(li);

    });

});