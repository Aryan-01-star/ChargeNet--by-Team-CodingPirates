// src/utils/locationService.js
export const getCurrentLocation = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        resolve({ latitude, longitude });
      },
      error => reject(error),
      { enableHighAccuracy: true }
    );
  });
};

export const fetchChargingStations = async (location) => {
  // Simulate an API call for charging stations
  const { latitude, longitude } = location;

  return [
    { id: 1, name: 'Station 1', latitude: latitude + 0.01, longitude: longitude + 0.01, details: 'Fast charger available' },
    { id: 2, name: 'Station 2', latitude: latitude - 0.01, longitude: longitude - 0.01, details: 'Slow charger available' },
  ];
};
