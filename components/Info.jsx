import { View, Text } from 'react-native';
import React from 'react';

const Info = ({ from = '', to = '' }) => {
  return (
    <View className="p-1 mt-[8%] gap-5">
      <View className="">
        <Text className="text-lg text-gray-500">From</Text>
        <Text className="text-xl font-medium">{from}</Text>
      </View>
      <View>
        <Text className="text-lg text-gray-500">To</Text>
        <Text className="text-xl font-medium">{to}</Text>
      </View>
    </View>
  );
};

export default Info;
