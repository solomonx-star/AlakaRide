import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import { Entypo } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const Book = () => {
  const router = useRouter();

  return (
    <View className="flex-1 bg-white p-4">
      <View className=" ">
        <TouchableOpacity
          onPress={() => {
            router.back();
          }}
          className="h-14 w-14 items-center justify-center rounded-full bg-white">
          <Entypo name="chevron-thin-left" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <LinearGradient
        colors={['rgba(0,0,0,0.8)', 'transparent']}
        style={{ position: 'absolute', left: 0, top: 0, right: 0, height: 300 }}
        // className="absolute left-0 right-0 top-0 h-20"
      />

      <LinearGradient
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={{ padding: 15, alignItems: 'center', borderRadius: 10 }}>
        <Text className="font-lg bg-transparent text-white">Master card</Text>
      </LinearGradient>
      {/* <FlatList /> */}
    </View>
  );
};

export default Book;
