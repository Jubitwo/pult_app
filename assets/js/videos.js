(() => {
  // Pro vorhandenem Video einen Eintrag ergänzen; Slots ohne Eintrag bleiben unverändert.
  const PULT_VIDEOS = {
    "sitzplan-noten-planung": {
      src: "assets/videos/sitzplan-noten-planung.mp4",
      titel: "Sitzplan: Mitarbeit, Hausaufgaben, Anwesenheit & Gruppen",
      dauer: "0:55",
      hinweis: "Schau's dir an",
    },
  };

  const slots = [...document.querySelectorAll("[data-video-slot]")]
    .filter((slot) => Object.hasOwn(PULT_VIDEOS, slot.dataset.videoSlot));
  if (slots.length === 0) return;

  const dialog = document.createElement("dialog");
  dialog.className = "video-dialog";
  dialog.setAttribute("aria-labelledby", "video-dialog-title");
  dialog.innerHTML = `
    <div class="video-dialog-content">
      <header class="video-dialog-header">
        <h2 id="video-dialog-title"></h2>
        <button class="video-dialog-close" type="button" aria-label="Video schließen" autofocus>✕</button>
      </header>
      <video controls playsinline preload="none"></video>
      <p class="video-dialog-status" role="status" hidden></p>
    </div>`;
  document.body.append(dialog);

  const title = dialog.querySelector("h2");
  const player = dialog.querySelector("video");
  const status = dialog.querySelector("[role=status]");
  let lastTrigger = null;
  let scrollPosition = 0;

  function showError(message, error) {
    console.error(message, error);
    status.textContent = message;
    status.hidden = false;
  }

  function openVideo(button, video) {
    lastTrigger = button;
    title.textContent = video.titel;
    status.hidden = true;
    status.textContent = "";
    scrollPosition = window.scrollY;
    document.body.style.setProperty("--video-scroll-top", `${-scrollPosition}px`);
    document.documentElement.classList.add("video-open");
    dialog.showModal();
    // Keine Video-URL im DOM vor dem bewussten Klick, auch keine Metadaten-Anfrage.
    player.src = video.src;
    player.play().catch((error) => {
      if (!dialog.open || error.name === "AbortError") return;
      if (!status.hidden) return; // Die konkrete Ladefehlermeldung nicht überschreiben.
      showError("Die automatische Wiedergabe konnte nicht starten. Bitte nutze die Wiedergabetaste im Video.", error);
    });
  }

  player.addEventListener("error", () => {
    if (dialog.open && player.hasAttribute("src")) {
      showError("Das Video konnte nicht geladen werden. Bitte schließe es und versuche es erneut.", player.error);
    }
  });
  dialog.querySelector(".video-dialog-close").addEventListener("click", () => dialog.close());
  dialog.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      event.preventDefault();
      dialog.close();
    }
  });
  dialog.addEventListener("click", (event) => {
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right
      || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
  });
  dialog.addEventListener("close", () => {
    player.pause();
    if (player.readyState > 0) player.currentTime = 0;
    player.removeAttribute("src");
    player.load();
    document.documentElement.classList.remove("video-open");
    document.body.style.removeProperty("--video-scroll-top");
    window.scrollTo({ top: scrollPosition, behavior: "instant" });
    lastTrigger?.focus({ preventScroll: true });
  });

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const observer = "IntersectionObserver" in window
    ? new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        if (!reducedMotion.matches) entry.target.classList.add("video-invitation");
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.5 })
    : null;

  for (const slot of slots) {
    const video = PULT_VIDEOS[slot.dataset.videoSlot];
    const button = document.createElement("button");
    button.type = "button";
    button.className = "video-hint";
    button.setAttribute("aria-label", `Video ansehen: ${video.titel} (${video.dauer})`);
    button.setAttribute("aria-haspopup", "dialog");
    const image = document.createElement("img");
    image.src = "./assets/hamsters/hamster-video.png";
    image.alt = "";
    image.width = 768;
    image.height = 768;
    image.loading = "lazy";
    image.decoding = "async";
    const bubble = document.createElement("span");
    bubble.className = "video-hint-bubble";
    bubble.textContent = `▶ ${video.hinweis} · ${video.dauer}`;
    button.append(image, bubble);
    button.addEventListener("click", () => openVideo(button, video));

    // Nur bei konfiguriertem Video die bisherige Figur ersetzen.
    const mascot = slot.querySelector(":scope > .mascot");
    if (mascot) mascot.replaceWith(button);
    else slot.append(button);
    slot.classList.add("has-video");
    observer?.observe(button);
  }
})();
