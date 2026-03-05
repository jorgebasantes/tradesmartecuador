(function () {
  const scrollButton = document.getElementById("scrollToLinks");
  const linksSection = document.getElementById("links");

  if (scrollButton && linksSection) {
    scrollButton.addEventListener("click", function () {
      linksSection.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  // Shared reveal animation for fade/slide sections.
  const revealNodes = document.querySelectorAll(".reveal");
  if (!revealNodes.length) return;

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealNodes.forEach(function (node) {
    observer.observe(node);
  });
})();
