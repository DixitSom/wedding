# 💑 Rohan & Neha's Wedding Website 💑

A beautiful, animated wedding website with personalized invitations!

## ✨ Features

- 🎨 Beautiful gradient design with animations
- 💌 Personalized invitation messages via URL parameters
- 📅 Wedding date and venue information
- 🖼️ Photo gallery section
- ⏰ Event schedule timeline
- 📧 RSVP functionality
- 📱 Fully responsive design
- ✨ Interactive animations and effects

## 🚀 How to Use

### Personalized Invitations

You can send personalized invitations by adding a `name` parameter to the URL:

```
https://dixitsom.github.io/wedding/?name=Rohan Dixit
```

This will display: **"Rohan Dixit, you are invited to Rohan and Neha's Wedding!"**

### Examples:
- `?name=John Smith` → "John Smith, you are invited to..."
- `?name=Sarah Johnson` → "Sarah Johnson, you are invited to..."
- `?name=The Anderson Family` → "The Anderson Family, you are invited to..."

## 🌐 GitHub Pages Deployment

To deploy this website to GitHub Pages:

1. Go to your repository settings
2. Navigate to "Pages" in the left sidebar
3. Under "Source", select the branch you want to deploy (usually `main` or `master`)
4. Select the root folder `/` as the source
5. Click "Save"
6. Your website will be available at: `https://dixitsom.github.io/wedding/`

## 📝 Customization

### Update Wedding Details

Edit `index.html` to customize:
- Couple names (lines 19-20)
- Wedding date (line 36)
- Venue information (lines 40-44)
- Schedule times (lines 108, 116, 124)
- Contact information (lines 155-157)

### Update Styling

Edit `styles.css` to customize:
- Colors (CSS variables at the top)
- Fonts (Google Fonts imports)
- Animations and transitions

### Update Functionality

Edit `script.js` to customize:
- Personalization logic
- Countdown timer
- Animation effects

## 📸 Adding Photos

Replace the photo placeholders in the gallery section by:
1. Adding your images to an `images` folder
2. Updating the `.photo-placeholder` divs with `<img>` tags:

```html
<div class="gallery-item zoom-in">
    <img src="images/photo1.jpg" alt="Our First Meet">
</div>
```

## 🎨 Color Scheme

The website uses a romantic purple gradient theme with gold accents:
- Primary: `#d4af37` (Gold)
- Gradient: `#667eea` to `#764ba2` (Purple)
- Accent: `#e6b8b8` (Rose)

## 📱 Browser Support

Works on all modern browsers:
- Chrome
- Firefox
- Safari
- Edge

## 💌 Contact

For questions about the wedding, please contact:
- 📧 Email: rohan.neha.wedding@example.com
- 📞 Phone: +91 9876543210

## ❤️ Made with Love

Created with love for Rohan & Neha's special day!
