import { AntDesign, Entypo, SimpleLineIcons } from '@expo/vector-icons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, Switch } from 'react-native';

const Settings = () => {
  const [data, setdata] = useState([
    {
      id: 1,
      icon: <Ionicons name="notifications-outline" size={24} color="#3B82F6" />,
      title: 'Notification Setting',
      onPress: () => router.push('/Profile/Settings/Notification'),
    },
    {
      id: 2,
      icon: <AntDesign name="creditcard" size={24} color="#3B82F6" />,
      title: 'My Card',
      onPress: () => router.push('/Profile/MyTrips'),
    },
    {
      id: 3,
      icon: <AntDesign name="star" size={24} color="#3B82F6" />,
      title: 'Saved Places',
      onPress: () => router.push('/Profile/MyCard'),
    },
    {
      id: 4,
      icon: <FontAwesome6 name="gifts" size={24} color="#3B82F6" />,
      title: 'Gift Cards',
      onPress: () => router.push('/Profile/SavedPlaces'),
    },
    {
      id: 5,
      icon: <Entypo name="moon" size={24} color="#3B82F6" />,
      title: 'Dark Mode',
      onPress: () => router.push('/Profile/Settings'),
      darkMode: <Switch />,
    },
    {
      id: 6,
      icon: <Entypo name="location-pin" size={24} color="#3B82F6" />,
      title: 'Location',
      onPress: () => router.push('/Profile/Settings'),
    },
  ]);

  const router = useRouter();
  return (
    <View className="m-[5%] mt-[5%]">
      <View className="">
        <TouchableOpacity
          onPress={() => {
            router.back();
          }}
          className="h-14 w-14 items-center justify-center rounded-full bg-white">
          <Entypo name="chevron-thin-left" size={24} color="#3B82F6" />
        </TouchableOpacity>
      </View>
      <View className="mt-[5%]">
        <Text className="text-2xl">Settings</Text>
      </View>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View className="mt-5">
            <TouchableOpacity
              onPress={item.onPress}
              className="items-between flex-row justify-between rounded-xl border border-gray-300 p-5">
              <View className="flex-row items-center gap-3">
                <Text>{item.icon}</Text>
                <Text className="text-base">{item.title}</Text>
              </View>
              <View className="flex-row">
                <View>{item.darkMode}</View>
                <SimpleLineIcons name="arrow-right" size={24} color="#3B82F6" />
              </View>
            </TouchableOpacity>
          </View>
        )}
      />
      <TouchableOpacity className=" mt-[13%] w-[35%] flex-row items-center gap-3 rounded-xl bg-red-200 p-4 pr-2">
        <Text>
          <AntDesign name="logout" size={24} color="red" />
        </Text>
        <Text className="text-lg text-red-600">Log out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Settings;
