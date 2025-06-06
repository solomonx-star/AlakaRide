import { View, Text } from 'react-native';
import React from 'react';
import Info from '../Info';

const RideHistory = () => {
  return (
    <View className="mt-[6%] p-1">
      <View className="rounded-xl bg-white p-4">
        <View className="bottom-0 h-[40%]  w-[100%] rounded-lg bg-gray-400 p-1"></View>
        <Info from="Wilberforce Cole Drive" to="88 Pademba Road" />
      </View>
    </View>
  );
};

export default RideHistory;
