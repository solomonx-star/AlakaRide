import { useRef, useState } from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Button from '../../components/Button';
import Pin from '../../components/Pin';

const Verification = () => {
  return (
    <SafeAreaView className="flex-1 items-center gap-9 pt-[80px]">
      <View className="mb-8 w-[90%]">
        <Text className="text-left text-4xl font-bold">Verification</Text>
        <Text>We sent a code to the number +232 33 800 146</Text>
      </View>
      <View>
        <View className="">
          <Pin length={6} />
        </View>
      </View>
      <Button title="Resend OTP" containerStyle="w-[90%] mt-[30%] p-5 rounded-xl" />
    </SafeAreaView>
  );
};

export default Verification;
