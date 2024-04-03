const nav = document.querySelectorAll(".nav-js");
const sections = document.querySelectorAll(".section-js");

window.addEventListener(
  "scroll",
  _.debounce(() => {
    onScroll();
  }, 100)
);

function onScroll() {
  const mostVisibleSection = getMostVisibleSection(sections);
  const activeNav = getActiveNav();

  if (activeNav.hash === `#${mostVisibleSection.id}`) {
    return;
  }

  nav.forEach((el) => {
    if (el.hash === `#${mostVisibleSection.id}`) {
      el.classList.add("active");
      window.location.hash = mostVisibleSection.id;
    } else {
      el.classList.remove("active");
    }
  });

  mostVisibleSection.classList.add("active");
}

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function getVisiblePercentage(el) {
  const rect = el.getBoundingClientRect();
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight;
  const height = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
  return (height / el.offsetHeight) * 100;
}

function getMostVisibleSection(sections) {
  let maxPercentage = 0;
  let mostVisibleSection = null;

  sections.forEach((section) => {
    const percentage = getVisiblePercentage(section);
    if (percentage > maxPercentage) {
      maxPercentage = percentage;
      mostVisibleSection = section;
    }
  });

  return mostVisibleSection;
}

function getActiveNav() {
  return [...nav].find((el) => el.classList.contains("active"));
}
