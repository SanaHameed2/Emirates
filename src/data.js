// ========== ALL STATIC DATA ==========

export const destinations = [
  { id: 1, name: "Dubai", country: "United Arab Emirates", price: "$499" },
  { id: 2, name: "London", country: "United Kingdom", price: "$599" },
  { id: 3, name: "New York", country: "United States", price: "$699" },
  { id: 4, name: "Maldives", country: "Maldives", price: "$799" }
];

export const offers = [
  { id: 1, destination: "Dubai", price: "$399", emoji: "🇦🇪", sale: "Summer Sale" },
  { id: 2, destination: "London", price: "$499", emoji: "🇬🇧", sale: "Winter Sale" },
  { id: 3, destination: "New York", price: "$599", emoji: "🇺🇸", sale: "Flash Sale" }
];

export const cabins = [
  { id: 1, name: "Economy Class", price: "$499", icon: "💺", color: "economy", desc: "Comfortable seats, delicious meals" },
  { id: 2, name: "Business Class", price: "$2,499", icon: "✨", color: "business", desc: "Lie-flat seats, gourmet dining" },
  { id: 3, name: "First Class", price: "$6,999", icon: "👑", color: "first", desc: "Private suite, shower spa" }
];

export const reviews = [
  { id: 1, name: "Sarah Ahmed", text: "Amazing service!", rating: "⭐⭐⭐⭐⭐" },
  { id: 2, name: "John Smith", text: "Best airline experience!", rating: "⭐⭐⭐⭐⭐" },
  { id: 3, name: "Maria Khan", text: "Highly recommend!", rating: "⭐⭐⭐⭐⭐" }
];

export const tiers = [
  { id: 1, name: "Blue", miles: "Entry Level", benefit: "Free" },
  { id: 2, name: "Silver", miles: "25,000 Miles", benefit: "+ Lounge Access" },
  { id: 3, name: "Gold", miles: "50,000 Miles", benefit: "+ Priority Boarding" },
  { id: 4, name: "Platinum", miles: "100,000 Miles", benefit: "+ First Class Lounge" }
];

export const services = [
  { name: "Hotels", emoji: "🏨" },
  { name: "Car rentals", emoji: "🚗" },
  { name: "Tours", emoji: "🎯" },
  { name: "Holidays", emoji: "📅" },
  { name: "Dubai Exp", emoji: "🏙️" },
  { name: "Chauffeur", emoji: "🚙" }
];