function renderMenu() {
  const desktop = document.getElementById("desktop-menu");
  const mobile = document.getElementById("mobile-menu");

  const html = websiteData.menu
    .map(item => `<a href="${item.link}">${item.text}</a>`)
    .join("");

  desktop.innerHTML = html;
  mobile.innerHTML = html;
}

function getTimeRemaining(targetDate) {
  const target = new Date(targetDate).getTime();
  const distance = Math.max(0, target - Date.now());

  return {
    days: Math.floor(distance / 86400000),
    hours: Math.floor((distance / 3600000) % 24),
    minutes: Math.floor((distance / 60000) % 60),
    seconds: Math.floor((distance / 1000) % 60)
  };
}

function renderCountdowns() {
  const panel = document.getElementById("countdown-panel");
  if (!panel) return;

  panel.innerHTML = websiteData.countdowns
    .map((timer, index) => `
      <div class="countdown-group ${timer.accent || ""}" data-countdown-index="${index}">
        <h3>${timer.title}</h3>
        <div class="countdown-grid">
          ${["days", "hours", "minutes", "seconds"].map(unit => `
            <div class="countdown-cell">
              <strong data-unit="${unit}">00</strong>
              <span>${unit[0].toUpperCase() + unit.slice(1)}</span>
            </div>
          `).join("")}
        </div>
      </div>
    `)
    .join("");

  updateCountdowns();
  setInterval(updateCountdowns, 1000);
}

function updateCountdowns() {
  document.querySelectorAll("[data-countdown-index]").forEach(group => {
    const timer = websiteData.countdowns[Number(group.dataset.countdownIndex)];
    const values = getTimeRemaining(timer.targetDate);

    Object.entries(values).forEach(([unit, value]) => {
      const el = group.querySelector(`[data-unit="${unit}"]`);
      if (el) el.textContent = String(value).padStart(2, "0");
    });
  });
}

function createTbdCard(text = "Coming soon") {
  return `<div class="tbd-card"><strong>${text}</strong></div>`;
}

function createPersonCard(person) {
  return `
    <article class="person-card">
      <div class="person-initials">${person.initials || ""}</div>
      <h3>${person.name}</h3>
      <p>${person.affiliation || ""}</p>
    </article>
  `;
}

function createOrganizerCard(person, index) {
  const email = person.email
    ? `<p class="organizer-email"><a href="mailto:${person.email}">${person.email}</a></p>`
    : "";

  const details = person.bio || "More information will be added soon.";
  const role = person.role ? `<span class="organizer-role">${person.role}</span>` : "";

  return `
    <article class="organizer-profile" tabindex="0">
      <div class="organizer-avatar" aria-hidden="true">${person.initials || index + 1}</div>
      <div class="organizer-info">
        ${role}
        <h3>${person.name}</h3>
        <p class="organizer-affiliation">${person.affiliation || ""}</p>
        ${email}
        <p class="organizer-details">${details}</p>
      </div>
    </article>
  `;
}

function renderPage() {
  document.title = websiteData.browserTitle;

  document.getElementById("nav-title").textContent = websiteData.workshopNavTitle;
  document.getElementById("workshop-short-title").textContent = websiteData.workshopShortTitle;
  document.getElementById("workshop-subtitle").textContent = websiteData.workshopSubtitle;
  document.getElementById("workshop-date").textContent = websiteData.date;
  document.getElementById("workshop-location").textContent = websiteData.location;

  renderCountdowns();

  document.getElementById("about-text").innerHTML = websiteData.aboutParagraphs
    .map(text => `<p>${text}</p>`)
    .join("");

  document.getElementById("cfp-text").innerHTML = websiteData.cfpParagraphs
    .map(text => `<p>${text}</p>`)
    .join("");

  document.getElementById("topics-list").innerHTML = `
    <ul class="topics-list">
      ${websiteData.topics.map(topic => `<li>${topic}</li>`).join("")}
    </ul>
  `;

  document.getElementById("dates-list").innerHTML = websiteData.dates
    .map(item => `
      <div class="date-row">
        <span>${item.label}</span>
        <strong>${item.value}</strong>
      </div>
    `)
    .join("");

  document.getElementById("submission-guidelines-text").innerHTML =
    websiteData.submissionNote;

  const submissionButton = document.getElementById("submission-button");
  if (submissionButton) submissionButton.href = websiteData.submissionLink;

  document.getElementById("program-list").innerHTML = websiteData.program.length
    ? websiteData.program.map(item => `
        <article class="program-card">
          <time>${item.time}</time>
          <h3>${item.title}</h3>
          <p>${item.detail || ""}</p>
        </article>
      `).join("")
    : createTbdCard("Program coming soon");

  document.getElementById("speakers-list").innerHTML = websiteData.speakers.length
    ? websiteData.speakers.map(createPersonCard).join("")
    : createTbdCard("Invited speakers will be announced shortly");

  document.getElementById("organizers-list").innerHTML =
    websiteData.organizers.map(createOrganizerCard).join("");

  const advisorsList = document.getElementById("advisors-list");
  if (advisorsList) {
    advisorsList.innerHTML = websiteData.academicAdvisors.length
      ? websiteData.academicAdvisors.map(createOrganizerCard).join("")
      : createTbdCard(websiteData.academicAdvisorPlaceholder || "Academic advisors to be confirmed");
  }

  const emailButton = document.getElementById("contact-email");
  if (emailButton) {
    emailButton.textContent = "Email us";
    emailButton.href = `mailto:${websiteData.email}`;
  }

  const emailText = document.getElementById("contact-email-text");
  if (emailText) {
    emailText.textContent = websiteData.email;
    emailText.href = `mailto:${websiteData.email}`;
  }

  document.getElementById("footer-text").textContent = websiteData.footerText;
}

function setupMenu() {
  const button = document.getElementById("menu-button");
  const mobile = document.getElementById("mobile-menu");

  button.addEventListener("click", () => {
    const open = mobile.classList.toggle("open");
    button.setAttribute("aria-expanded", String(open));
  });

  mobile.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      mobile.classList.remove("open");
      button.setAttribute("aria-expanded", "false");
    });
  });
}

function setupOrganizerBios() {
  const cards = [...document.querySelectorAll(".organizer-profile")];
  const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  function closeAll(except = null) {
    cards.forEach(card => {
      if (card !== except) card.classList.remove("bio-open");
    });
  }

  cards.forEach(card => {
    // Desktop/laptop: the biography appears as soon as the pointer passes
    // over the organizer profile, matching the RAISE-Arch interaction.
    if (canHover) {
      card.addEventListener("mouseenter", () => {
        closeAll(card);
        card.classList.add("bio-open");
      });
      card.addEventListener("mouseleave", () => card.classList.remove("bio-open"));
    }

    // Touch fallback: tapping the organizer toggles the biography.
    card.addEventListener("click", event => {
      if (canHover || event.target.closest("a")) return;
      const willOpen = !card.classList.contains("bio-open");
      closeAll(card);
      card.classList.toggle("bio-open", willOpen);
    });
  });

  document.addEventListener("click", event => {
    if (!event.target.closest(".organizer-profile")) closeAll();
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      closeAll();
      document.activeElement?.blur?.();
    }
  });
}

renderMenu();
renderPage();
setupMenu();
setupOrganizerBios();
