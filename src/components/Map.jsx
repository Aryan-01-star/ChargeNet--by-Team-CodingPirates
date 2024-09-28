// src/components/Map.jsx
import React, { useEffect, useRef, useState } from 'react';
import { TextField, Button } from '@mui/material';

const Map = () => {
  const mapRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const loadGoogleMaps = () => {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&libraries=places`;
      document.head.appendChild(script);

      script.addEventListener('load', () => {
        const map = new window.google.maps.Map(mapRef.current, {
          center: { lat: 37.7749, lng: -122.4194 }, // Default center (SF)
          zoom: 12,
        });

        const stations = [
          { lat: 37.7749, lng: -122.4194, name: 'Station 1' },
          { lat: 37.7849, lng: -122.4294, name: 'Station 2' },
        ];

        stations.forEach((station) => {
          new window.google.maps.Marker({
            position: { lat: station.lat, lng: station.lng },
            map,
            title: station.name,
          });
        });
      });
    };

    loadGoogleMaps();
  }, []);

  const handleSearch = () => {
    console.log('Search for:', searchTerm);
    // Implement search logic with Google Maps Places API
  };

  return (
    <div>
      <TextField
        label="Search Charging Stations"
        variant="outlined"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{ marginBottom: 2 }}
      />
      <Button onClick={handleSearch} variant="contained" color="primary" sx={{ marginBottom: 2 }}>
        Search
      </Button>
      <div ref={mapRef} style={{ width: '100%', height: '400px', borderRadius: '8px', margin: '20px 0' }}></div>
    </div>
  );
};

export default Map;
