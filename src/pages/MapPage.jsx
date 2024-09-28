import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, useMediaQuery, TextField, IconButton } from '@mui/material';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS
import L from 'leaflet';
import axios from 'axios';
import SearchIcon from '@mui/icons-material/Search'; // Import Search Icon
import CloseIcon from '@mui/icons-material/Close'; // Import Close Icon
import RefreshIcon from '@mui/icons-material/Refresh'; // Import Refresh Icon

// Custom icon for EV stations
const evIcon = new L.Icon({
  iconUrl: '/src/assets/ev-charging-icon.png', // Replace with your own icon path
  iconSize: [35, 45],
  iconAnchor: [17, 45],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// Function to get user current location (if permitted by the user)
const getUserLocation = (callback) => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        callback([latitude, longitude]);
      },
      (error) => {
        console.error("Error fetching location:", error);
        callback(null);
      }
    );
  } else {
    console.error("Geolocation is not supported by this browser.");
    callback(null);
  }
};

const MapPage = () => {
  const [currentPosition, setCurrentPosition] = useState([40.7128, -74.0060]); // Default to New York City
  const [evStations, setEvStations] = useState([]);
  const [nearestStation, setNearestStation] = useState(null);
  const [route, setRoute] = useState(null); // Store route data (optimized route)
  const [searchQuery, setSearchQuery] = useState(''); // State for search query
  const [isSearchOpen, setIsSearchOpen] = useState(false); // State for search bar visibility
  const isSmallScreen = useMediaQuery('(max-width:600px)'); // Media query to detect small screens

  // Fetch EV charging station data from the NREL API based on current location
  const fetchChargingStations = async (latitude, longitude) => {
    const apiKey = 'YOUR_NREL_API_KEY'; // Replace with your NREL API Key
    const url = `https://developer.nrel.gov/api/alt-fuel-stations/v1/nearest.json?api_key=${apiKey}&fuel_type=ELEC&latitude=${latitude}&longitude=${longitude}&limit=10`;

    try {
      const response = await axios.get(url);
      const stations = response.data.fuel_stations;
      setEvStations(stations);
      findNearestStation(stations, latitude, longitude);
    } catch (error) {
      console.error('Error fetching charging station data:', error);
    }
  };

  // Function to find the nearest charging station
  const findNearestStation = (stations, userLat, userLng) => {
    if (stations.length > 0) {
      const nearest = stations[0]; // Assume the first station is nearest for simplicity
      setNearestStation(nearest);
      setCurrentPosition([userLat, userLng]);
      // Simulate optimized route (For real routes, you'd use a routing service like Mapbox Directions)
      setRoute([[userLat, userLng], [nearest.latitude, nearest.longitude]]);
    }
  };

  // Geocode the search query to get latitude and longitude
  const handleSearch = async () => {
    const url = `https://nominatim.openstreetmap.org/search?q=${searchQuery}&format=json&limit=1`;
    try {
      const response = await axios.get(url);
      const data = response.data[0];
      if (data) {
        const { lat, lon } = data;
        setCurrentPosition([parseFloat(lat), parseFloat(lon)]);
        fetchChargingStations(lat, lon);
        setIsSearchOpen(false); // Close search bar after search
        setSearchQuery(''); // Clear search query
      } else {
        console.error('Location not found.');
      }
    } catch (error) {
      console.error('Error with geocoding search:', error);
    }
  };

  useEffect(() => {
    // Get the user's location and fetch charging stations based on that
    getUserLocation((location) => {
      if (location) {
        const [latitude, longitude] = location;
        setCurrentPosition(location);
        fetchChargingStations(latitude, longitude);
      } else {
        console.log("Using default location (NYC)");
      }
    });
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: '#121212', // Dark background
        color: '#E0E0E0',
        minHeight: '100vh', // Ensure full viewport height
        width: '100vw', // Ensure full viewport width
        overflow: 'hidden', // Prevent any overflow issues
        padding: { xs: '10px', md: '40px' },
        paddingTop: { xs: '60px', md: '80px' }, // Add padding between the navbar and content
        boxSizing: 'border-box',
      }}
    >
      <Typography
        variant={isSmallScreen ? 'h5' : 'h4'} // Adjust typography for small screens
        gutterBottom
        textAlign="center"
        sx={{
          fontSize: { xs: '1.5rem', md: '2.5rem' }, // Responsive font sizes
          marginBottom: { xs: '15px', md: '30px' }, // Responsive margin
        }}
      >
        EV Charging Stations Near You
      </Typography>

      {/* Container for Search Bar and Map */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: { xs: 'center', md: 'flex-start' }, // Center for small screens, start for larger
          alignItems: 'flex-start', // Align items to the top
          flexDirection: { xs: 'column', md: 'row' }, // Stack elements vertically on small screens and horizontally on larger screens
          gap: { xs: '10px', md: '20px' }, // Gap for spacing
        }}
      >
        {/* Search Bar and Refresh Icon Row */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: isSmallScreen ? 'space-between' : 'flex-start', // Space between icons on small screens
            alignItems: 'center',
            flexDirection: isSmallScreen ? 'row' : 'column', // Row for small screens, column for larger screens
            maxWidth: '200px', // Limit width of icons container
          }}
        >
          {/* Search Bar Toggle */}
          <IconButton onClick={() => setIsSearchOpen((prev) => !prev)} color="primary">
            {isSearchOpen ? <CloseIcon /> : <SearchIcon />}
          </IconButton>

          {/* Add space between icons only for small screens */}
          {isSmallScreen && <Box sx={{ width: '10px' }} />} {/* Adjust width as needed for spacing */}

          {/* Refresh Icon */}
          <IconButton
            onClick={() => fetchChargingStations(currentPosition[0], currentPosition[1])}
            color="primary"
          >
            <RefreshIcon />
          </IconButton>

          {/* Search Bar */}
          {isSearchOpen && (
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                marginTop: '10px', // Margin for spacing below
              }}
            >
              <TextField
                fullWidth
                variant="outlined"
                label="Search Location"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                sx={{ backgroundColor: '#fff', borderRadius: '4px' }} // Lighten search box for readability
              />
              <Button
                variant="contained"
                color="primary"
                sx={{ ml: 2 }}
                onClick={handleSearch}
              >
                Search
              </Button>
            </Box>
          )}
        </Box>

        {/* Map Container */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center', // Center map horizontally
            width: '100%', // Allow the map to take full width
            flexGrow: 1, // Allow the map container to grow and center it properly
            maxWidth: '1200px', // Max width for larger screens
            margin: '0 auto', // Center the map container
          }}
        >
          <MapContainer
            center={currentPosition}
            zoom={13}
            style={{
              height: isSmallScreen ? '300px' : '500px', // Adjust map height for small screens
              width: '100%',
              borderRadius: '8px',
            }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />

            {/* Add EV station markers */}
            {evStations.map((station) => (
              <Marker
                key={station.id}
                position={[station.latitude, station.longitude]}
                icon={evIcon}
              >
                <Popup>
                  <Typography variant="h6">
                    {station.station_name}
                  </Typography>
                  <Typography variant="body2">
                    {station.address || 'No address available'}
                  </Typography>
                  <Typography variant="body2">
                    Fuel Type: {station.fuel_type_code || 'N/A'}
                  </Typography>
                </Popup>
              </Marker>
            ))}

            {/* Plot Route if nearest station exists */}
            {route && (
              <Polyline positions={route} color="blue" />
            )}
          </MapContainer>
        </Box>
      </Box>
    </Box>
  );
};

export default MapPage;
