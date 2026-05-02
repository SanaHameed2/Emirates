// ========== FLIGHT RESULTS COMPONENT ==========
export const FlightResults = ({ flights, isLoading, error, onSelectFlight }) => {
  const [sortBy, setSortBy] = useState('price');
  const [stopsFilter, setStopsFilter] = useState(null);
  const [expandedId, setExpandedId] = useState(null);

  if (isLoading) {
    return (
      <div className="section bg-light">
        <div className="container text-center">
          <div className="loading-spinner">
            <div className="spinner"></div>
          </div>
          <p className="loading-text">Searching for the best flights...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="section bg-light">
        <div className="container text-center">
          <p className="error-message">{error}</p>
        </div>
      </div>
    );
  }

  if (flights.length === 0) return null;

  // Sort and filter flights
  const sorted = [...flights]
    .filter((f) => stopsFilter === null || f.stops === stopsFilter)
    .sort((a, b) => {
      if (sortBy === 'price') return a.price - b.price;
      if (sortBy === 'stops') return a.stops - b.stops;
      if (sortBy === 'departure') return a.departureTime.localeCompare(b.departureTime);
      return 0;
    });

  const uniqueStops = [...new Set(flights.map((f) => f.stops))].sort();

  return (
    <div className="section bg-light" id="flight-results">
      <div className="container">
        <div className="flight-results-header">
          <div>
            <h2 className="text-center">{sorted.length} flight{sorted.length !== 1 ? 's' : ''} found</h2>
            <p className="subtitle text-center">
              {flights[0]?.from} → {flights[0]?.to} · {flights[0]?.cabinClass} class
            </p>
          </div>
        </div>

        {/* Filters and Sorting */}
        <div className="flight-filters">
          <div className="filter-group">
            <span className="filter-label">✈️ Stops:</span>
            <button 
              onClick={() => setStopsFilter(null)} 
              className={`filter-btn ${stopsFilter === null ? 'active' : ''}`}
            >
              All
            </button>
            {uniqueStops.map((s) => (
              <button
                key={s}
                onClick={() => setStopsFilter(s)}
                className={`filter-btn ${stopsFilter === s ? 'active' : ''}`}
              >
                {s === 0 ? 'Direct' : `${s} stop${s > 1 ? 's' : ''}`}
              </button>
            ))}
          </div>

          <div className="sort-group">
            <span className="filter-label">📊 Sort by:</span>
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className="sort-select"
            >
              <option value="price">Price (Low to High)</option>
              <option value="stops">Number of Stops</option>
              <option value="departure">Departure Time</option>
            </select>
          </div>
        </div>

        {/* Flight Results List */}
        <div className="flights-list">
          {sorted.map((flight) => (
            <div key={flight.id} className="flight-card">
              <div 
                className="flight-card-main" 
                onClick={() => setExpandedId(expandedId === flight.id ? null : flight.id)}
              >
                <div className="flight-airline">
                  <div className="airline-icon">✈️</div>
                  <div>
                    <div className="airline-name">{flight.airline}</div>
                    <div className="flight-number">{flight.flightNumber}</div>
                  </div>
                </div>

                <div className="flight-route">
                  <div className="time-departure">
                    <div className="time">{flight.departureTime}</div>
                    <div className="airport">{flight.from.match(/\((\w+)\)/)?.[1]}</div>
                  </div>

                  <div className="flight-duration">
                    <div className="duration">{flight.duration}</div>
                    <div className="route-line">
                      <div className="line"></div>
                      {flight.stops > 0 && <div className="stop-dot"></div>}
                      <div className="arrow">→</div>
                    </div>
                    <div className="stops-info">
                      {flight.stops === 0 ? 'Direct' : `${flight.stops} stop${flight.stops > 1 ? 's' : ''}`}
                    </div>
                  </div>

                  <div className="time-arrival">
                    <div className="time">{flight.arrivalTime}</div>
                    <div className="airport">{flight.to.match(/\((\w+)\)/)?.[1]}</div>
                  </div>
                </div>

                <div className="flight-price-action">
                  <div className="price-section">
                    <div className="price">${flight.price}</div>
                    <div className="price-note">per person</div>
                  </div>
                  <button 
                    className="btn-primary btn-small select-flight-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectFlight && onSelectFlight(flight);
                    }}
                  >
                    Select
                  </button>
                  <div className="expand-icon">
                    {expandedId === flight.id ? '▲' : '▼'}
                  </div>
                </div>
              </div>

              {/* Expanded Details */}
              {expandedId === flight.id && (
                <div className="flight-details-expanded">
                  <div className="details-grid">
                    <div className="outbound-details">
                      <h4>✈️ Outbound Flight</h4>
                      <p><strong>Date:</strong> {flight.departureDate}</p>
                      <p><strong>Airline:</strong> {flight.airline} {flight.flightNumber}</p>
                      <p><strong>Time:</strong> {flight.departureTime} → {flight.arrivalTime}</p>
                      <p><strong>Duration:</strong> {flight.duration}</p>
                      <p><strong>Aircraft:</strong> {flight.aircraft}</p>
                      <p className={`seats-left ${flight.seatsLeft <= 3 ? 'low-seats' : ''}`}>
                        <strong>Seats left:</strong> {flight.seatsLeft} seat{flight.seatsLeft !== 1 ? 's' : ''}
                      </p>
                    </div>

                    {flight.returnFlight && (
                      <div className="return-details">
                        <h4>🔄 Return Flight</h4>
                        <p><strong>Airline:</strong> {flight.airline} {flight.returnFlight.flightNumber}</p>
                        <p><strong>Time:</strong> {flight.returnFlight.departureTime} → {flight.returnFlight.arrivalTime}</p>
                        <p><strong>Duration:</strong> {flight.returnFlight.duration}</p>
                        <p><strong>Stops:</strong> {flight.returnFlight.stops === 0 ? 'Direct' : `${flight.returnFlight.stops} stop${flight.returnFlight.stops > 1 ? 's' : ''}`}</p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}

          {sorted.length === 0 && (
            <div className="no-results">
              <p>No flights match your filter. Try adjusting the stops filter.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};