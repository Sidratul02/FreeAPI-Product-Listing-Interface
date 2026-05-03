import { useEffect, useState } from 'react'
import './App.css'

const COLORS = [
  ['#1e1b4b','#4f46e5'],['#1a1a2e','#7c3aed'],['#0f2027','#0ea5e9'],
  ['#1a0a2e','#a855f7'],['#0d1f2d','#06b6d4'],['#1f1a0e','#f59e0b'],
  ['#1a0e0e','#ef4444'],['#0e1a0e','#22c55e'],
]

function ProductImage({ product }) {
  const [failed, setFailed] = useState(false)
  const [bg, accent] = COLORS[product.id % COLORS.length]
  if (!failed) return (
    <img
      src={product.thumbnail}
      alt={product.title}
      onError={() => setFailed(true)}
    />
  )
  return (
    <div className="placeholder" style={{ background: `linear-gradient(135deg, ${bg}, ${accent}22)` }}>
      <div className="placeholder-icon" style={{ color: accent }}>🛍️</div>
      <div className="placeholder-category" style={{ color: accent }}>{product.category}</div>
      <div className="placeholder-title">{product.title}</div>
    </div>
  )
}


function StarRating({ rating }) {
  return (
    <div className="stars">
      {[1, 2, 3, 4, 5].map(i => (
        <span key={i} className={i <= Math.round(rating) ? 'star filled' : 'star'}>★</span>
      ))}
      <span className="rating-num">{rating}</span>
    </div>
  )
}

function App() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('https://api.freeapi.app/api/v1/public/randomproducts?limit=20')
      .then(res => res.json())
      .then(data => setProducts(data.data?.data || []))
      .catch(() => setError('Failed to fetch products'))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return (
    <div className="status">
      <div className="spinner" />
      <p>Loading products...</p>
    </div>
  )

  if (error) return <div className="status error">⚠️ {error}</div>

  return (
    <div className="page">
      <header>
        <div className="header-inner">
          <div className="logo">
            <span className="logo-icon">🛍️</span>
            <span className="logo-text">Shop<span className="logo-accent">Free</span></span>
          </div>
          <nav className="nav-links">
            <a href="#">Home</a>
            <a href="#">Categories</a>
            <a href="#">Deals</a>
            <a href="#">About</a>
          </nav>
          <div className="nav-actions">
            <button className="icon-btn" title="Search">🔍</button>
            <button className="icon-btn" title="Wishlist">🤍</button>
            <button className="icon-btn cart-btn" title="Cart">
              🛒 <span className="cart-count">{products.length}</span>
            </button>
          </div>
        </div>
      </header>

      <main className="container">
        <div className="grid">
          {products.map(product => {
            const discounted = +(product.price * (1 - product.discountPercentage / 100)).toFixed(2)
            return (
              <div key={product.id} className="card">
                <div className="img-wrap">
                  <ProductImage product={product} />
                  {product.discountPercentage > 0 && (
                    <span className="badge">-{Math.round(product.discountPercentage)}%</span>
                  )}
                  <span className={`stock ${product.stock < 10 ? 'low' : ''}`}>
                    {product.stock < 10 ? `Only ${product.stock} left` : 'In Stock'}
                  </span>
                </div>

                <div className="info">
                  <span className="category">{product.category}</span>
                  <h2>{product.title}</h2>
                  <p className="brand">by {product.brand}</p>
                  <p className="desc">{product.description}</p>

                  <StarRating rating={product.rating} />

                  <div className="footer">
                    <div className="prices">
                      <span className="price">${discounted}</span>
                      {product.discountPercentage > 0 && (
                        <span className="original">${product.price}</span>
                      )}
                    </div>
                    <button className="btn">Add to Cart</button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </main>
    </div>
  )
}

export default App
