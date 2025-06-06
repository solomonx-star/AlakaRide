import { Entypo } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const MyCard = () => {
  const router = useRouter();
  return (
    <View>
      <View className="pl-4">
        <TouchableOpacity
          onPress={() => {
            router.back();
          }}
          className="h-14 w-14 items-center justify-center rounded-full bg-white">
          <Entypo name="chevron-thin-left" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MyCard;
