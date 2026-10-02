Add your real photos here (hero, about/lifestyle, product shots, catalogue
cover), then swap the picsum.photos placeholder URLs in these files for
local paths like "/images/your-photo.jpg":

  src/components/Hero.tsx
  src/components/About.tsx
  src/components/Products.tsx   (inside the PRODUCTS array)
  src/components/Catalogue.tsx

Keep the same aspect ratios already set (4:5 for hero/about/products,
3:4 for the catalogue cover) so nothing gets distorted or cropped oddly.
