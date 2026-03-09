/* ============================================
   ANNA ALESSANDRA — Blog JS
   ============================================ */

// ---- NAV + FOOTER ----
const nav = document.getElementById('nav');
document.getElementById('year').textContent = new Date().getFullYear();
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');
navToggle?.addEventListener('click', () => navLinks.classList.toggle('open'));

// ---- BLOG ENTRIES ----
// Add, edit, or remove entries here. Each entry becomes a blog post.
const entries = [
  {
    slug: 'finding-light-in-winter',
    date: 'March 2, 2025',
    tag: 'Photography',
    title: 'Finding light in winter',
    excerpt: 'There is something about the low winter sun — the way it slides through curtains and catches dust — that I keep chasing with my camera.',
    body: `
      <p>There is something about the low winter sun — the way it slides through curtains and catches dust in slow columns — that I keep chasing with my camera. It is a particular quality of light that doesn't exist anywhere else in the year.</p>
      <p>In summer the light is confident, almost aggressive. It bleaches. In winter it hesitates. It enters rooms sideways, as if asking permission, and in doing so illuminates everything it touches with an unusual tenderness.</p>
      <p>I have spent the last three months following this light through my home, through markets, through the windows of cafés I've sat in for too long. The results are not dramatic. They are quiet things — a bowl of fruit, steam from a cup, a sleeping cat. But I think that is exactly right.</p>
      <p>The camera is not always a tool for spectacle. Sometimes it is a way of slowing down long enough to really look at what is already there.</p>
    `
  },
  {
    slug: 'on-shooting-with-film',
    date: 'February 14, 2025',
    tag: 'Process',
    title: 'On shooting with film',
    excerpt: 'The constraint of 36 frames forces a kind of patience that digital photography rarely demands. I've been thinking about scarcity as a creative tool.',
    body: `
      <p>When I switched to shooting entirely on film for three months, something unexpected happened: I took better photographs. Not technically — the grain, the occasional misexposed frame, the wait for development all introduced imperfections digital wouldn't tolerate. But they were more intentional. More mine.</p>
      <p>The constraint of 36 frames forces a kind of patience that digital photography rarely demands. You cannot spray and pray. You have to commit. You lift the camera only when you genuinely believe something is worth the tenth of a roll you're about to spend.</p>
      <p>Scarcity, I've realised, is a surprisingly useful creative tool. It shifts you from passive collector to active decision-maker. Every frame is a small argument: I believe this moment is worth preserving.</p>
      <p>I still shoot digital. But I've brought that same pause — that moment of asking whether I really mean it — to every shutter press since.</p>
    `
  },
  {
    slug: 'colour-and-memory',
    date: 'January 28, 2025',
    tag: 'Reflection',
    title: 'Colour and memory',
    excerpt: 'Warm tones anchor me to particular memories: terracotta walls, late afternoon gold, the brown of old books. I started mapping my palette to moments.',
    body: `
      <p>Warm tones anchor me to particular memories. Terracotta walls in a city I visited at twenty-two. Late afternoon gold through pine trees. The cracked brown spine of a book I read during a long summer illness. The orange-pink of a kitchen where someone I loved used to cook.</p>
      <p>I have been thinking about why my work gravitates so consistently toward this end of the spectrum — ochres, ambers, burnt siennas — and I think the answer is less aesthetic than autobiographical. These are the colours of the moments I most want to hold.</p>
      <p>Colour is not neutral. It carries emotional charge that bypasses analysis and lands somewhere more instinctive. Cool tones read as distant, analytical, contemporary. Warm tones feel inhabited, close, human.</p>
      <p>When I choose a palette, I'm not just making an aesthetic decision. I'm deciding what feeling I want a viewer to carry out of the image with them. That feels like one of the most important choices a photographer or artist can make.</p>
    `
  },
  {
    slug: 'the-case-for-bad-photos',
    date: 'January 10, 2025',
    tag: 'Photography',
    title: 'The case for bad photographs',
    excerpt: 'A blurred, underexposed photo of my grandmother's kitchen holds more for me than technically perfect images I've carefully archived. There's something in that.',
    body: `
      <p>I have a photograph of my grandmother's kitchen that is blurred, slightly underexposed, and compositionally a mess. The horizon tilts. Her elbow is cropped out. There is too much of the ceiling and not enough of her face.</p>
      <p>It is one of my most valued images.</p>
      <p>We talk about photography in terms of craft — exposure, composition, the decisive moment — and craft matters. But craft serves emotion, and sometimes a technically imperfect photograph contains more emotional truth than a perfect one precisely because of its imperfections.</p>
      <p>The blur suggests speed, presence, aliveness. The bad crop means I was close, distracted, thinking about something other than the frame. The image is evidence of a real moment rather than a composed one.</p>
      <p>I've stopped deleting the imperfect photographs. I've started looking harder at what they contain.</p>
    `
  }
];

// ---- RENDER ENTRIES ----
const blogList = document.getElementById('blogList');
entries.forEach(entry => {
  const el = document.createElement('div');
  el.className = 'blog-entry fade-up';
  el.id = entry.slug;
  el.innerHTML = `
    <div class="blog-entry-meta">
      <span class="blog-entry-date">${entry.date}</span>
      <span class="blog-entry-tag">${entry.tag}</span>
    </div>
    <div class="blog-entry-body">
      <h2 class="blog-entry-title">${entry.title}</h2>
      <p class="blog-entry-excerpt">${entry.excerpt}</p>
      <span class="blog-read-more">Read more →</span>
    </div>
  `;
  el.addEventListener('click', () => openPost(entry));
  blogList.appendChild(el);
});

// ---- MODAL ----
const modal   = document.getElementById('postModal');
const postContent = document.getElementById('postContent');
const postClose = document.getElementById('postClose');

function openPost(entry) {
  postContent.innerHTML = `
    <h2>${entry.title}</h2>
    <span class="post-meta">${entry.date} &nbsp;·&nbsp; ${entry.tag}</span>
    ${entry.body}
  `;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

postClose.addEventListener('click', closePost);
modal.addEventListener('click', e => { if (e.target === modal) closePost(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closePost(); });

function closePost() {
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

// ---- FADE IN ----
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
  });
}, { threshold: 0.1 });

setTimeout(() => {
  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
}, 100);

// ---- DEEP LINK ----
const hash = window.location.hash.replace('#', '');
if (hash) {
  const entry = entries.find(e => e.slug === hash);
  if (entry) setTimeout(() => openPost(entry), 400);
}
