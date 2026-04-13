import dubaiImage from './assets/510x340.jpg'
import londonImage from './assets/510x340 (1).jpg'
import newyorkImage from './assets/510x340 (2).jpg'
import maldivesImage from './assets/510x340 (3).jpg'
import a380Image from './assets/a380-sky-view-w300x300.jpg'

function App() {
  return (
    <div>
      {/* Top Banner */}
      <div style={{ background: '#1a1a1a', color: '#c49a6c', padding: '10px', textAlign: 'center', fontSize: '13px' }}>
        ✈️ ENJOY FLEXIBLE TRAVEL WITH <strong style={{ color: '#d71920' }}>FREE DATE CHANGE</strong> ON ALL NEW TICKETS
      </div>

      {/* Navigation Bar */}
      <nav style={{ background: 'white', padding: '15px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', position: 'sticky', top: 0, zIndex: 1000 }}>
        <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#d71920' }}>EMIRATES</div>
        <div style={{ display: 'flex', gap: '30px' }}>
          <a href="#" style={{ textDecoration: 'none', color: '#333' }}>Book</a>
          <a href="#" style={{ textDecoration: 'none', color: '#333' }}>Manage</a>
          <a href="#" style={{ textDecoration: 'none', color: '#333' }}>Where We Fly</a>
          <a href="#" style={{ textDecoration: 'none', color: '#333' }}>Experience</a>
          <a href="#" style={{ textDecoration: 'none', color: '#d71920', fontWeight: 'bold' }}>Skywards</a>
        </div>
      </nav>

      {/* Hero Section with Flight Search */}
      <div style={{ 
        background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '550px',
        display: 'flex',
        alignItems: 'center',
        padding: '40px'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
          <div style={{ background: 'white', borderRadius: '12px', padding: '35px', boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }}>
            <h2 style={{ marginBottom: '25px', color: '#333' }}>Book your flight</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>From</label>
                <select style={{ width: '100%', padding: '14px', border: '1px solid #ddd', borderRadius: '5px' }}>
                  <option>Karachi (KHI)</option>
                  <option>Islamabad (ISB)</option>
                  <option>Lahore (LHE)</option>
                  <option>Dubai (DXB)</option>
                </select>
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>To</label>
                <select style={{ width: '100%', padding: '14px', border: '1px solid #ddd', borderRadius: '5px' }}>
                  <option>Dubai (DXB)</option>
                  <option>London (LHR)</option>
                  <option>New York (JFK)</option>
                  <option>Toronto (YYZ)</option>
                </select>
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Departure</label>
                <input type="date" style={{ width: '100%', padding: '14px', border: '1px solid #ddd', borderRadius: '5px' }} />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>Return</label>
                <input type="date" style={{ width: '100%', padding: '14px', border: '1px solid #ddd', borderRadius: '5px' }} />
              </div>
            </div>
            <button style={{ marginTop: '25px', background: '#d71920', color: 'white', border: 'none', padding: '14px', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer', width: '100%' }}>
              SEARCH FLIGHTS
            </button>
          </div>
        </div>
      </div>

      {/* Flight Status Section - NEW */}
      <div style={{ padding: '40px', background: '#f0f0f0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ marginBottom: '30px' }}>Flight Status</h2>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <input type="text" placeholder="Flight Number" style={{ padding: '12px', width: '200px', borderRadius: '5px', border: '1px solid #ddd' }} />
            <input type="date" style={{ padding: '12px', borderRadius: '5px', border: '1px solid #ddd' }} />
            <button style={{ background: '#d71920', color: 'white', padding: '12px 30px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Check Status</button>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div style={{ padding: '50px 40px', background: '#f8f8f8' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '20px', textAlign: 'center' }}>
          <div><span style={{ fontSize: '35px' }}>🏨</span><br />Hotels</div>
          <div><span style={{ fontSize: '35px' }}>🚗</span><br />Car rentals</div>
          <div><span style={{ fontSize: '35px' }}>🎯</span><br />Tours</div>
          <div><span style={{ fontSize: '35px' }}>📅</span><br />Holidays</div>
          <div><span style={{ fontSize: '35px' }}>🏙️</span><br />Dubai Exp</div>
          <div><span style={{ fontSize: '35px' }}>🚙</span><br />Chauffeur</div>
        </div>
      </div>

      {/* Why Fly Emirates */}
      <div style={{ padding: '60px 40px', background: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '32px', marginBottom: '15px' }}>Why fly with Emirates?</h2>
          <p style={{ color: '#666', marginBottom: '40px' }}>Experience the difference with our award-winning service</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px' }}>
            <div>
              <div style={{ fontSize: '50px' }}>🌍</div>
              <h3>Global Network</h3>
              <p style={{ color: '#666' }}>150+ destinations across 6 continents</p>
            </div>
            <div>
              <div style={{ fontSize: '50px' }}>✨</div>
              <h3>Award-winning Service</h3>
              <p style={{ color: '#666' }}>World-class hospitality and comfort</p>
            </div>
            <div>
              <div style={{ fontSize: '50px' }}>📱</div>
              <h3>Seamless Connectivity</h3>
              <p style={{ color: '#666' }}>Stay connected with onboard WiFi</p>
            </div>
          </div>
        </div>
      </div>

      {/* Special Offers Section - NEW */}
      <div style={{ padding: '60px 40px', background: '#fff3e0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>🔥 Special Offers</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '25px' }}>
            <div style={{ background: 'white', borderRadius: '10px', padding: '20px', textAlign: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
              <span style={{ fontSize: '40px' }}>🇦🇪</span>
              <h3>Dubai Summer Sale</h3>
              <p style={{ color: '#d71920', fontSize: '24px', fontWeight: 'bold' }}>$399</p>
              <p>Round trip including taxes</p>
              <button style={{ marginTop: '15px', background: '#d71920', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Book Now</button>
            </div>
            <div style={{ background: 'white', borderRadius: '10px', padding: '20px', textAlign: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
              <span style={{ fontSize: '40px' }}>🇬🇧</span>
              <h3>London Winter Sale</h3>
              <p style={{ color: '#d71920', fontSize: '24px', fontWeight: 'bold' }}>$499</p>
              <p>Limited time offer</p>
              <button style={{ marginTop: '15px', background: '#d71920', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Book Now</button>
            </div>
            <div style={{ background: 'white', borderRadius: '10px', padding: '20px', textAlign: 'center', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
              <span style={{ fontSize: '40px' }}>🇺🇸</span>
              <h3>New York Flash Sale</h3>
              <p style={{ color: '#d71920', fontSize: '24px', fontWeight: 'bold' }}>$599</p>
              <p>Book by April 30</p>
              <button style={{ marginTop: '15px', background: '#d71920', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Book Now</button>
            </div>
          </div>
        </div>
      </div>

      {/* Cabin Classes Section - NEW */}
      <div style={{ padding: '60px 40px', background: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Our Cabins</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '25px' }}>
            <div style={{ background: '#f8f8f8', borderRadius: '10px', overflow: 'hidden' }}>
              <div style={{ height: '200px', background: '#1a1a1a', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '50px' }}>💺</div>
              <div style={{ padding: '20px' }}>
                <h3>Economy Class</h3>
                <p>Comfortable seats, delicious meals, and award-winning entertainment</p>
                <p style={{ color: '#d71920', fontWeight: 'bold', marginTop: '10px' }}>From $499</p>
              </div>
            </div>
            <div style={{ background: '#f8f8f8', borderRadius: '10px', overflow: 'hidden' }}>
              <div style={{ height: '200px', background: '#2d2d2d', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '50px' }}>✨</div>
              <div style={{ padding: '20px' }}>
                <h3>Business Class</h3>
                <p>Lie-flat seats, gourmet dining, and lounge access</p>
                <p style={{ color: '#d71920', fontWeight: 'bold', marginTop: '10px' }}>From $2,499</p>
              </div>
            </div>
            <div style={{ background: '#f8f8f8', borderRadius: '10px', overflow: 'hidden' }}>
              <div style={{ height: '200px', background: '#c49a6c', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '50px' }}>👑</div>
              <div style={{ padding: '20px' }}>
                <h3>First Class</h3>
                <p>Private suite, shower spa, and exclusive chauffeur service</p>
                <p style={{ color: '#d71920', fontWeight: 'bold', marginTop: '10px' }}>From $6,999</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Destinations */}
      <div style={{ padding: '60px 40px', background: '#f8f8f8' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: '32px', marginBottom: '40px' }}>Featured Destinations</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '25px' }}>
            <div style={{ background: 'white', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
              <img src={dubaiImage} alt="Dubai" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <div style={{ padding: '15px' }}>
                <h3>Dubai</h3>
                <p style={{ color: '#666' }}>United Arab Emirates</p>
                <p style={{ color: '#d71920', fontWeight: 'bold' }}>from $499</p>
              </div>
            </div>
            <div style={{ background: 'white', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
              <img src={londonImage} alt="London" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <div style={{ padding: '15px' }}>
                <h3>London</h3>
                <p style={{ color: '#666' }}>United Kingdom</p>
                <p style={{ color: '#d71920', fontWeight: 'bold' }}>from $599</p>
              </div>
            </div>
            <div style={{ background: 'white', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
              <img src={newyorkImage} alt="New York" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <div style={{ padding: '15px' }}>
                <h3>New York</h3>
                <p style={{ color: '#666' }}>United States</p>
                <p style={{ color: '#d71920', fontWeight: 'bold' }}>from $699</p>
              </div>
            </div>
            <div style={{ background: 'white', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
              <img src={maldivesImage} alt="Maldives" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <div style={{ padding: '15px' }}>
                <h3>Maldives</h3>
                <p style={{ color: '#666' }}>Maldives</p>
                <p style={{ color: '#d71920', fontWeight: 'bold' }}>from $799</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Customer Reviews - NEW */}
      <div style={{ padding: '60px 40px', background: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>What Our Customers Say</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
            <div style={{ textAlign: 'center', padding: '20px' }}>
              <span style={{ fontSize: '50px' }}>⭐⭐⭐⭐⭐</span>
              <p style={{ marginTop: '15px', fontStyle: 'italic' }}>"Amazing service! The crew was fantastic and the flight was comfortable."</p>
              <h4 style={{ marginTop: '15px', color: '#d71920' }}>- Sarah Ahmed</h4>
            </div>
            <div style={{ textAlign: 'center', padding: '20px' }}>
              <span style={{ fontSize: '50px' }}>⭐⭐⭐⭐⭐</span>
              <p style={{ marginTop: '15px', fontStyle: 'italic' }}>"Best airline experience ever! The entertainment system is incredible."</p>
              <h4 style={{ marginTop: '15px', color: '#d71920' }}>- John Smith</h4>
            </div>
            <div style={{ textAlign: 'center', padding: '20px' }}>
              <span style={{ fontSize: '50px' }}>⭐⭐⭐⭐⭐</span>
              <p style={{ marginTop: '15px', fontStyle: 'italic' }}>"The food was delicious and the seats were very comfortable. Highly recommend!"</p>
              <h4 style={{ marginTop: '15px', color: '#d71920' }}>- Maria Khan</h4>
            </div>
          </div>
        </div>
      </div>

      {/* Skywards Membership */}
      <div style={{ padding: '60px 40px', background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)', color: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
          <div>
            <h2 style={{ fontSize: '32px', marginBottom: '15px' }}>Join Emirates Skywards</h2>
            <p style={{ fontSize: '18px', marginBottom: '20px' }}>Earn Miles, get rewards, and enjoy exclusive benefits</p>
            <button style={{ background: '#c49a6c', color: '#1a1a1a', border: 'none', padding: '14px 32px', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer' }}>
              Join for free
            </button>
          </div>
          <div style={{ fontSize: '80px' }}>⭐</div>
        </div>
      </div>

      {/* Skywards Tiers - NEW */}
      <div style={{ padding: '60px 40px', background: '#f8f8f8' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Skywards Membership Tiers</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
            <div style={{ background: 'white', padding: '20px', textAlign: 'center', borderRadius: '10px' }}>
              <h3>Blue</h3>
              <p>Entry Level</p>
              <p style={{ color: '#d71920', fontWeight: 'bold' }}>Free</p>
            </div>
            <div style={{ background: 'white', padding: '20px', textAlign: 'center', borderRadius: '10px' }}>
              <h3>Silver</h3>
              <p>25,000 Miles</p>
              <p style={{ color: '#d71920', fontWeight: 'bold' }}>+ Lounge Access</p>
            </div>
            <div style={{ background: 'white', padding: '20px', textAlign: 'center', borderRadius: '10px' }}>
              <h3>Gold</h3>
              <p>50,000 Miles</p>
              <p style={{ color: '#d71920', fontWeight: 'bold' }}>+ Priority Boarding</p>
            </div>
            <div style={{ background: 'white', padding: '20px', textAlign: 'center', borderRadius: '10px' }}>
              <h3>Platinum</h3>
              <p>100,000 Miles</p>
              <p style={{ color: '#d71920', fontWeight: 'bold' }}>+ First Class Lounge</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile App Banner - NEW */}
      <div style={{ padding: '60px 40px', background: '#d71920', color: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
          <div>
            <h2 style={{ fontSize: '32px', marginBottom: '15px' }}>Download the Emirates App</h2>
            <p style={{ fontSize: '18px' }}>Manage your booking, check in, and get real-time flight updates</p>
            <div style={{ display: 'flex', gap: '15px', marginTop: '20px' }}>
              <button style={{ background: 'white', color: '#d71920', padding: '12px 25px', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}>App Store</button>
              <button style={{ background: 'white', color: '#d71920', padding: '12px 25px', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}>Google Play</button>
            </div>
          </div>
          <div style={{ fontSize: '80px' }}>📱</div>
        </div>
      </div>

      {/* Newsletter Signup - NEW */}
      <div style={{ padding: '60px 40px', background: '#1a1a1a', color: 'white' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ marginBottom: '15px' }}>Subscribe to Our Newsletter</h2>
          <p>Get exclusive offers and travel inspiration straight to your inbox</p>
          <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
            <input type="email" placeholder="Your email address" style={{ flex: 1, padding: '12px', borderRadius: '5px', border: 'none' }} />
            <button style={{ background: '#d71920', color: 'white', padding: '12px 25px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Subscribe</button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ background: '#0d0d0d', color: '#999', padding: '50px 40px 30px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '30px' }}>
          <div>
            <h3 style={{ color: 'white', marginBottom: '15px' }}>About Emirates</h3>
            <p style={{ fontSize: '14px' }}>We connect people and places across the globe with award-winning service.</p>
          </div>
          <div>
            <h3 style={{ color: 'white', marginBottom: '15px' }}>Quick Links</h3>
            <p style={{ fontSize: '14px', marginBottom: '8px' }}>Flight Status</p>
            <p style={{ fontSize: '14px', marginBottom: '8px' }}>Baggage Information</p>
            <p style={{ fontSize: '14px' }}>Special Assistance</p>
          </div>
          <div>
            <h3 style={{ color: 'white', marginBottom: '15px' }}>Connect</h3>
            <p style={{ fontSize: '14px', marginBottom: '8px' }}>Facebook</p>
            <p style={{ fontSize: '14px', marginBottom: '8px' }}>Instagram</p>
            <p style={{ fontSize: '14px' }}>Twitter</p>
          </div>
          <div>
            <h3 style={{ color: 'white', marginBottom: '15px' }}>Download App</h3>
            <p style={{ fontSize: '14px' }}>Manage your booking on the go</p>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: '40px', paddingTop: '20px', borderTop: '1px solid #333' }}>
          <p style={{ fontSize: '12px' }}>© 2024 Emirates. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default App