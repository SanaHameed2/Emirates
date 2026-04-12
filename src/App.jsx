function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* Top Banner */}
      <div style={{ background: '#1a1a1a', color: 'white', padding: '10px', textAlign: 'center', fontSize: '14px' }}>
        ✈️ Enjoy flexible travel with <strong>FREE DATE CHANGE</strong> on all new tickets
      </div>

      {/* Navigation Bar */}
      <nav style={{ background: '#d71920', padding: '15px 40px', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
        <div style={{ fontSize: '24px', fontWeight: 'bold' }}>EMIRATES</div>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          <span style={{ cursor: 'pointer' }}>Search flights</span>
          <span style={{ cursor: 'pointer' }}>Manage booking / Check in</span>
          <span style={{ cursor: 'pointer' }}>What's on your flight</span>
          <span style={{ cursor: 'pointer' }}>Flight status</span>
        </div>
      </nav>

      {/* Hero Section with Flight Search */}
      <div style={{ background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)', padding: '50px 40px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', background: 'white', borderRadius: '15px', padding: '30px' }}>
          <h2 style={{ marginBottom: '20px', color: '#333' }}>Search flights</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr auto', gap: '20px' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Departure airport</label>
              <select style={{ width: '100%', padding: '12px', borderRadius: '5px', border: '1px solid #ddd' }}>
                <option>Karachi (KHI)</option>
                <option>Islamabad (ISB)</option>
                <option>Lahore (LHE)</option>
                <option>Dubai (DXB)</option>
              </select>
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Arrival airport</label>
              <select style={{ width: '100%', padding: '12px', borderRadius: '5px', border: '1px solid #ddd' }}>
                <option>Dubai (DXB)</option>
                <option>London (LHR)</option>
                <option>New York (JFK)</option>
                <option>Karachi (KHI)</option>
              </select>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-end' }}>
              <button style={{ padding: '12px 40px', background: '#d71920', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}>
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div style={{ padding: '40px', background: '#f5f5f5' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '20px', textAlign: 'center' }}>
          <div><span style={{ fontSize: '30px' }}>🏨</span><br />Hotels</div>
          <div><span style={{ fontSize: '30px' }}>🚗</span><br />Car rentals</div>
          <div><span style={{ fontSize: '30px' }}>🎯</span><br />Tours & activities</div>
          <div><span style={{ fontSize: '30px' }}>📅</span><br />Book a holiday</div>
          <div><span style={{ fontSize: '30px' }}>🏙️</span><br />Dubai Experience</div>
          <div><span style={{ fontSize: '30px' }}>🚙</span><br />Chauffeur-drive</div>
        </div>
      </div>

      {/* Skywards Membership */}
      <div style={{ padding: '40px', background: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
          <div>
            <h2>Join Emirates Skywards</h2>
            <p>Become an Emirates Skywards member and start enjoying flight rewards, upgrades and more.</p>
            <button style={{ padding: '12px 30px', background: '#d71920', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', marginTop: '10px' }}>
              Join now
            </button>
          </div>
          <div style={{ fontSize: '50px' }}>⭐</div>
        </div>
      </div>

      {/* Featured Destinations */}
      <div style={{ padding: '40px', background: '#f5f5f5' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Featured destinations from Pakistan</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
            <div style={{ background: 'white', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
              <div style={{ height: '150px', background: '#1e3c72', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '50px' }}>🇬🇧</div>
              <div style={{ padding: '15px' }}>
                <h3>UNITED KINGDOM</h3>
                <p>London</p>
                <button style={{ background: 'none', border: 'none', color: '#d71920', cursor: 'pointer' }}>Discover for yourself →</button>
              </div>
            </div>
            <div style={{ background: 'white', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
              <div style={{ height: '150px', background: '#2a5298', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '50px' }}>🇦🇪</div>
              <div style={{ padding: '15px' }}>
                <h3>UNITED ARAB EMIRATES</h3>
                <p>Dubai</p>
                <button style={{ background: 'none', border: 'none', color: '#d71920', cursor: 'pointer' }}>Discover for yourself →</button>
              </div>
            </div>
            <div style={{ background: 'white', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
              <div style={{ height: '150px', background: '#1e5c72', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '50px' }}>🇵🇰</div>
              <div style={{ padding: '15px' }}>
                <h3>PAKISTAN</h3>
                <p>Karachi</p>
                <button style={{ background: 'none', border: 'none', color: '#d71920', cursor: 'pointer' }}>Discover for yourself →</button>
              </div>
            </div>
            <div style={{ background: 'white', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
              <div style={{ height: '150px', background: '#2a5c98', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '50px' }}>🇲🇻</div>
              <div style={{ padding: '15px' }}>
                <h3>MALDIVES</h3>
                <p>Male</p>
                <button style={{ background: 'none', border: 'none', color: '#d71920', cursor: 'pointer' }}>Discover for yourself →</button>
              </div>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '30px' }}>
            <button style={{ padding: '12px 30px', background: '#d71920', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
              More destinations →
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ background: '#1a1a1a', color: 'white', padding: '40px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px' }}>
          <div>
            <h4>About us</h4>
            <p>Learn more about our history, our business and sustainability initiatives</p>
          </div>
          <div>
            <h4>Our business</h4>
            <p>Our planet</p>
            <p>Our people</p>
            <p>Our communities</p>
          </div>
          <div>
            <h4>Help</h4>
            <p>Create your Dubai Experience</p>
            <p>Premium Economy</p>
            <p>Economy Class</p>
          </div>
          <div>
            <h4>Connect</h4>
            <p>Join Emirates Skywards</p>
            <p>Skywards+</p>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: '30px', paddingTop: '20px', borderTop: '1px solid #333' }}>
          <p>© 2024 Emirates. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default App