import { Entypo } from '@expo/vector-icons';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

import Button from '../../components/Button';
import Map from '../../components/MapView';
import { useLocation } from '../../context/locationContex';
import { drivers } from '../../data/drivers';

const toRad = (value) => (value * Math.PI) / 180;
const haversineDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371; // Radius of the Earth in km
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Distance in km
};

export default function DriverList() {
  const { longitude, latitude } = useLocalSearchParams();
  const { dest, distance, time } = useLocation();
  const router = useRouter();
  const [nearbyDrivers, setNearbyDrivers] = useState([]);
  const [selectedDriver, setSelectedDriver] = useState(null); // New state for selected driver
  const [isCardVisible, setIsCardVisible] = useState(true);
  useEffect(() => {
    console.log('Drivers data:', drivers);
    const destLat = parseFloat(latitude);
    const destLon = parseFloat(longitude);

    if (!destLat || !destLon) {
      console.log('Invalid destination coordinates:', { latitude, longitude });
      return;
    }

    const availableDrivers = drivers || [];
    const filteredDrivers = availableDrivers.filter((driver) => {
      const driverDistance = haversineDistance(driver.latitude, driver.longitude, destLat, destLon);
      const isNearBy = driverDistance <= 2;
      const isAvailable = driver.status === 'available';
      return isNearBy && isAvailable;
    });

    setNearbyDrivers(filteredDrivers);
    console.log('Nearby Available Drivers:', filteredDrivers);
    console.log('Destination:', dest);
  }, [latitude, longitude, dest]);

  const handleDriverSelect = (driver) => {
    setSelectedDriver(driver);
    console.log('Selected Driver:', driver);
  };

  return (
    <View className="h-full bg-white">
      <View className="h-[100%] w-full flex-1">
        <Map
          destination={dest}
          drivers={nearbyDrivers || []}
          selectedDriver={selectedDriver} // Pass selected driver to Map
        />
      </View>

      <View className="absolute top-9 z-10 pl-4">
        <TouchableOpacity
          onPress={() => {
            router.back();
          }}
          className="h-14 w-14 items-center justify-center rounded-full bg-white">
          <Entypo name="chevron-thin-left" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Driver Details Overlay */}
      {selectedDriver && (
        <View
          className="absolute top-[65%] flex w-[90%] self-center rounded-xl bg-white p-5 shadow-lg"
          style={{ elevation: 5, zIndex: 10 }}>
          <Text className="text-lg font-bold">{selectedDriver.name}</Text>
          <Text>🚗 {selectedDriver.vehicle}</Text>
          <Text>⭐ {selectedDriver.rating} / 5</Text>
          <Text>📍 {selectedDriver.location}</Text>
          <Text className="text-base font-semibold">Price: Nle {selectedDriver.price}</Text>
          <View className="flex gap-3">
            <Button
              title="Book Now"
              containerStyle="p-4 mt-5"
              onPress={() => router.push('/(book)/booking')}
            />
            <TouchableOpacity
              onPress={() => {
                setIsCardVisible(true);
                setSelectedDriver(null);
              }} // Close overlay
              className="rounded-lg p-2">
              <Text className="text-center text-green-500">Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {isCardVisible && (
        <FlatList
          className="absolute bottom-[30px] w-[100%] self-center p-5 px-3"
          showsHorizontalScrollIndicator={false}
          horizontal
          data={nearbyDrivers}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                setIsCardVisible(false);
                handleDriverSelect(item);
              }} // Select driver on press
              className={`mr-5 rounded-xl p-5  px-6 ${
                selectedDriver?.id === item.id ? 'bg-blue-100' : 'bg-white'
              }`}>
              <View className="gap-4">
                <View className="flex-row gap-4">
                  <View className="h-[50px] w-[70px] rounded-lg bg-gray-300" />
                  <View>
                    <Text className="text-lg font-bold">{item.name}</Text>
                    <Text className="text-base font-semibold">
                      <Text>Price: </Text>
                      <Text>Nle </Text>
                      {item.price} / km
                    </Text>
                  </View>
                </View>
                <Text>🚗 {item.vehicle}</Text>
                <Text>⭐ {item.rating} / 5</Text>
                <View className="flex flex-row justify-between">
                  <View className="h-10 items-center justify-center rounded-lg bg-gray-300 px-1">
                    <Text>{time}</Text>
                  </View>
                  <View className="h-10 w-16 items-center justify-center rounded-lg bg-gray-300">
                    <Text>Sol</Text>
                  </View>
                  <View className="h-10 w-16 items-center justify-center rounded-lg bg-gray-300">
                    <Text>{distance}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
}
