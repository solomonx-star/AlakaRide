import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import React, { useState } from 'react';
import { View, Text, Image, FlatList } from 'react-native';

import Card from '../../../components/Card';

export default function Profile() {
  const [data, setdata] = useState([
    {
      icon: <Ionicons name="person" size={24} color="#3B82F6" />,
      title: 'Account',
    },
    {
      icon: <FontAwesome5 name="car-side" size={24} color="#3B82F6" />,
      title: 'My trips',
      icon1: <SimpleLineIcons name="arrow-right" size={24} color="#3B82F6" />,
    },
    {
      icon: <AntDesign name="creditcard" size={24} color="#3B82F6" />,
      title: 'My card',
      icon1: <SimpleLineIcons name="arrow-right" size={24} color="#3B82F6" />,
    },
    {
      icon: <AntDesign name="star" size={24} color="#3B82F6" />,
      title: 'Saved places',
      icon1: <SimpleLineIcons name="arrow-right" size={24} color="#3B82F6" />,
    },
    {
      icon: <Feather name="settings" size={24} color="#3B82F6" />,
      title: 'Setting',
    },
    {
      icon: <Feather name="settings" size={24} color="#3B82F6" />,
      title: 'Setting',
    },
    {
      icon: <Feather name="settings" size={24} color="#3B82F6" />,
      title: 'Setting',
    },
  ]);

  return (
    <View className="mt-[20%] flex-1 items-center">
      <View className="h-[33%] w-[90%] items-center rounded-2xl bg-blue-100 pt-[4%]">
        <View className="h-[120px] w-[120px] rounded-full bg-red-500">
          <Image source=".." />
        </View>
        <View className="items-center ">
          <Text className="text-lg font-bold">Solomon Kanu</Text>
          <Text className="mt-[3px] text-base font-light">solomonkanu@gmail.com</Text>
        </View>
      </View>

      <FlatList
        className="pt-5"
        data={data}
        renderItem={({ item }) => (<View></View>)}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
