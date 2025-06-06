import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import axios from 'axios';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Modal,
  TextInput,
  TouchableWithoutFeedback,
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Map from '../../../components/MapView';
import { useLocation } from '../../../context/locationContex';

const API_KEY = '23a89393b95f42449b2719c4cf8823b3';

export default function Home() {
  const router = useRouter();
  const { address, setDest, dest } = useLocation();
  // const [destination, setDestination] = useState(null);
  const [isModal, setIsModalVisible] = useState(false);
  const [search, setSearch] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [data, setData] = useState([
    {
      id: 1,
      icon: <FontAwesome name="home" size={30} color="black" />,
      title: 'Home',
      description: 'Wilberforce street',
      icon2: 'icon2',
    },
    {
      id: 2,
      icon: <MaterialCommunityIcons name="office-building-outline" size={30} color="black" />,
      title: 'Office',
      description: address,
      icon2: 'icon2',
    },
    {
      id: 3,
      icon: 'icon',
      title: 'title',
      description: 'description',
      icon2: 'icon2',
    },
  ]);

  // Example Usage
  // reverseGeocode([dest]).then((dest) => console.log(dest));

  const fetchSuggestions = async (text) => {
    setSearch(text);
    if (!text) {
      setSuggestions([]);
      return;
    }

    try {
      const url = `https://api.geoapify.com/v1/geocode/autocomplete?text=${text}&apiKey=${API_KEY}`;
      const response = await axios.get(url);

      if (response.data?.features) {
        setSuggestions(response.data.features);
      } else {
        setSuggestions([]);
      }
    } catch (error) {
      console.error('Error fetching suggestions:', error.response?.data || error.message);
    }
  };

  const selectDestination = async (place) => {
    if (!place?.geometry?.coordinates) {
      Alert.alert('Error', 'Invalid place selected.');
      return;
    }

    const [longitude, latitude] = place.geometry.coordinates;
    if (typeof latitude !== 'number' || typeof longitude !== 'number') {
      Alert.alert('Error', 'Invalid coordinates.');
      return;
    }

    const reverseGeocode = async (latitude, longitude) => {
      try {
        const response = await axios.get(
          `https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&apiKey=${API_KEY}`
        );

        if (response.data?.features?.length > 0) {
          return response.data.features[0].properties.formatted; // Human-readable address
        } else {
          return 'Unknown Location';
        }
      } catch (error) {
        console.error('Reverse Geocoding Error:', error);
        return 'Unknown Location';
      }
    };

    const destination = await reverseGeocode(latitude, longitude);
    // Make sure address is not undefined or null
    const selectedAddress = place.properties.formatted || 'Unknown Address';
    setDest({ latitude, longitude, destination });
    setSearch(selectedAddress);
    setSuggestions([]);`` 

    // Safely pass the parameters to the router
    router.push({
      pathname: '/(driver)/available',
      params: {
        latitude,
        longitude,
        address: selectedAddress, // Make sure this is not undefined or null
      },
    });
  };

  return (
    <SafeAreaView className=" flex-1 items-center justify-center">
      <View className="h-[100%] w-full flex-1">
        <Map
          // isVisible={isModal}
          search={search}
          suggestions={suggestions}
          fetchSuggestions={fetchSuggestions}
          selectDestination={selectDestination}
          destination={dest}
        />
      </View>
      <View className="absolute top-[73%] h-[30%] w-full items-center rounded-tl-[40px] rounded-tr-[40px] bg-white">
        <View className="flex-row items-center gap-[200px] pt-5">
          <Text className="text-xl font-bold">Where to?</Text>
          <TouchableOpacity
            onPress={() => setIsModalVisible(true)}
            className="rounded-[10px] bg-[#47CA6C] p-2">
            <Text className="text-white">New Trip</Text>
          </TouchableOpacity>
        </View>
        <View className="mt-5 w-[90%]  border border-b-0 border-gray-300" />
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={({ item }) => (
            <View className="flex-row items-center justify-between pt-4">
              <View className="flex flex-row items-center gap-5 p-1">
                <View className="rounded-lg bg-gray-200 p-1">
                  <Text>{item.icon}</Text>
                </View>
                <View>
                  <Text className="text-base font-bold">{item.title}</Text>
                  <Text className="text-">{item.description}</Text>
                </View>
              </View>
              <TouchableOpacity onPress={() => router.push('/(driver)/available')} className="">
                <Feather name="edit-3" size={24} color="gray" />
              </TouchableOpacity>
            </View>
          )}
          className="w-[90%]"
        />
      </View>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <Modal
          visible={isModal}
          animationType="slide"
          transparent
          onRequestClose={() => setIsModalVisible(false)}>
          {/* Dismiss Keyboard & Close Modal when tapped outside */}
          <TouchableWithoutFeedback
            onPress={() => {
              Keyboard.dismiss();
              // setIsModalVisible(false);
            }}>
            <View style={{ flex: 1, justifyContent: 'flex-end' }}>
              <View
                style={{
                  backgroundColor: 'white',
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                  padding: 20,
                  height: '40%',
                  alignItems: 'center',
                }}>
                {/* Close Button */}
                <TouchableOpacity
                  style={{ alignSelf: 'flex-end' }}
                  onPress={() => setIsModalVisible(false)}>
                  <Text>Close</Text>
                </TouchableOpacity>

                {/* Content */}
                <View className="w-[90%] gap-6 ">
                  {/* Current Address */}
                  <View className="flex-row items-center gap-3 ">
                    <Entypo name="location-pin" size={35} color="black" />
                    <View className="gap-3">
                      <Text className="text-gray-400">Current Address</Text>
                      <Text className="">{address}</Text>
                    </View>
                  </View>

                  {/* Divider */}
                  <View className="border-[0.5px]" />

                  {/* Drop-off Input */}
                  <View className="flex-row items-center gap-3">
                    <Entypo name="location-pin" size={35} color="green" />
                    <View className="gap-3">
                      <Text className="text-gray-400">Drop off</Text>
                      <TextInput
                        value={search}
                        onChangeText={fetchSuggestions}
                        placeholder="Enter Destination"
                        className="w-full"
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
