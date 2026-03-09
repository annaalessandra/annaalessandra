# annaalessandra.com

Personal photography & art website for Anna Alessandra.

## 📁 Project Structure

```
annaalessandra/
├── index.html        ← Main page (Hero, About, Portfolio, Journal preview, Contact)
├── blog.html         ← Journal / writing archive
├── snake.html        ← Snake game (a little fun)
├── css/
│   ├── style.css     ← Main styles (warm artistic theme)
│   └── blog.css      ← Blog-specific styles
├── js/
│   ├── main.js       ← Main JS (nav, portfolio filter, journal preview, contact)
│   └── blog.js       ← Blog entries data + rendering
└── images/           ← Put your photos here
```

---

## 🚀 Deploying to GitHub Pages (free hosting)

### Step 1 — Create a GitHub account
Sign up at https://github.com if you don't have one.

### Step 2 — Create a new repository
1. Click **+** → **New repository**
2. Name it exactly: `annaalessandra.github.io`
   *(or any name — we'll connect your domain either way)*
3. Set it to **Public**
4. Click **Create repository**

### Step 3 — Push your files

Install [Git](https://git-scm.com/) if you haven't, then run:

```bash
cd path/to/annaalessandra
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

### Step 4 — Enable GitHub Pages
1. Go to your repo on GitHub → **Settings** → **Pages**
2. Under **Source**, select **Deploy from a branch**
3. Choose **main** branch → **/ (root)**
4. Click **Save**

Your site will be live at `https://YOUR_USERNAME.github.io/REPO_NAME` within a minute.

---

## 🌐 Connecting annaalessandra.com

### Step 5 — Add your custom domain in GitHub
1. In **Settings → Pages**, find **Custom domain**
2. Enter `annaalessandra.com`
3. Check **Enforce HTTPS**
4. Click **Save**

This creates a file called `CNAME` in your repo automatically.

### Step 6 — Update DNS at your domain registrar
Log into wherever you bought `annaalessandra.com` and add these DNS records:

**A Records** (point the apex domain):
```
Type  Host  Value
A     @     185.199.108.153
A     @     185.199.109.153
A     @     185.199.110.153
A     @     185.199.111.153
```

**CNAME Record** (point www):
```
Type   Host  Value
CNAME  www   YOUR_USERNAME.github.io
```

DNS changes can take up to 48 hours to propagate, but usually under an hour.

---

## ✏️ Customising your site

### Add your portrait photo
Replace the grey box in the About section:
1. Add your photo to `/images/portrait.jpg`
2. In `css/style.css`, find `.about-img-placeholder` and add:
   ```css
   background: url('../images/portrait.jpg') center/cover no-repeat;
   ```
3. And add `display: none` to `.about-img-placeholder .img-label`

### Add real portfolio images
Replace the grey portfolio placeholders with `<img>` tags inside `.portfolio-img-wrap`:
```html
<img src="images/your-photo.jpg" alt="Golden Hour" 
     style="width:100%; height:100%; object-fit:cover;">
```

### Update contact details
In `index.html`, search for "hello@annaalessandra.com" and update with your real email, Instagram, and location.

### Set up a real contact form (free)
1. Sign up at https://formspree.io
2. Create a form, copy your form ID
3. In `index.html`, change the `<form>` tag to:
   ```html
   <form class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
4. Remove the `onsubmit="handleSubmit(event)"` attribute

### Add/edit blog entries
All journal entries live in `js/blog.js` in the `entries` array.
Each entry has: `slug`, `date`, `tag`, `title`, `excerpt`, `body` (HTML string).
Just copy an existing entry, change the content, and it will appear automatically.

---

## 🔧 Tech stack

- Pure HTML, CSS, JavaScript — no frameworks, no build step
- Google Fonts (Cormorant Garamond + Jost)
- Fully responsive
- No dependencies to install
