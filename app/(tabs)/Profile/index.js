import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';

export default function Profile() {
  const [data, setdata] = useState([
    {
      id: 1,
      icon: <Ionicons name="person" size={24} color="#3B82F6" />,
      title: 'Account',
      onPress: () => router.push('/Profile/Account'),
    },
    {
      id: 2,
      icon: <FontAwesome5 name="car-side" size={24} color="#3B82F6" />,
      title: 'My trips',
      onPress: () => router.push('/Profile/MyTrips'),
    },
    {
      id: 3,
      icon: <AntDesign name="creditcard" size={24} color="#3B82F6" />,
      title: 'My card',
      onPress: () => router.push('/Profile/MyCard'),
    },
    {
      id: 4,
      icon: <AntDesign name="star" size={24} color="#3B82F6" />,
      title: 'Saved places',
      onPress: () => router.push('/Profile/SavedPlaces'),
    },
    {
      id: 5,
      icon: <Feather name="settings" size={24} color="#3B82F6" />,
      title: 'Setting',
      onPress: () => router.push('/Profile/Settings'),
    },
  ]);

  const img = require('../../../images/sol.jpeg');

  return (
    <View className="mt-[10%] flex-1 items-center">
      <View className="h-[33%] w-[90%] items-center rounded-2xl bg-blue-100 pt-[4%]">
        <View className="h-[120px] w-[120px] rounded-full bg-red-500" />
        <View className="items-center ">
          <Text className="text-lg font-bold">Solomon Kanu</Text>
          <Text className="mt-[3px] text-base font-light">solomonkanu@gmail.com</Text>
        </View>
      </View>

      <FlatList
        className="mb-[2%] mt-[%] w-[90%]"
        data={data}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View className="mt-5">
            <TouchableOpacity
              onPress={item.onPress}
              className="items-between flex-row justify-between rounded-xl border border-gray-300 p-5">
              <View className="flex-row items-center gap-3">
                <Text>{item.icon}</Text>
                <Text className="text-base">{item.title}</Text>
              </View>
              <View>
                <SimpleLineIcons name="arrow-right" size={24} color="#3B82F6" />
              </View>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
