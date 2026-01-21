# Lucent International School Website

A modern, responsive website for Lucent International School located in Gopalganj, Bihar.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Complete School Profile**: All sections including Overview, Reviews, About, Services, Location, and Contact
- **Interactive Elements**: 
  - Smooth scrolling navigation
  - Contact form for admission enquiries
  - Social sharing buttons (WhatsApp, Facebook, Email)
  - Back to top button
- **SEO Friendly**: Proper meta tags and semantic HTML structure

## File Structure

```
School_Website/
├── index.html      # Main HTML file with all content
├── styles.css      # All styling and responsive design
├── script.js       # JavaScript for interactivity
└── README.md       # This file
```

## Getting Started

1. **Open the website**: Simply open `index.html` in any modern web browser
2. **No build process required**: This is a static website that works directly in the browser
3. **Customization**: Edit the HTML, CSS, or JavaScript files as needed

## Customization Guide

### Updating Contact Information
Edit the contact section in `index.html` (around line 400) to update:
- Phone numbers
- Email addresses
- Physical address

### Changing Colors
Edit the CSS variables in `styles.css` (at the top of the file):
```css
:root {
    --primary-color: #1e40af;
    --secondary-color: #3b82f6;
    --accent-color: #f59e0b;
    /* ... */
}
```

### Adding Photos
Replace the placeholder Google Maps embed with actual school photos or update the map coordinates:
- Edit the iframe `src` in the Location section
- Add image galleries by creating new sections in HTML

### Updating Content
All content is in `index.html`. Simply edit the text within the respective sections:
- Overview section
- Reviews section
- About section
- Services section
- Location section

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Features Breakdown

### Navigation
- Sticky navbar that stays at the top while scrolling
- Mobile hamburger menu for smaller screens
- Smooth scroll to sections

### Sections
1. **Hero**: Eye-catching landing section with call-to-action buttons
2. **Overview**: School introduction and key features
3. **Reviews**: Parent and student testimonials
4. **About**: Vision, Mission, Educational Philosophy
5. **Services**: Facilities and services offered
6. **Location**: Address, map, and school timings
7. **Contact**: Contact form and information
8. **Share**: Social sharing options

## Next Steps

To make this website live:

1. **Hosting Options**:
   - GitHub Pages (free)
   - Netlify (free)
   - Vercel (free)
   - Any web hosting service

2. **Domain**: Purchase a domain name (e.g., lucentinternationalschool.com)

3. **Google Maps**: Update the Google Maps embed with the exact school location coordinates

4. **Contact Form**: Connect the contact form to a backend service or email service like:
   - Formspree
   - EmailJS
   - Custom backend API

5. **Analytics**: Add Google Analytics or similar tracking

6. **Photos**: Add actual school photos to replace placeholders

## License

This website is created for Lucent International School.

## Support

For any questions or customization needs, please contact the school administration.

---

**Lucent International School**  
Hira Lal Tiwari More, Surwaniya  
Gopalganj, Bihar - 841243  
Timings: 8:00 AM - 2:30 PM
