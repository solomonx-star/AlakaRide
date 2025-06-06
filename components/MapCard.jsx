import { View, Text } from 'react-native';
import React from 'react';
import Map from './MapView';

const MapCard = () => {
  return (
    <View className="relative items-center p-2">
      <View className="bottom-0  w-[100%] rounded-lg bg-red-500 p-1">
        <Map className="" />
      </View>
    </View>
  );
};

export default MapCard;
