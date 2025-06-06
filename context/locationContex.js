import * as Location from 'expo-location';
import React, { createContext, useContext, useState, useEffect } from 'react';

const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
  const [address, setAddress] = useState('');
  const [distance, setDistance] = useState('');
  const [time, setTime] = useState('');
  const [dest, setDest] = useState(null); // Changed to null for consistency with location
  const [location, setLocation] = useState(null);

  const getDistance = (newDistance) => {
    setDistance(newDistance);
  };

  const getTime = (newTime) => {
    setTime(newTime);
  };

  const getDestination = (newDestination) => {
    setDest(newDestination);
  };

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          console.log('Permission to access location was denied');
          setAddress('Permission denied');
          return;
        }

        const loc = await Location.getCurrentPositionAsync({
          accuracy: Location.Accuracy.High, // Ensure high accuracy
        });
        console.log('Raw Location Data:', loc); // Debug raw data

        // Set coordinates immediately, even if geocoding fails
        setLocation({
          latitude: loc.coords.latitude,
          longitude: loc.coords.longitude,
        });

        // Attempt reverse geocoding (optional)
        try {
          const reverseGeocodedAddress = await Location.reverseGeocodeAsync({
            latitude: loc.coords.latitude,
            longitude: loc.coords.longitude,
          });
          console.log('Reverse Geocode Result:', reverseGeocodedAddress); // Debug result

          if (reverseGeocodedAddress.length > 0) {
            const { street, city } = reverseGeocodedAddress[0];
            setAddress(`${street || 'Unknown Street'}, ${city || 'Unknown City'}`);
          } else {
            setAddress('Unknown location');
          }
        } catch (geocodeError) {
          console.error('Reverse Geocode Error:', geocodeError);
          setAddress('Failed to fetch address'); // Fallback address
        }
      } catch (error) {
        console.error('Error getting location:', error);
        setAddress('Failed to fetch location');
      }
    };

    fetchLocation();
  }, []);

  return (
    <LocationContext.Provider
      value={{
        getDestination,
        address,
        getDistance,
        distance,
        time,
        getTime,
        dest,
        setDest,
        location,
      }}>
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = () => useContext(LocationContext);
