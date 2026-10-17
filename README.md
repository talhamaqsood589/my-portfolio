# Talha Maqsood — Developer Portfolio

A responsive React + Vite developer portfolio with dark/light themes, mobile navigation, animated sections, project cards, experience, education, certification, and contact details.

## Run locally

1. Install Node.js (LTS) if it is not already installed.
2. Open this `professional-developer-portfolio` folder in VS Code.
3. Open **Terminal → New Terminal**.
4. Run these commands:

   ```bash
   npm install
   npm run dev
   ```

5. Open the local URL printed in the terminal, usually `http://localhost:5173`.

## Add your profile photo

1. Choose a clear, professional headshot.
2. Copy it into `public/images/`.
3. Name it `profile-photo.jpg` (or update `profileImage` in `src/data/portfolioData.js` to match the filename).
4. Refresh the website. Until you add the photo, the circular area shows your initials.

## Your resume

Your supplied resume has been copied to `public/resume.pdf`. The **View resume** and **Download PDF** links use this file. Replace it with an updated PDF using the same filename whenever your resume changes.

## Update your details and links

Most personal information is in `src/data/portfolioData.js`, including your name, role, introduction, skills, projects, work history, education, certification, email, phone, GitHub, and LinkedIn.

Project cards currently have no source-code or live-demo links because verified project URLs were not included. Add your actual URLs to the `github` and `demo` fields for each project when ready. Add screenshots under `public/images/projects/` and update the image paths in the data file.

## Build for deployment

```bash
npm run build
npm run preview
```

The production website is generated in the `dist/` folder. It can be deployed to Vercel or another static hosting provider.
