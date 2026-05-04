# Devmotors Portfolio

![App Preview](https://imgix.cosmicjs.com/dac4f610-480a-11f1-a330-bd8a29342713-autopilot-photo-1618477388954-7852f32655ec-1777934688229.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

A modern portfolio website built with Next.js 16 and Cosmic CMS, featuring a profile section, projects showcase, and skills display.

## Features

- 👤 Dynamic profile section with bio and social links
- 💼 Projects gallery with featured project highlights
- 🛠️ Skills showcase organized by category with proficiency levels
- 📱 Fully responsive design
- ⚡ Server-side rendering with Next.js 16
- 🎨 Beautiful dark theme with gradient accents
- 🔗 Individual project detail pages
- 📄 Resume download support

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=69f9211aa963c4f5f0d953a9&clone_repository=69f92206a963c4f5f0d953df)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for: Uma landing page construída para fins de portfólio."

### Code Generation Prompt

> Build a Next.js application for a website called "Devmotors". The content is managed in Cosmic CMS with the following object types: profile, projects, skills. Create a beautiful, modern, responsive design with a homepage and pages for each content type. User instructions: Uma landing page construída para fins de portfólio.

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Cosmic CMS** - Content management
- **React 19** - UI library

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic account and bucket

### Installation

1. Clone the repository
2. Install dependencies:
```bash
bun install
```

3. Set up environment variables in `.env.local`:
```
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

4. Run the development server:
```bash
bun run dev
```

## Cosmic SDK Examples

```typescript
// Fetch profile
const { object } = await cosmic.objects
  .findOne({ type: 'profile' })
  .depth(1)

// Fetch all projects
const { objects } = await cosmic.objects
  .find({ type: 'projects' })
  .depth(1)

// Fetch skills
const { objects } = await cosmic.objects
  .find({ type: 'skills' })
  .depth(1)
```

## Cosmic CMS Integration

The app uses three content types:
- **Profile**: Personal info, photo, bio, social links, resume
- **Projects**: Portfolio projects with images, tech stack, and links
- **Skills**: Technical skills with categories and proficiency levels

## Deployment Options

### Vercel
1. Push to GitHub
2. Import to Vercel
3. Add environment variables
4. Deploy

### Netlify
1. Push to GitHub
2. Connect to Netlify
3. Add environment variables
4. Deploy

<!-- README_END -->