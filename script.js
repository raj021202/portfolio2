const topBtn = document.getElementById("topBtn");

window.onscroll = () => {
  if (window.scrollY > 200) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};

topBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// 🔁 Dynamically load project cards
const projects = [
  {
    title: "GEB Online",
    description: "A website used to do all stuff related to electricity board",
  },
  {
    title: "GEsture Vocalization",
    description: "Application used for the dumb and deaf people to communicate easily.",
  }
];

const container = document.getElementById("projects-container");

projects.forEach(p => {
  const card = document.createElement("div");
  card.className = "project-card";
  card.innerHTML = `<h3>${p.title}</h3><p>${p.description}</p>`;
  container.appendChild(card);
});
