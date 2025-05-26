# 🔁 Repeating Image Transition Gallery (React Clone)

This project is a ** React clone** of the [Codrops Repeating Image Transition Demo](https://tympanus.net/codrops/?p=92571). It recreates the layout,  transitions, and gallery navigation using modern React and Tailwind CSS with proper routing and minimal but effective state management.

---

## 🖼️ What Does It Do?

- Displays multiple image galleries with hover effects.
- Clicking an image opens a **full-screen detail view** with the image and its metadata.
- Includes a responsive navbar, footer, and layout consistent with the Codrops demo.
- Smooth animations and image transitions using CSS.
- Section-based layout with auto-scroll feature.

---

## 🔧 Technologies Used

| Technology | Description |
|------------|-------------|
| React      | UI component library |
| React Router DOM | Handles routing for image detail views |
| Tailwind CSS | Utility-first CSS framework |
| JavaScript (ES6) | Logic and dynamic behavior |
| HTML5       | Markup structure |

---

## 🧱 Folder Structure

src/
├── components/
│ ├── Navbar.jsx # Top navigation with external links and branding
│ ├── GallerySection.jsx # Individual gallery blocks
│ ├── ImageDetail.jsx # Full-screen image view on click
│ └── Footer.jsx # Bottom credits
│
├── data/
│ └── images.js # Contains gallery image data
│
├── App.jsx # Routes and page structure
├── index.js # ReactDOM entry
└── styles/
└── index.css # Tailwind + custom animations

---

## 📦 Installation

```bash
git clone https://github.com/your-username/repeating-image-transition
cd repeating-image-transition
npm install
npm start