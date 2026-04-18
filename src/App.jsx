import { useState } from 'react'
import './index.css'

// Import images
import dubaiImage from './assets/510x340.jpg'
import londonImage from './assets/510x340 (1).jpg'
import newyorkImage from './assets/510x340 (2).jpg'
import maldivesImage from './assets/510x340 (3).jpg'

// Import data
import { destinations, offers, cabins, reviews, tiers, services } from './data.js'

// Import components
import { Navbar, HeroSearch, FlightStatus, Services, WhyFly, Offers, Cabins, Destinations, Reviews, SkywardsSection, Tiers, AppBanner, Newsletter, Footer } from './components.jsx'

// Add images to destinations
const destinationsWithImages = destinations.map((dest, index) => {
  const images = [dubaiImage, londonImage, newyorkImage, maldivesImage];
  return { ...dest, image: images[index] };
});

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const showAlert = (message) => {
    console.log(message);
    alert(message);
  };

  const handleBooking = (type, name, price) => {
    showAlert(`✈️ Booking ${type}: ${name} for ${price}`);
  };

  return (
    <div>

      <div className="top-banner">
        ✈️ ENJOY FLEXIBLE TRAVEL WITH <strong style={{ color: '#d71920' }}>FREE DATE CHANGE</strong> ON ALL NEW TICKETS
      </div>

      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} showAlert={showAlert} />
      <HeroSearch showAlert={showAlert} />
      <FlightStatus showAlert={showAlert} />
      <Services services={services} showAlert={showAlert} />
      <WhyFly />
      <Offers offers={offers} handleBooking={handleBooking} />
      <Cabins cabins={cabins} handleBooking={handleBooking} />
      <Destinations destinations={destinationsWithImages} handleBooking={handleBooking} />
      <Reviews reviews={reviews} />
      <SkywardsSection showAlert={showAlert} />
      <Tiers tiers={tiers} showAlert={showAlert} />
      <AppBanner showAlert={showAlert} />
      <Newsletter showAlert={showAlert} />
      <Footer showAlert={showAlert} />
    </div>
  )
}

export default App