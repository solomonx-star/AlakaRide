import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import MapView, { Marker, Polyline, PROVIDER_DEFAULT } from 'react-native-maps';

import { useLocation } from '../context/locationContex';

const API_KEY = '23a89393b95f42449b2719c4cf8823b3'; // Replace with a valid Geoapify API Key

const Map = ({
  search,
  suggestions,
  fetchSuggestions,
  destination,
  selectDestination,
  drivers = [],
  selectedDriver, // New prop
}) => {
  const { getDistance, getTime, location } = useLocation();
  const [route, setRoute] = useState(null); // Route to destination
  const [driverRoute, setDriverRoute] = useState(null); // Route to selected driver
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');
  const [loading, setLoading] = useState(false);
  const mapRef = useRef(null);

  const fetchRoute = async (dest, isDriverRoute = false) => {
    if (!location?.latitude || !location?.longitude || !dest?.latitude || !dest?.longitude) {
      console.log('Invalid location or destination', { location, dest });
      return;
    }

    setLoading(true);
    try {
      const url = `https://api.geoapify.com/v1/routing?waypoints=${location.latitude},${location.longitude}|${dest.latitude},${dest.longitude}&mode=drive&apiKey=${API_KEY}`;
      const response = await axios.get(url);

      if (!response.data || !response.data.features || response.data.features.length === 0) {
        console.log('No route data available');
        return;
      }

      const lineString = response.data.features[0].geometry.coordinates[0];
      const routeCoords = lineString.map(([longitude, latitude]) => ({ latitude, longitude }));

      const distanceKm = response.data.features[0].properties.distance / 1000;
      const timeMin = response.data.features[0].properties.time / 60;

      if (isDriverRoute) {
        setDriverRoute(routeCoords);
      } else {
        if (JSON.stringify(routeCoords) !== JSON.stringify(route)) {
          setRoute(routeCoords);
        }
        getDistance(`${distanceKm.toFixed(2)} km`);
        getTime(`${timeMin.toFixed(2)} mins`);
        setDistance(`${distanceKm.toFixed(2)} km`);
        setDuration(`${timeMin.toFixed(2)} mins`);
      }
    } catch (error) {
      console.error('Error fetching route:', error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };

  const fitToCoordinates = (coordinates) => {
    if (coordinates.length === 0) return;

    mapRef.current?.fitToCoordinates(coordinates, {
      edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
      animated: true,
    });
  };

  useEffect(() => {
    if (destination) {
      fetchRoute(destination, false);
      console.log('Destination:', destination);
    }
  }, [destination]);

  useEffect(() => {
    if (selectedDriver) {
      fetchRoute(selectedDriver, true); // Fetch route to driver
      console.log('Fetching route to driver:', selectedDriver);
    } else {
      setDriverRoute(null); // Clear driver route when no driver is selected
    }
  }, [selectedDriver]);

  useEffect(() => {
    if (Array.isArray(driverRoute) && driverRoute.length > 1) {
      fitToCoordinates(driverRoute); // Zoom to driver route
    } else if (Array.isArray(route) && route.length > 1) {
      fitToCoordinates(route); // Zoom to destination route
    } else if (location) {
      mapRef.current?.animateToRegion(
        {
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        },
        1000
      );
    }
  }, [route, driverRoute, location]);

  return (
    <View style={{ flex: 1 }}>
      {/* Search Bar */}
      <View style={{ padding: 10, backgroundColor: 'white', zIndex: 10 }}>
        {(suggestions || []).length > 0 && (
          <FlatList
            data={suggestions}
            keyExtractor={(item, index) => item?.properties?.place_id || index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => selectDestination(item)}>
                <Text style={{ padding: 10, borderBottomWidth: 1 }}>
                  {item.properties.formatted}
                </Text>
              </TouchableOpacity>
            )}
          />
        )}
      </View>
      {/* Map */}
      <MapView
        ref={mapRef}
        style={{ flex: 1 }}
        provider={PROVIDER_DEFAULT}
        initialRegion={{
          latitude: location?.latitude || 8.4844, // Default to Freetown
          longitude: location?.longitude || -13.2344,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
        showsUserLocation={true}>
        {/* Current Location Marker */}
        {location && (
          <Marker
            coordinate={{ latitude: location.latitude, longitude: location.longitude }}
            title="You are here"
            pinColor="blue"
          />
        )}
        {/* Destination Marker */}
        {destination && (
          <Marker
            coordinate={{ latitude: destination.latitude, longitude: destination.longitude }}
            title="Destination"
            pinColor="red"
          />
        )}
        {/* Nearby Available Drivers Markers */}
        {drivers.map((driver) => (
          <Marker
            key={driver.id.toString()}
            coordinate={{
              latitude: driver.latitude,
              longitude: driver.longitude,
            }}
            title={driver.name}
            description={`${driver.vehicle} - ${driver.rating} ★`}
            pinColor={selectedDriver?.id === driver.id ? 'purple' : 'green'} // Highlight selected driver
          />
        ))}
        {/* Route to Destination Polyline */}
        {route && <Polyline coordinates={route} strokeColor="#0000FF" strokeWidth={3} />}
        {/* Route to Selected Driver Polyline */}
        {driverRoute && (
          <Polyline coordinates={driverRoute} strokeColor="#FF00FF" strokeWidth={3} /> // Magenta for driver route
        )}
      </MapView>

      {/* Loading Indicator */}
      {loading && (
        <View
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: [{ translateX: -50 }, { translateY: -50 }],
            backgroundColor: 'rgba(0,0,0,0.7)',
            padding: 15,
            borderRadius: 10,
          }}>
          <Text style={{ color: 'white' }}>Loading...</Text>
        </View>
      )}
    </View>
  );
};

export default Map;
