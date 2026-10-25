(() => {
  const dialog = document.querySelector("#pult-ai-dialog");
  if (!(dialog instanceof HTMLDialogElement)) return;

  const storageKey = "pultAiPopupGesehen-v1";
  const actionLinks = dialog.querySelectorAll("[data-pult-ai-seen]");
  const closeButton = dialog.querySelector(".pult-ai-close");
  let previouslyFocused = null;
  let previousScrollPosition = 0;

  function hasSeenPopup() {
    try {
      return window.localStorage.getItem(storageKey) === "true";
    } catch {
      return false;
    }
  }

  function markPopupSeen() {
    try {
      window.localStorage.setItem(storageKey, "true");
    } catch {
      // Storage kann deaktiviert sein; in diesem Fall erscheint die Ankündigung erneut.
    }
  }

  function openPopup() {
    if (hasSeenPopup() || dialog.open) return;
    previouslyFocused = document.activeElement;
    previousScrollPosition = window.scrollY;
    document.body.style.setProperty("--pult-ai-scroll-top", `${-previousScrollPosition}px`);
    document.documentElement.classList.add("pult-ai-open");
    dialog.hidden = false;
    dialog.showModal();
  }

  function schedulePopup() {
    if (hasSeenPopup()) return;
    window.setTimeout(openPopup, 1000);
  }

  if (document.readyState === "complete") schedulePopup();
  else window.addEventListener("load", schedulePopup, { once: true });

  actionLinks.forEach((link) => link.addEventListener("click", markPopupSeen));
  closeButton.addEventListener("click", () => dialog.close());
  dialog.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      event.preventDefault();
      dialog.close();
    }
  });
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
  dialog.addEventListener("close", () => {
    markPopupSeen();
    document.documentElement.classList.remove("pult-ai-open");
    document.body.style.removeProperty("--pult-ai-scroll-top");
    window.scrollTo({ top: previousScrollPosition, behavior: "instant" });
    if (previouslyFocused instanceof HTMLElement
      && previouslyFocused !== document.body
      && previouslyFocused.isConnected) {
      previouslyFocused.focus({ preventScroll: true });
      return;
    }
    const heading = document.querySelector("#hero-title");
    if (heading instanceof HTMLElement) {
      heading.tabIndex = -1;
      heading.focus({ preventScroll: true });
    }
  });
})();
