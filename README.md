# Janani B — Portfolio

Built with Next.js 15, TypeScript, Tailwind CSS, Framer Motion, and Lucide Icons.
Includes 5 real case study pages generated from your actual Figma projects (Jewellery
Ecommerce, Online Learning Platform, Foodie food delivery app, Coffee Shop website,
and the Drink/Smoothie product line), your real experience, skills, and certifications
pulled from your resume, dark/light mode, SEO metadata, and WCAG-conscious accessibility.

---

## 1. Open the project in VS Code

1. Unzip the folder you downloaded, e.g. to `Documents/janani-portfolio`.
2. Open VS Code → `File > Open Folder` → select `janani-portfolio`.
3. Open the built-in terminal: `` Ctrl + ` `` (or `View > Terminal`).

## 2. Install Node.js (if you don't have it)

You need Node.js 18.18+ (Node 20 LTS recommended).

- Download from https://nodejs.org and install.
- Verify in the VS Code terminal:
  ```
  node -v
  npm -v
  ```

## 3. Install dependencies

In the VS Code terminal, inside the project folder:

```bash
npm install
```

This installs Next.js, React, Tailwind, Framer Motion, Lucide, next-themes, etc.

## 4. Run it locally

```bash
npm run dev
```

Open **http://localhost:3000** in your browser. You should see the full site:
Hero → About → Projects (5 real case studies) → Experience → Skills → Resume → Contact.

Every project card in the "Projects" section links to a full case study page at
`/projects/<slug>` — Problem, Business Goal, Research, Persona, Empathy Map, User
Journey, Information Architecture, Wireframes, Design System, Usability Testing,
Iterations, Accessibility, and Reflection — with a link to your real Figma prototype.

Edit `data/site.ts` to change any text, project, skill, or contact detail — the
whole site reads from that one file.

## 5. Before you go live — swap in your real assets

- **Photo**: replace `public/images/profile-placeholder.svg` with a real photo
  (`public/images/profile.jpg`), then update the `src` in `components/about.tsx`.
- **Resume**: `public/resume/Janani-B-Resume.pdf` already contains your uploaded
  resume. Swap the file if you update your resume later (keep the same filename,
  or update `resumeUrl` in `data/site.ts`).
- **Project covers**: `public/images/*.png` are your real Figma screenshots. Swap
  in higher-resolution exports from Figma any time (`File > Export` in Figma) for
  sharper images — keep the same filenames or update `data/site.ts`.
- **OG image**: add `public/og-image.png` (1200×630) for link previews on
  LinkedIn/Twitter — referenced in `app/layout.tsx`.

## 6. Push to GitHub

In the VS Code terminal:

```bash
git init
git add .
git commit -m "Initial commit: portfolio site"
```

Create a new empty repository on GitHub (no README/gitignore, since you already
have them): https://github.com/new → name it e.g. `portfolio`.

Then connect and push:

```bash
git branch -M main
git remote add origin https://github.com/jananijanani2611-code/portfolio.git
git push -u origin main
```

(Use your own GitHub username/repo URL if different — grab it from GitHub's
"Quick setup" page after creating the repo.)

From now on, after any change:

```bash
git add .
git commit -m "Describe what you changed"
git push
```

## 7. Deploy for free on Vercel (recommended — made by the Next.js team)

1. Go to https://vercel.com and sign up/log in with your **GitHub** account.
2. Click **Add New → Project**.
3. Select your `portfolio` repository → click **Import**.
4. Framework preset auto-detects as **Next.js**. Leave all defaults.
5. Click **Deploy**. Wait ~1–2 minutes.
6. You'll get a live URL like `https://portfolio-yourname.vercel.app`.
7. Optional: add a custom domain under **Project → Settings → Domains**.

Every time you `git push` to `main` afterward, Vercel automatically rebuilds and
redeploys — no extra steps.

### Alternative: deploy via CLI instead of the dashboard

```bash
npm install -g vercel
vercel login
vercel        # first deploy, follow prompts
vercel --prod # promote to production URL
```

## 8. Project structure

```
janani-portfolio/
├── app/
│   ├── layout.tsx           # Root layout, fonts, SEO metadata, dark mode
│   ├── page.tsx             # Homepage — composes all sections
│   ├── globals.css          # Design tokens, base styles
│   └── projects/[slug]/
│       └── page.tsx         # Dynamic case study page (one template, 5 projects)
├── components/
│   ├── navbar.tsx           # Sticky nav + theme toggle + mobile menu
│   ├── hero.tsx              # Landing section
│   ├── about.tsx             # About + education
│   ├── projects.tsx          # Projects grid section
│   ├── project-card.tsx      # Individual project card
│   ├── experience.tsx        # Experience timeline + certifications
│   ├── skills.tsx             # Skills grid (UX / UI / Frontend / Backend)
│   ├── resume.tsx             # Resume download block
│   ├── contact.tsx            # Contact links + form
│   ├── footer.tsx              # Footer
│   ├── case-study-block.tsx    # Reusable case-study section blocks
│   ├── section-heading.tsx     # Shared section heading
│   ├── reveal.tsx               # Scroll-reveal animation wrapper
│   └── theme-provider.tsx        # next-themes wrapper
├── data/
│   └── site.ts                   # ALL content lives here — edit this file only
├── lib/
│   └── utils.ts                    # Tailwind class merge helper
├── public/
│   ├── images/                      # Real Figma screenshots used as covers
│   └── resume/                       # Your resume PDF
├── package.json
├── tailwind.config.ts                 # Design tokens (colors, spacing, radius)
└── tsconfig.json
```

## 9. Common issues

- **`npm install` fails / network errors**: check your internet connection, or
  try `npm cache clean --force` then `npm install` again.
- **Fonts fail to load during `next build`**: this happens only in restricted
  network environments (like the sandbox this was built in). On your machine or
  on Vercel, this resolves automatically since Google Fonts is reachable.
- **Port 3000 already in use**: run `npm run dev -- -p 3001` instead.
- **Dark mode flickers on load**: this is normal on the very first paint in dev
  mode only; it doesn't happen in the production build.
