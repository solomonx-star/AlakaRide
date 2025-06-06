import { Feather } from '@expo/vector-icons';
import { Slot, Stack, useRouter } from 'expo-router';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function _layout() {
  const router = useRouter();
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        headerLeft: () => (
          <View className="pl-4">
            <TouchableOpacity
              onPress={() => {
                router.back();
              }}
              className="h-6 w-6 items-center justify-center rounded-full border-[0.2px] border-[#787878] bg-blue-500">
              <Feather name="arrow-left" size={24} color="white" />
            </TouchableOpacity>
          </View>
        ),
      }}>
      <Stack.Screen name="index" options={{}} />
      <Stack.Screen name="Account" options={{}} />
      <Stack.Screen name="MyTrips" options={{}} />
      <Stack.Screen name="MyCard" options={{}} />
      <Stack.Screen name="SavedPlaces" options={{}} />
      <Stack.Screen name="Settings" options={{}} />
    </Stack>
  );
}
