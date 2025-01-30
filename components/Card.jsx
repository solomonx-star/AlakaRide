import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';

const Card = ({ data, onPress }) => {
  return (
    <View className="h-[65%] w-full flex-row justify-between rounded-2xl border border-gray-300">
      <TouchableOpacity onPress={onPress} className="h-full w-[90%] items-center justify-center ">
        <View className="w-[90%] flex-row items-center justify-between">
          <View className="flex-row items-center gap-4">
            <Text>{data.icon}</Text>
            <Text>{data.title}</Text>
          </View>

          <View className="">
            <SimpleLineIcons name="arrow-right" size={24} color="#3B82F6" />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Card;
