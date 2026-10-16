import { siteConfig } from "./config.js?v=app-store-link";

document.documentElement.classList.add("js");

const linkSettings = {
  appStoreUrl: { value: siteConfig.appStoreUrl, label: "Im App Store laden", external: true },
  contactEmail: { value: siteConfig.contactEmail, label: "Kontakt" },
  legalNoticeUrl: { value: siteConfig.legalNoticeUrl, label: "Impressum" },
  privacyPolicyUrl: { value: siteConfig.privacyPolicyUrl, label: "Datenschutz" },
};

function configuredHref(key, value) {
  if (key === "contactEmail") {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? `mailto:${value}` : "";
  }

  if (!value) return "";

  try {
    const url = new URL(value, window.location.href);
    if (url.protocol !== "https:" && url.origin !== window.location.origin) return "";
    if (key === "appStoreUrl" && url.protocol !== "https:") return "";
    return value;
  } catch {
    return "";
  }
}

for (const element of document.querySelectorAll("[data-config-link]")) {
  const key = element.dataset.configLink;
  const setting = linkSettings[key];
  const href = setting && configuredHref(key, setting.value);

  if (!setting) continue;

  if (!href) {
    if (setting.value) console.error(`Ungültiger Wert in siteConfig.${key}.`);
    if (key === "appStoreUrl") {
      element.setAttribute("aria-label", `${setting.label} – Link wird ergänzt`);
      element.title = "Der App-Store-Link wird vor der Veröffentlichung ergänzt.";
    }
    continue;
  }

  const link = document.createElement("a");
  link.className = element.className.replace("footer-link-pending", "").replace("button-disabled", "").trim();
  link.href = href;
  link.setAttribute("aria-label", element.dataset.configLabel || setting.label);
  while (element.firstChild) link.append(element.firstChild);
  if (setting.external) {
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  }
  element.replaceWith(link);
}

if (siteConfig.domain) {
  try {
    const domain = new URL(siteConfig.domain);
    if (domain.protocol !== "https:") throw new Error("Die Domain muss HTTPS verwenden.");
    const canonicalUrl = new URL(`${window.location.pathname}${window.location.search}`, domain);
    const canonicalLink = document.createElement("link");
    canonicalLink.rel = "canonical";
    canonicalLink.href = canonicalUrl.href;
    document.head.append(canonicalLink);
    const openGraphUrl = document.createElement("meta");
    openGraphUrl.setAttribute("property", "og:url");
    openGraphUrl.content = canonicalUrl.href;
    document.head.append(openGraphUrl);
    const openGraphImage = document.createElement("meta");
    openGraphImage.setAttribute("property", "og:image");
    openGraphImage.content = new URL("./assets/screenshots/clean/sitzplan.png", window.location.href).href;
    document.head.append(openGraphImage);
  } catch (error) {
    console.error("Ungültiger Wert in siteConfig.domain:", error);
  }
}

const socialLinks = document.querySelector("[data-social-links]");
if (socialLinks && siteConfig.socialLinks.length > 0) {
  for (const profile of siteConfig.socialLinks) {
    try {
      const url = new URL(profile.url);
      if (url.protocol !== "https:" || !profile.label) throw new Error("Profil benötigt HTTPS und einen Namen.");
      const link = document.createElement("a");
      link.href = url.href;
      link.textContent = profile.label;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      socialLinks.append(link);
    } catch (error) {
      console.error("Ungültiger Eintrag in siteConfig.socialLinks:", error);
    }
  }
  socialLinks.hidden = socialLinks.childElementCount === 0;
}

const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#hauptnavigation");

function setMenuOpen(open) {
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.querySelector(".visually-hidden").textContent = open ? "Menü schließen" : "Menü öffnen";
  navigation.classList.toggle("is-open", open);
}

menuToggle.addEventListener("click", () => {
  setMenuOpen(menuToggle.getAttribute("aria-expanded") !== "true");
});

navigation.addEventListener("click", (event) => {
  if (event.target.closest("a")) setMenuOpen(false);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
    setMenuOpen(false);
    menuToggle.focus();
  }
});

const toTop = document.querySelector(".to-top");
const mascots = document.querySelectorAll(".mascot-inline");
const visibleMascots = new Set();

if ("IntersectionObserver" in window) {
  const mascotObserver = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) visibleMascots.add(entry.target);
      else visibleMascots.delete(entry.target);
    }
    updateToTopVisibility();
  });
  mascots.forEach((mascot) => mascotObserver.observe(mascot));
}

function updateToTopVisibility() {
  const viewportCenter = window.innerHeight / 2;
  let activeMascot = null;
  let closestDistance = Infinity;

  for (const mascot of visibleMascots) {
    const bounds = mascot.getBoundingClientRect();
    const mascotCenter = bounds.top + bounds.height / 2;
    const distance = Math.abs(mascotCenter - viewportCenter);
    if (distance < closestDistance) {
      activeMascot = mascot;
      closestDistance = distance;
    }
  }

  for (const mascot of mascots) {
    mascot.style.visibility = activeMascot && mascot !== activeMascot ? "hidden" : "";
  }

  toTop.hidden = window.scrollY < 500;
}

window.addEventListener("scroll", updateToTopVisibility, { passive: true });
updateToTopVisibility();
