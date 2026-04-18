// ========== NAVIGATION ==========
export const Navbar = ({ menuOpen, setMenuOpen, showAlert }) => (
  <nav className="navbar">
    <div className="logo">EMIRATES</div>
    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>☰</div>
    <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
      <a href="#" onClick={() => showAlert('Book page - Coming soon!')}>Book</a>
      <a href="#" onClick={() => showAlert('Manage page - Coming soon!')}>Manage</a>
      <a href="#" onClick={() => showAlert('Where We Fly - Coming soon!')}>Where We Fly</a>
      <a href="#" onClick={() => showAlert('Experience - Coming soon!')}>Experience</a>
      <a href="#" className="skywards-link" onClick={() => showAlert('⭐ Welcome to Emirates Skywards!')}>Skywards</a>
    </div>
  </nav>
);

// ========== HERO SEARCH ==========
export const HeroSearch = ({ showAlert }) => (
  <div className="hero-section">
    <div className="container">
      <div className="search-card">
        <h2>Book your flight</h2>
        <div className="search-grid">
          <div><label>From</label><select><option>Karachi (KHI)</option><option>Dubai (DXB)</option></select></div>
          <div><label>To</label><select><option>Dubai (DXB)</option><option>London (LHR)</option></select></div>
          <div><label>Departure</label><input type="date" /></div>
          <div><label>Return</label><input type="date" /></div>
        </div>
        <button className="btn-primary btn-full" onClick={() => showAlert('🔍 Searching for flights...')}>SEARCH FLIGHTS</button>
      </div>
    </div>
  </div>
);

// ========== FLIGHT STATUS ==========
export const FlightStatus = ({ showAlert }) => (
  <div className="section bg-light">
    <div className="container text-center">
      <h2>Flight Status</h2>
      <div className="status-flex">
        <input type="text" placeholder="Flight Number" className="status-input" />
        <input type="date" className="status-input" />
        <button className="btn-primary" onClick={() => showAlert('✈️ Checking flight status...')}>Check Status</button>
      </div>
    </div>
  </div>
);

// ========== SERVICES ==========
export const Services = ({ services, showAlert }) => (
  <div className="section bg-white">
    <div className="container">
      <div className="services-grid">
        {services.map(service => (
          <div key={service.name} className="service-icon" onClick={() => showAlert(`${service.name} - Coming soon!`)}>
            <span>{service.emoji}</span><br />{service.name}
          </div>
        ))}
      </div>
    </div>
  </div>
);

// ========== WHY FLY EMIRATES ==========
export const WhyFly = () => (
  <div className="section bg-light">
    <div className="container text-center">
      <h2>Why fly with Emirates?</h2>
      <p className="subtitle">Experience the difference with our award-winning service</p>
      <div className="features-grid">
        <div><div className="feature-icon">🌍</div><h3>Global Network</h3><p>150+ destinations</p></div>
        <div><div className="feature-icon">✨</div><h3>Award-winning Service</h3><p>World-class hospitality</p></div>
        <div><div className="feature-icon">📱</div><h3>Connectivity</h3><p>Onboard WiFi</p></div>
      </div>
    </div>
  </div>
);

// ========== SPECIAL OFFERS ==========
export const Offers = ({ offers, handleBooking }) => (
  <div className="section bg-offer">
    <div className="container">
      <h2 className="text-center">🔥 Special Offers</h2>
      <div className="offers-grid">
        {offers.map(offer => (
          <div key={offer.id} className="offer-card">
            <span className="offer-emoji">{offer.emoji}</span>
            <h3>{offer.destination} {offer.sale}</h3>
            <p className="offer-price">{offer.price}</p>
            <p>Round trip including taxes</p>
            <button className="btn-primary btn-small" onClick={() => handleBooking('Offer', offer.destination, offer.price)}>Book Now</button>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// ========== CABIN CLASSES ==========
export const Cabins = ({ cabins, handleBooking }) => (
  <div className="section bg-white">
    <div className="container">
      <h2 className="text-center">Our Cabins</h2>
      <div className="cabins-grid">
        {cabins.map(cabin => (
          <div key={cabin.id} className="cabin-card">
            <div className={`cabin-icon ${cabin.color}`}>{cabin.icon}</div>
            <div className="cabin-content">
              <h3>{cabin.name}</h3>
              <p>{cabin.desc}</p>
              <p className="cabin-price">From {cabin.price}</p>
              <button className="btn-primary btn-small" onClick={() => handleBooking('Cabin', cabin.name, cabin.price)}>Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// ========== FEATURED DESTINATIONS ==========
export const Destinations = ({ destinations, handleBooking }) => (
  <div className="section bg-light">
    <div className="container">
      <h2 className="text-center">Featured Destinations</h2>
      <div className="destinations-grid">
        {destinations.map(dest => (
          <div key={dest.id} className="card">
            <div className="card-image" style={{ background: '#ccc', height: '200px' }}></div>
            <div className="card-content">
              <h3>{dest.name}</h3>
              <p>{dest.country}</p>
              <p className="price">from {dest.price}</p>
              <button className="btn-primary btn-small" onClick={() => handleBooking('Destination', dest.name, dest.price)}>Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// ========== CUSTOMER REVIEWS ==========
export const Reviews = ({ reviews }) => (
  <div className="section bg-white">
    <div className="container">
      <h2 className="text-center">What Our Customers Say</h2>
      <div className="reviews-grid">
        {reviews.map(review => (
          <div key={review.id} className="review-card">
            <span className="stars">{review.rating}</span>
            <p>"{review.text}"</p>
            <h4>- {review.name}</h4>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// ========== SKYWARDS MEMBERSHIP ==========
export const SkywardsSection = ({ showAlert }) => (
  <div className="section skywards-section">
    <div className="container skywards-flex">
      <div>
        <h2>Join Emirates Skywards</h2>
        <p>Earn Miles, get rewards, and enjoy exclusive benefits</p>
        <button className="btn-gold" onClick={() => showAlert('⭐ Welcome to Emirates Skywards! Join for free.')}>Join for free</button>
      </div>
      <div className="skywards-star">⭐</div>
    </div>
  </div>
);

// ========== SKYWARDS TIERS ==========
export const Tiers = ({ tiers, showAlert }) => (
  <div className="section bg-light">
    <div className="container">
      <h2 className="text-center">Skywards Membership Tiers</h2>
      <div className="tiers-grid">
        {tiers.map(tier => (
          <div key={tier.id} className="tier-card" onClick={() => showAlert(`${tier.name} Tier: ${tier.benefit}`)}>
            <h3>{tier.name}</h3>
            <p>{tier.miles}</p>
            <p className="tier-price">{tier.benefit}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// ========== MOBILE APP BANNER ==========
export const AppBanner = ({ showAlert }) => (
  <div className="section app-banner">
    <div className="container app-flex">
      <div>
        <h2>Download the Emirates App</h2>
        <p>Manage your booking on the go</p>
        <div className="app-buttons">
          <button className="btn-white" onClick={() => showAlert('📱 App Store - Coming soon!')}>App Store</button>
          <button className="btn-white" onClick={() => showAlert('📱 Google Play - Coming soon!')}>Google Play</button>
        </div>
      </div>
      <div className="app-icon">📱</div>
    </div>
  </div>
);

// ========== NEWSLETTER ==========
export const Newsletter = ({ showAlert }) => (
  <div className="section newsletter">
    <div className="container text-center">
      <h2>Subscribe to Our Newsletter</h2>
      <p>Get exclusive offers straight to your inbox</p>
      <div className="newsletter-flex">
        <input type="email" placeholder="Your email address" className="newsletter-input" />
        <button className="btn-primary" onClick={() => showAlert('📧 Thanks for subscribing!')}>Subscribe</button>
      </div>
    </div>
  </div>
);

// ========== FOOTER ==========
export const Footer = ({ showAlert }) => (
  <footer className="footer">
    <div className="container footer-grid">
      <div><h3>About Emirates</h3><p>We connect people and places across the globe.</p></div>
      <div><h3>Quick Links</h3><p onClick={() => showAlert('Flight Status info')} style={{cursor:'pointer'}}>Flight Status</p></div>
      <div><h3>Connect</h3><p onClick={() => showAlert('Facebook page')} style={{cursor:'pointer'}}>Facebook</p></div>
      <div><h3>Download App</h3><p onClick={() => showAlert('📱 App - Coming soon!')} style={{cursor:'pointer'}}>Get the app</p></div>
    </div>
    <div className="footer-bottom"><p>© 2024 Emirates. All rights reserved.</p></div>
  </footer>
);