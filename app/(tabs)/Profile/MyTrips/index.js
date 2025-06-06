import { Entypo } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import MyTrips from '../../../../components/Trips/MyTrip';
import RideHistory from '../../../../components/Trips/RideHistory';

const MyTrip = () => {
  const router = useRouter();
  const [trip, setTrip] = useState('Trips');




  
  return (
    <View className="m-[5%] mt-[5%]">
      <View className="">
        <TouchableOpacity
          onPress={() => {
            router.back();
          }}
          className="h-14 w-14 items-center justify-center rounded-full bg-white">
          <Entypo name="chevron-thin-left" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View className="mt-[5%]">
        <Text className="text-2xl">MyTrips</Text>
      </View>
      <View className="mt-10 w-[100%] flex-row items-center justify-between self-center rounded-full bg-gray-300 p-1">
        {trip === 'Trips' ? (
          <View className="w-[50%] items-center rounded-full bg-white p-4">
            <Text className="">My Trips</Text>
          </View>
        ) : (
          <View className="w-[50%] items-center p-4">
            <TouchableOpacity
              onPress={() => {
                setTrip('Trips');
              }}
              className="">
              <Text>My Trips</Text>
            </TouchableOpacity>
          </View>
        )}
        {trip === 'History' ? (
          <View className="w-[50%] items-center rounded-full bg-white p-4">
            <Text>Ride History</Text>
          </View>
        ) : (
          <View className="w-[50%] items-center p-4">
            <TouchableOpacity
              onPress={() => {
                setTrip('History');
              }}
              className="">
              <Text>Ride History</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
      {trip === 'Trips' ? <MyTrips /> : trip === 'History' ? <RideHistory /> : null}
    </View>
  );
};

export default MyTrip;
