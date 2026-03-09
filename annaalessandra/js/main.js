/* ============================================
   ANNA ALESSANDRA — Main JS
   ============================================ */

// ---- NAV SCROLL ----
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});

// ---- MOBILE NAV TOGGLE ----
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');
navToggle?.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ---- FOOTER YEAR ----
document.getElementById('year').textContent = new Date().getFullYear();

// ---- PORTFOLIO FILTER ----
const filterBtns = document.querySelectorAll('.filter-btn');
const items = document.querySelectorAll('.portfolio-item');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    items.forEach(item => {
      const match = filter === 'all' || item.dataset.category === filter;
      item.classList.toggle('hidden', !match);
    });
  });
});

// ---- JOURNAL PREVIEW DATA ----
// Edit these objects to update your journal entries.
// Keep the same structure; the blog.html page uses the same data.
const journalEntries = [
  {
    date: 'March 2, 2025',
    title: 'Finding light in winter',
    excerpt: 'There is something about the low winter sun — the way it slides through curtains and catches dust — that I keep chasing with my camera.',
    slug: 'finding-light-in-winter'
  },
  {
    date: 'February 14, 2025',
    title: 'On shooting with film',
    excerpt: 'The constraint of 36 frames forces a kind of patience that digital photography rarely demands. I've been thinking about scarcity as a creative tool.',
    slug: 'on-shooting-with-film'
  },
  {
    date: 'January 28, 2025',
    title: 'Colour and memory',
    excerpt: 'Warm tones anchor me to particular memories: terracotta walls, late afternoon gold, the brown of old books. I started mapping my palette to moments.',
    slug: 'colour-and-memory'
  }
];

// Render journal preview (first 3 entries)
const preview = document.getElementById('journalPreview');
if (preview) {
  journalEntries.slice(0, 3).forEach(entry => {
    const card = document.createElement('a');
    card.href = `blog.html#${entry.slug}`;
    card.className = 'journal-card fade-up';
    card.innerHTML = `
      <p class="journal-card-date">${entry.date}</p>
      <h3 class="journal-card-title">${entry.title}</h3>
      <p class="journal-card-excerpt">${entry.excerpt}</p>
    `;
    preview.appendChild(card);
  });
}

// ---- CONTACT FORM ----
function handleSubmit(e) {
  e.preventDefault();
  const note = document.getElementById('formNote');
  // Replace this with a real form service like Formspree:
  // <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  // and remove the onsubmit handler.
  note.textContent = 'Thanks! I'll be in touch soon.';
  e.target.reset();
  setTimeout(() => { note.textContent = ''; }, 5000);
}

// ---- FADE-IN ON SCROLL ----
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

// Observe sections and cards on load
function initObserver() {
  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
}

// Give journal cards time to render
setTimeout(initObserver, 100);

// Add fade-up to section children
document.querySelectorAll('.section').forEach(section => {
  ['.section-label', '.section-title', '.about-text p', '.about-text a',
   '.contact-text p', '.contact-details', '.contact-form'].forEach(sel => {
    section.querySelectorAll(sel).forEach(el => {
      el.classList.add('fade-up');
    });
  });
});
