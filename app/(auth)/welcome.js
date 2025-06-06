import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useRef, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import Swiper from 'react-native-swiper';
import { onbaording } from '../../constants';
import Button from '../../components/Button';

const Onboarding = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isLastSlide = activeIndex === onbaording.length - 1;
  return (
    <SafeAreaView className="flex h-full items-center justify-between bg-white">
      <TouchableOpacity
        className="flex w-full items-end justify-end p-5"
        onPress={() => router.replace('/(auth)/sign-in')}>
        <Text className="text-md font-semibold text-black">Skip</Text>
      </TouchableOpacity>
      <Swiper
        ref={swiperRef}
        loop={false}
        dot={<View className="mx-1 h-[4px] w-[32px] rounded-full bg-gray-300" />}
        activeDot={<View className="mx-1 h-[4px] w-[32px] bg-green-300" />}
        onIndexChanged={(index) => setActiveIndex(index)}>
        {onbaording.map((item) => (
          <View key={item.id} className="flex items-center justify-center p-5">
            <Image className="h-[300px] w-full" resizeMode="contain" source={item.image} />
            <View className="mt-10 flex w-full flex-row items-center justify-center">
              <Text className="mx-10 text-center text-3xl font-bold text-black">{item.title}</Text>
            </View>

            <Text className="mx-10 mt-3 text-center text-lg font-semibold text-gray-400">
              {item.description}
            </Text>
          </View>
        ))}
      </Swiper>
      <Button
        onPress={() =>
          isLastSlide ? router.replace('/(auth)/sign-in') : swiperRef.current?.scrollBy(1)
        }
        title={isLastSlide ? 'Get started' : 'Next'}
        containerStyle="w-[90%] p-3 mt-10 mb-10"
      />
    </SafeAreaView>
  );
};

export default Onboarding;
