# Personal Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Dark/Light mode support
- Fully responsive design
- Fast and optimized performance
- Blog section
- Contact form with email integration
- GitHub integration
- Project showcase

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Framer Motion
- React Icons
- React Hook Form
- Yup Validation
- Nodemailer

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd my-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your environment variables:
```env
EMAIL_USER=your-email@example.com
EMAIL_PASS=your-email-password
EMAIL_TO=your-email@example.com
GITHUB_TOKEN=your-github-token
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

1. Update personal information in the components:
   - Edit `src/components/sections/Hero.tsx` for the landing page
   - Edit `src/components/sections/About.tsx` for your bio and skills
   - Edit `src/components/sections/Projects.tsx` to showcase your work
   - Edit `src/components/sections/Blog.tsx` for your articles
   - Edit `src/components/sections/Contact.tsx` for contact information

2. Replace images:
   - Add your profile picture in `public/images/profile.jpg`
   - Add project screenshots in `public/images/`

3. Update social links in `src/components/layout/Navigation.tsx`

## Deployment

The site can be deployed to various platforms:

- Vercel (Recommended for Next.js)
- Netlify
- GitHub Pages

## License

MIT License
