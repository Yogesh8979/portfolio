/* =========================================================
   YOGESH GARIYA — PORTFOLIO SCRIPT
   ---------------------------------------------------------
   This file is organized into sections:
   1. Mobile Navigation Toggle
   2. Active Link Highlighting on Scroll
   3. Scroll Reveal Animations
   4. Dynamic Project Card Rendering (reads from projects-data.js)
   5. Contact Form Handling
   ========================================================= */
console.log("script loaded");
console.log(projectsData);
document.addEventListener("DOMContentLoaded", () => {
  /* ============================================
     1. MOBILE NAVIGATION TOGGLE
     Opens/closes the nav links on small screens.
     ============================================ */
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      navLinks.classList.toggle("is-open");
    });

    // Close the mobile menu after clicking a link
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("is-open");
      });
    });
  }

  /* ============================================
     2. ACTIVE LINK HIGHLIGHTING ON SCROLL
     Highlights the nav link for the section
     currently in view.
     ============================================ */
  const sections = document.querySelectorAll("section[id]");
  const navItems = document.querySelectorAll(".nav-links a");

  const highlightNav = () => {
    let currentSection = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        currentSection = section.getAttribute("id");
      }
    });

    navItems.forEach((link) => {
      link.classList.toggle(
        "active-link",
        link.getAttribute("href") === `#${currentSection}`
      );
    });
  };

  window.addEventListener("scroll", highlightNav);
  highlightNav();

  /* ============================================
     3. SCROLL REVEAL ANIMATIONS
     Adds a fade-up animation to elements with the
     "reveal" class as they enter the viewport.
     ============================================ */
  const revealElements = document.querySelectorAll(".reveal");

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealElements.forEach((el) => revealObserver.observe(el));

  /* ============================================
     4. DYNAMIC PROJECT CARD RENDERING
     Reads the `projectsData` array from
     js/projects-data.js and builds a card for
     each project automatically. To add a new
     project, just edit projects-data.js — no
     need to touch this file or the HTML.
     ============================================ */
  const projectsGrid = document.querySelector(".projects-grid");

  if (projectsGrid && typeof projectsData !== "undefined") {
    projectsData.forEach((project) => {
      projectsGrid.appendChild(buildProjectCard(project));
      console.log(projectsGrid.children.length);
    });
  }

  /**
   * Builds a single project card element from a project data object.
   * @param {Object} project - One entry from projects-data.js
   * @returns {HTMLElement} The completed project card element.
   */
  function buildProjectCard(project) {
    const card = document.createElement("article");
    card.className = "project-card reveal is-visible";

    // Make entire card clickable
    card.style.cursor = "pointer";

    card.addEventListener("click", () => {
      window.location.href = `project.html?id=${project.id}`;
    });

    // ---- Window header bar (dots + status label) ----
    const windowBar = document.createElement("div");
    windowBar.className = "project-window";
    windowBar.innerHTML = `
      <div class="project-window-dots">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <span class="project-status">${escapeHTML(project.status || "Project")}</span>
    `;
    card.appendChild(windowBar);

    // ---- Media area: video embed (if provided) or screenshot ----
    // ---- Media area: screenshot + play icon ----
    const media = document.createElement("div");
    media.className = "project-media";

    // Screenshot
    const img = document.createElement("img");
    img.src = project.image;
    img.alt = `${project.title} dashboard screenshot`;
    img.loading = "lazy";

    media.appendChild(img);

    // Play icon (only if YouTube link exists)
    if (project.youtube) {
      const playBtn = document.createElement("div");
      playBtn.className = "play-button";

      playBtn.innerHTML = `
      <i class="fa-solid fa-play"></i>
  `;

      media.appendChild(playBtn);
    }

    card.appendChild(media);

    // ---- Body: title, description, tech tags, links ----
    const body = document.createElement("div");
    body.className = "project-body";

    const title = document.createElement("h3");
    title.className = "project-title";
    title.textContent = project.title;
    body.appendChild(title);

    const desc = document.createElement("p");
    desc.className = "project-desc";
    desc.textContent = project.description;
    body.appendChild(desc);

    // Tech tags
    if (project.tech && project.tech.length) {
      const tagList = document.createElement("div");
      tagList.className = "project-tags";
      project.tech.forEach((tech) => {
        const tag = document.createElement("span");
        tag.textContent = tech;
        tagList.appendChild(tag);
      });
      body.appendChild(tagList);
    }

    // Action links (GitHub, LinkedIn, Docs, Demo)
    const links = document.createElement("div");
    links.className = "project-links";

    if (project.github) {
      links.appendChild(createLink(project.github, "GitHub →"));
    }
    if (project.linkedin) {
      links.appendChild(createLink(project.linkedin, "LinkedIn Post →"));
    }
    if (project.docs) {
      links.appendChild(createLink(project.docs, "README →"));
    }
    if (project.youtube) {
      links.appendChild(createLink(project.video, "Demo Video →"));
    }

    body.appendChild(links);
    card.appendChild(body);

    return card;
  }

  /**
   * Creates an <a> tag that opens in a new tab.
   * @param {string} href - The destination URL.
   * @param {string} label - The visible link text.
   * @returns {HTMLAnchorElement}
   */
  function createLink(href, label) {
    const a = document.createElement("a");
    a.href = href;
    a.textContent = label;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    return a;
  }

  /**
   * Basic helper to avoid inserting unescaped HTML from data.
   * @param {string} str
   * @returns {string}
   */
  function escapeHTML(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  /* ============================================
     5. CONTACT FORM HANDLING
     This demo form does not send data anywhere yet.
     It simply confirms submission to the user.
     To make it functional, connect it to a service
     like Formspree, EmailJS, or your own backend.
     ============================================ */
  const contactForm = document.querySelector(".contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const submitBtn = contactForm.querySelector("button[type='submit']");
      const originalText = submitBtn.textContent;

      submitBtn.textContent = "Message Sent ✓";
      submitBtn.disabled = true;

      // Reset the form and button after a short delay
      setTimeout(() => {
        contactForm.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }, 2500);
    });
  }
});
