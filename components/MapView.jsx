import MapboxGL from '@rnmapbox/maps';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, PermissionsAndroid, Platform, Text } from 'react-native';
import * as Location from 'expo-location';

MapboxGL.setAccessToken(
  'pk.eyJ1Ijoic3BhcnRhbjMiLCJhIjoiY202amlrZDhjMDFibTJxcXFuN2oyeDM1eSJ9.P8Nnx_0mLGbxq4xfE2VPDQ'
);

const App = () => {
  const [userLocation, setUserLocation] = useState(null);

  const requestLocationPermission = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      console.log('Permission to access location was denied');
    } else {
      console.log('Location permission granted');
    }
  };

  // UseEffect to get the user's current location
  useEffect(() => {
    requestLocationPermission();

    const getLocation = async () => {
      const location = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.High });
      setUserLocation(location.coords);
    };

    getLocation();
  }, []);

  if (!userLocation) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <MapboxGL.MapView style={styles.map}>
          <MapboxGL.Camera
            zoomLevel={14}
            centerCoordinate={[userLocation.longitude, userLocation.latitude]}
          />
          <MapboxGL.UserLocation visible />
        </MapboxGL.MapView>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    height: 750,
    width: 400,
  },
  map: {
    flex: 1,
  },
});
