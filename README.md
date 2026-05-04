# ShopFree 

![alt text](<Screenshot (271).png>)

A paginated product listing interface built with React + Vite, styled in a pastel pink and yellow theme, powered by the [FreeAPI](https://freeapi.app) random products endpoint.



## Features

- Fetches products from `https://api.freeapi.app/api/v1/public/randomproducts`
- Paginated — 10 products per page with smart pagination controls
- Responsive product grid (auto-fill, min 260px per card)
- Pastel pink & yellow theme with soft card design
- Glassmorphism sticky navbar with logo, nav links, search, wishlist and cart
- Discount badge with pink-to-yellow gradient
- Discounted price calculation with original price crossed out
- Stock indicator — warns when stock is low
- Star rating display
- CSS placeholder cards when product thumbnails fail to load (unique color per product)
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

**Endpoint:** `GET https://api.freeapi.app/api/v1/public/randomproducts?page=1&limit=10`

**Response fields used:** `id`, `title`, `description`, `price`, `discountPercentage`, `rating`, `stock`, `brand`, `category`, `thumbnail`

> Note: Product thumbnail URLs from the API (`cdn.dummyjson.com`) are currently returning 404. The app handles this gracefully with styled CSS placeholder cards.

## Project Structure

```
src/
├── App.jsx       # Components: ProductImage, StarRating, App
├── App.css       # All styles
├── index.css     # Box-sizing reset
└── main.jsx      # React entry point
```
