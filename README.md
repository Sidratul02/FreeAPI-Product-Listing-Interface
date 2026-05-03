# 🛍️ ShopFree — FreeAPI Product Listing Interface

A product listing interface built with React + Vite, powered by the [FreeAPI](https://freeapi.app) random products endpoint.

## Features

- Fetches 20 products from `https://api.freeapi.app/api/v1/public/randomproducts`
- Responsive product grid (auto-fill, min 260px per card)
- Dark mode UI with glassmorphism navbar
- Discount badge and discounted price calculation
- Stock indicator (low stock warning)
- Star rating display
- Smart image fallback — shows a styled CSS placeholder when the product thumbnail fails to load
- Spinner loading state and error handling

## Tech Stack

- React 19
- Vite 8
- Plain CSS (no UI library)

## Getting Started

```bash
npm install
npm run dev
```

Then open `http://localhost:5173` in your browser.

## API

**Endpoint:** `GET https://api.freeapi.app/api/v1/public/randomproducts?limit=20`

Each product includes: `id`, `title`, `description`, `price`, `discountPercentage`, `rating`, `stock`, `brand`, `category`, `thumbnail`.

## Project Structure

```
src/
├── App.jsx       # Main component (ProductImage, StarRating, App)
├── App.css       # All styles
├── index.css     # Box-sizing reset
└── main.jsx      # React entry point
```
