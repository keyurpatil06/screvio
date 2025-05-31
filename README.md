# Screvio – Screen Recording & Video Sharing Platform

## Description  
Screvio is a full-stack screen recording and video sharing platform. Built with Next.js and Bunny.net, it enables users to record their screen, upload videos, and share them via unique links. It supports public/private video settings, AI-generated transcripts, metadata access, and a powerful search system for efficient content discovery.

## Features  

**Authentication:** Secure user authentication via Better Auth and Google OAuth  
**Screen Recording:** Capture screen directly in the browser  
**Video Uploading:** Upload and manage videos with public/private settings  
**Video Sharing:** Share videos via unique, accessible links  
**AI Transcripts:** Generate searchable AI-powered transcripts for uploaded videos  
**Privacy Controls:** Set videos as public or private  
**Security:** Arcjet integration for bot protection, email validation, and rate limiting  
**Search Functionality:** Find videos quickly using the built-in search bar  
**Metadata Access:** View video metadata such as video ID and URL  

## Tech Stack  

### Core  
- **Next.js:** Full-stack React framework  
- **TypeScript:** Static typing for scalable applications  
- **Tailwind CSS:** Utility-first CSS framework  

### Authentication & Security  
- **Better Auth:** TypeScript-first auth 
- **Arcjet:** Bot protection, rate limiting, and email validation  

### Video Management  
- **Bunny.net:** Global CDN, edge storage, adaptive streaming  
- **Xata:** PostgreSQL with full-text search and real-time branching  

### ORM & Queries  
- **Drizzle ORM:** Type-safe SQL ORM with migrations and schema management  

---