# Smit Patel — Portfolio

Personal portfolio. Single page: hero, about, experience, projects, skills, education, contact.

Live: https://portfolio-seven-jade-lr5ctxena1.vercel.app

## Stack

React 19 + Vite, plain CSS, `react-icons`. No UI framework or animation library.

## Develop

```sh
npm install
npm run dev     # http://localhost:3000
npm run build
npm run lint
```

## Editing content

All copy lives in `src/data/portfolio.js`.

- **Projects** follow problem → built → stack → key decision → links → deployment.
  `decision` and `deployment` are optional; a missing field is not rendered.
- **Tags** double as the skills list — only tag a technology the item actually used.
- Resume PDF: `public/resumes/`. Profile photo: `public/profile.jpg`.
