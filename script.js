const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".navigation");

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const open = navigation.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(open));
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navigation.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();

const form = document.querySelector("#contactForm");
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const name = data.get("name") || "";
    const email = data.get("email") || "";
    const message = data.get("message") || "";

    const subject = encodeURIComponent("Anfrage BADECOACH – Coaching & Langzeitbaden");
    const body = encodeURIComponent(
      `Name: ${name}\nE-Mail: ${email}\n\nAnliegen:\n${message}`
    );

    // VOR VERÖFFENTLICHUNG ERSETZEN:
    const recipient = "Badecoach@proton.me";
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  });
}
