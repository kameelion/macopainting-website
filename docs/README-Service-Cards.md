# ✅ `service-cards.css` – Final README for Cline

📁 **File Location:**  
`src/styles/service-cards.css`

---

## 🛠️ Module Name:

**MACO PAINTING – SERVICE CARD MODULE (TIER 3: VOLCANIC POLISH FINAL)**

---

## ✅ Key Features Implemented:

- 🟨 **Grid Layout**

  - Responsive 3-column grid (auto-fit, min-width: 280px)
  - Max container width: 1440px
  - Centered on screen with ample padding

- 🟨 **Card Styling**

  - Ivory engraved icons in center
  - Text label beneath icon
  - Matte-black background

- 🟨 **Hover & Press Effects**

  - Hover: subtle **volcanic red glow** around card + image glow
  - Active (press): deeper pressed-in glow effect
  - Smooth transitions enabled (0.3s ease)

- 🟨 **Blue Underline Removal**

  - `text-decoration: none !important` and `color: inherit` added to `.service-card` links
  - Ensures no unwanted underlines or color shifts

- 🟨 **Mobile + Tablet Optimization**

  - Tablet: 2 columns (max-width: 768px)
  - Mobile: 1 column (max-width: 480px)
  - Cards and labels scale down appropriately

- 🟨 **Accessibility Enhancements**

  - Focus ring: subtle red-orange glow on keyboard nav
  - Cards are keyboard-accessible with clear feedback

- 🟨 **Dark-Mode Friendly**
  - Built on pure black background
  - Ivory elements ensure high contrast and clarity

---

## 🧱 Class Structure Summary

```html
<a href="/some-service" class="service-card">
  <div class="card-content">
    <img src="/images/icons/service-icon.webp" alt="Service" />
    <div class="service-label">Service Name</div>
  </div>
</a>
```

---

## 🧼 Styling Notes

- Icon size: `230px x 230px`
- Card max width: `280px`
- Text font: `"Playfair Display", serif`
- Use `.service-card` class on anchor tags wrapping icons
- Image files must be centered and consistent size for layout integrity

---

## 🚀 Status:

✅ **Final polish complete**  
🧼 **Production-ready**  
🧠 **Cline: Safe to reuse or replicate across future service grids**
