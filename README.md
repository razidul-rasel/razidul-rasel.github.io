# Md. Razidul Islam Rasel — Multi-page Portfolio

## Pages
- `index.html` — About / home
- `education.html`
- `skills.html` — two-column software & technology / research & analytical skills
- `experience.html`
- `projects.html`
- `research-publications.html`
- `insights.html` — searchable and filterable stories archive
- `insights/` — individual insight articles
- `assets/` — CSS, JavaScript, favicon, and profile photo

## Deploy to GitHub Pages
1. Download and extract this ZIP.
2. Open your `razidul-rasel.github.io` repository.
3. Upload the contents of the extracted folder to the repository root (not the parent folder).
4. Replace the existing files when GitHub asks, and upload the `assets` and `insights` folders.
5. Commit directly to the `main` branch.
6. Wait for GitHub Pages deployment, then refresh the website with Ctrl+F5.

## Adding an Insight
1. Duplicate one of the HTML files inside `insights/`.
2. Rename it using a short, lowercase slug, e.g. `conference-attendance.html`.
3. Edit its page title, kicker, summary, and article paragraphs.
4. Open `insights.html` and duplicate an existing `<article class="insight-card">` block.
5. Update `data-category` (`milestone`, `training`, or `recognition`), card title, summary, and href to your new article.
6. Commit both files. The search and category filters work automatically.

## Updating other content
- Text and page structure: edit the relevant `.html` file.
- Design: edit `assets/style.css`.
- Menu behaviour and Insights filters: edit `assets/script.js`.
- Profile photo: replace `assets/profile.jpg` with your own image, keeping the same filename.

## Content accuracy notes
- The profile photo is the original image supplied previously; it has not been AI-regenerated.
- The paper is described as submitted to IEEE ICEEICT 2027 and not yet accepted/published.
- Skills and experience are based on the user's CV and public professional profile. Please review all details before publishing.
- Do not add confidential client data, private screenshots, credentials, or non-public project information.
