(function () {
  "use strict";

  var data = window.LANDING_PAGE_DATA;
  if (!data) return;

  // ----- Portfolio: render grid from data -----
  var grid = document.getElementById("portfolio-grid");
  if (grid && data.portfolio && data.portfolio.length) {
    data.portfolio.forEach(function (project) {
      var card = document.createElement("article");
      card.className = "portfolio-card";
      card.dataset.type = project.type;
      card.setAttribute("role", "button");
      card.tabIndex = 0;

      var img = document.createElement("img");
      img.src = project.images[0];
      img.alt = project.title;
      img.loading = "lazy";
      img.dataset.projectId = project.id;

      var info = document.createElement("div");
      info.className = "portfolio-card-info";
      var title = document.createElement("h3");
      title.className = "portfolio-card-title";
      title.textContent = project.title;
      var meta = document.createElement("p");
      meta.className = "portfolio-card-meta";
      meta.textContent = project.duration ? project.duration : project.type;
      info.appendChild(title);
      info.appendChild(meta);

      var desc = document.createElement("p");
      desc.className = "portfolio-card-desc";
      desc.textContent = project.description;

      card.appendChild(img);
      card.appendChild(desc);
      card.appendChild(info);
      grid.appendChild(card);

      card.addEventListener("click", function () {
        openLightbox(project);
      });
      card.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openLightbox(project);
        }
      });
    });
  }

  // ----- Portfolio filter -----
  var filterBtns = document.querySelectorAll(".filter-btn");
  var cards = document.querySelectorAll(".portfolio-card");
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var filter = btn.dataset.filter;
      filterBtns.forEach(function (b) {
        b.classList.toggle("active", b === btn);
      });
      cards.forEach(function (card) {
        var type = card.dataset.type;
        var show = filter === "all" || type === filter;
        card.style.display = show ? "" : "none";
      });
    });
  });

  // ----- Lightbox -----
  var lightbox = document.getElementById("lightbox");
  var lightboxImg = document.getElementById("lightbox-img");
  var lightboxTitle = document.getElementById("lightbox-title");
  var lightboxDesc = document.getElementById("lightbox-desc");
  var lightboxMeta = document.getElementById("lightbox-meta");
  var lightboxThumbs = document.getElementById("lightbox-thumbs");
  var lightboxClose = document.querySelector(".lightbox-close");

  var currentLightboxProject = null;
  var currentLightboxIndex = 0;

  function setLightboxImage(project, index) {
    if (!project || !lightboxImg) return;
    index = Math.max(0, Math.min(index, project.images.length - 1));
    currentLightboxIndex = index;
    lightboxImg.src = project.images[index];
    if (lightboxThumbs) {
      var thumbs = lightboxThumbs.querySelectorAll("img");
      thumbs.forEach(function (t, i) {
        t.classList.toggle("active", i === index);
      });
    }
  }

  function openLightbox(project) {
    if (!lightbox || !project) return;
    currentLightboxProject = project;
    currentLightboxIndex = 0;
    lightbox.hidden = false;
    lightboxImg.src = project.images[0];
    lightboxImg.alt = project.title;
    lightboxTitle.textContent = project.title;
    lightboxDesc.textContent = project.description;
    lightboxMeta.textContent = project.duration ? "Duration: " + project.duration : "";

    if (lightboxThumbs) {
      lightboxThumbs.innerHTML = "";
      project.images.forEach(function (url, i) {
        var thumb = document.createElement("img");
        thumb.src = url;
        thumb.alt = project.title + " " + (i + 1);
        thumb.dataset.index = i;
        if (i === 0) thumb.classList.add("active");
        thumb.addEventListener("click", function () {
          setLightboxImage(project, i);
        });
        lightboxThumbs.appendChild(thumb);
      });
    }

    document.body.style.overflow = "hidden";
  }

  // Lightbox swipe on mobile
  if (lightbox && lightboxImg) {
    var touchStartX = 0;
    var touchEndX = 0;
    lightbox.addEventListener(
      "touchstart",
      function (e) {
        touchStartX = e.changedTouches ? e.changedTouches[0].screenX : e.screenX;
      },
      { passive: true }
    );
    lightbox.addEventListener(
      "touchend",
      function (e) {
        touchEndX = e.changedTouches ? e.changedTouches[0].screenX : e.screenX;
        var diff = touchStartX - touchEndX;
        if (!currentLightboxProject || Math.abs(diff) < 50) return;
        if (diff > 0) {
          var next = Math.min(currentLightboxIndex + 1, currentLightboxProject.images.length - 1);
          if (next !== currentLightboxIndex) setLightboxImage(currentLightboxProject, next);
        } else {
          var prev = Math.max(currentLightboxIndex - 1, 0);
          if (prev !== currentLightboxIndex) setLightboxImage(currentLightboxProject, prev);
        }
      },
      { passive: true }
    );
  }

  function closeLightbox() {
    if (lightbox) {
      lightbox.hidden = true;
      document.body.style.overflow = "";
      currentLightboxProject = null;
    }
  }

  if (lightboxClose) {
    lightboxClose.addEventListener("click", closeLightbox);
  }
  if (lightbox) {
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !lightbox.hidden) closeLightbox();
    });
  }

  // ----- FAQ accordion -----
  var faqList = document.getElementById("faq-list");
  if (faqList && data.faq && data.faq.length) {
    data.faq.forEach(function (item) {
      var wrap = document.createElement("div");
      wrap.className = "faq-item";

      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "faq-question";
      btn.textContent = item.q;
      btn.setAttribute("aria-expanded", "false");

      var answer = document.createElement("div");
      answer.className = "faq-answer";
      var p = document.createElement("p");
      p.textContent = item.a;
      answer.appendChild(p);

      wrap.appendChild(btn);
      wrap.appendChild(answer);
      faqList.appendChild(wrap);

      btn.addEventListener("click", function () {
        var isOpen = wrap.classList.toggle("is-open");
        btn.setAttribute("aria-expanded", isOpen);
      });
    });
  }

  // ----- What we offer tabs -----
  var offerTabs = document.querySelectorAll(".offer-tab");
  var panels = document.querySelectorAll(".offer-panel");
  offerTabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      var tabId = tab.dataset.tab;
      offerTabs.forEach(function (t) {
        t.classList.toggle("active", t === tab);
      });
      panels.forEach(function (panel) {
        panel.classList.toggle("active", panel.id === "panel-" + tabId);
      });
    });
  });

  // ----- Worker testimonials: show only if enabled and 2+ -----
  var testimonialsSection = document.getElementById("testimonials");
  var testimonialsGrid = document.getElementById("testimonials-grid");
  if (
    data.testimonialsEnabled &&
    data.testimonials &&
    data.testimonials.length >= 2 &&
    testimonialsSection &&
    testimonialsGrid
  ) {
    testimonialsSection.hidden = false;
    testimonialsSection.removeAttribute("aria-hidden");
    data.testimonials.forEach(function (t) {
      var card = document.createElement("div");
      card.className = "offer-card";
      card.innerHTML =
        "<p><strong>" +
        (t.name || "") +
        "</strong> — " +
        (t.experience || "") +
        "</p><p>" +
        (t.quote || "") +
        "</p>";
      testimonialsGrid.appendChild(card);
    });
  }

  // ----- Smooth scroll for anchor links -----
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    var id = link.getAttribute("href");
    if (id === "#") return;
    link.addEventListener("click", function (e) {
      var target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
})();
