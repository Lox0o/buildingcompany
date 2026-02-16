(function () {
  "use strict";

  const config = window.SJ_BUILDERS_CONFIG || {};
  
  // Populate page content from config
  function populateContent() {
    // Hero
    if (config.companyName && document.getElementById('hero-brand')) {
      document.getElementById('hero-brand').textContent = config.companyName;
    }
    if (config.heroHeadline && document.getElementById('hero-headline')) {
      document.getElementById('hero-headline').textContent = config.heroHeadline;
    }
    if (config.heroSubheadline && document.getElementById('hero-subhead')) {
      document.getElementById('hero-subhead').textContent = config.heroSubheadline;
    }
    if (config.serviceArea && document.getElementById('hero-location')) {
      document.getElementById('hero-location').textContent = `Based in ${config.serviceArea}`;
    }
    if (config.urgencyText && document.getElementById('hero-urgency')) {
      document.getElementById('hero-urgency').textContent = config.urgencyText;
    }
    
    // Footer (location only — driven by config)
    if (config.serviceArea && document.getElementById('footer-location')) {
      document.getElementById('footer-location').textContent = `Based in ${config.serviceArea}`;
    }

    // Form links (open in new tab — no scroll)
    var formUrl = config.formUrl || "https://airtable.com/appqfjDttdu4JQjNK/pags0etDtyq65SH6y/form";
    [ 'hero-cta-link', 'benefits-cta-link' ].forEach(function (id) {
      var el = document.getElementById(id);
      if (el) el.href = formUrl;
    });
  }

  // Build benefits grid
  function buildBenefitsGrid() {
    const grid = document.getElementById('benefits-grid');
    if (!grid) return;

    const benefits = [
      {
        title: "Profit Share",
        description: config.profitShareDescription || "Early team members share in the profit of every job. The more value you create, the more you earn.",
        iconId: "icon-chart",
        featured: true
      },
      {
        title: "Paid properly. On time.",
        description: "You get paid when you're supposed to. No chasing, no exceptions.",
        iconId: "icon-dollar"
      },
      {
        title: "Tools & Gear Provided",
        description: "Major power tools, consumables, and PPE on us. You bring your hand tools.",
        iconId: "icon-tool"
      },
      {
        title: "You Build. We Handle the Rest.",
        description: "No quoting, no chasing clients, no paperwork. Show up, do quality work, go home.",
        iconId: "icon-check"
      },
      {
        title: "High-End Work Only",
        description: "Quality residential projects — renovations, custom builds, fit-outs. No production-line rubbish.",
        iconId: "icon-home"
      },
      {
        title: "Your Voice Matters",
        description: "Small founding team. Your input shapes how we grow. You're not a number.",
        iconId: "icon-voice"
      }
    ];

    const featured = benefits.find(b => b.featured);
    const rest = benefits.filter(b => !b.featured);
    const row2 = rest.slice(0, 3);
    const row3 = rest.slice(3, 5);

    function cardHtml(benefit, index, delay) {
      return `
      <div class="benefit-card ${benefit.featured ? 'benefit-card--featured' : ''} reveal" style="transition: opacity 1s ease-out ${delay}ms, transform 1s ease-out ${delay}ms;">
        <div class="benefit-icon"><img src="images/icons/${benefit.iconId}.svg" alt="" width="48" height="48" class="benefit-icon-img"></div>
        <h3>${benefit.title}</h3>
        <p class="text-body-02">${benefit.description}</p>
      </div>`;
    }

    grid.innerHTML = `
      <div class="benefits-row benefits-row-1">${featured ? cardHtml(featured, 0, 0) : ''}</div>
      <div class="benefits-row benefits-row-2">${row2.map((b, i) => cardHtml(b, i, 100 + i * 100)).join('')}</div>
      <div class="benefits-row benefits-row-3">${row3.map((b, i) => cardHtml(b, i, 400 + i * 100)).join('')}</div>
    `;
  }

  // Scroll reveal animation
  function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    reveals.forEach(reveal => {
      observer.observe(reveal);
    });
  }

  // Smooth scroll for anchor links
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  // Initialize on DOM ready
  function init() {
    populateContent();
    buildBenefitsGrid();
    initScrollReveal();
    initSmoothScroll();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
