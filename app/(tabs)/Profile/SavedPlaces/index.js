import { Entypo } from '@expo/vector-icons';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Alert, FlatList } from 'react-native';

import Button from '../../../../components/Button';

const SavedPlaces = () => {
  const router = useRouter();
  const [input, setInput] = useState('');
  const [places, setPlaces] = useState([]);
  const addPlaces = () => {
    if (!input.trim()) {
      Alert.alert('Please enter a place');
      return;
    }
    if (places.length >= 3) {
      Alert.alert('You can only add up to 3 saved places.');
      return;
    }
    setPlaces([...places, { id: Math.random(), name: input }]);
    setInput('');
  };

  // Deletes a place by filtering out the place with the matching id
  const deletePlace = (id) => {
    setPlaces((prevPlaces) => prevPlaces.filter((place) => place.id !== id));
  };

  const savedPlaces = [
    {
      icon: <FontAwesome5 name="home" size={26} color="black" />,
      title: 'Home (10 mins ago and 2 km)',
      title2: 'Wilberforce ',
    },
    {
      icon: <MaterialCommunityIcons name="office-building-outline" size={26} color="black" />,
      title: 'Office ( 1 hour ago and 3 km)',
      title2: '88 Pademba road',
    },
  ];
  return (
    <View className="m-[5%] flex-1">
      <View className="flex-1">
        <View className="">
          <TouchableOpacity
            onPress={() => {
              router.back();
            }}
            className="h-14 w-14 items-center justify-center rounded-full bg-white">
            <Entypo name="chevron-thin-left" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View className="mt-[3%]">
          <Text className="text-2xl">Saved Places</Text>
        </View>
        <View className="h-[] gap-7 rounded-xl bg-gray-300 p-5">
          <Text className="text-lg font-medium">{savedPlaces.length} Saved Places</Text>
          {savedPlaces.map((item, index) => (
            <View key={index} className="flex-row items-center justify-between ">
              <View className="flex-row items-center gap-4">
                <Text>{item.icon}</Text>
                <View>
                  <Text className="text-base">{item.title}</Text>
                  <Text className="text-base">{item.title2}</Text>
                </View>
              </View>

              <TouchableOpacity>
                <Feather name="edit-3" size={26} color="black" />
              </TouchableOpacity>
            </View>
          ))}
        </View>
        <View className="mt-5">
          <Text className="text-xl font-medium">Add saved Places</Text>
          <FlatList
            data={places}
            renderItem={({ item }) => (
              <View
                key={item.id}
                className="mt-2 flex-row justify-between rounded-xl border border-gray-400 p-5">
                <Text>{item.name}</Text>
                <TouchableOpacity onPress={() => deletePlace(item.id)}>
                  <Entypo name="cross" size={24} color="black" />
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      </View>
      <View className="gap-2">
        <TextInput
          value={input}
          onChangeText={setInput}
          placeholder="Title your Places"
          className="mt-6 rounded-xl border border-gray-400 p-3"
        />
        <Button onPress={addPlaces} title="Save Places" containerStyle="p-6 rounded-xl" />
      </View>
    </View>
  );
};

export default SavedPlaces;
