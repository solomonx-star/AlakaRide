import { Link, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { View, Text, TextInput, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../../components/Button';
const SignIn = () => {
  const router = useRouter();
  const [number, setNumber] = useState('');

  return (
    <SafeAreaView className="flex-1 items-center gap-9 pt-[80px]">
      <View className="mb-8 w-[90%]">
        <Text className="text-left text-4xl font-bold">Enter your phone number</Text>
      </View>
      <View className-="bg-red-500">
        <View className="w-[90%] flex-row items-center justify-between rounded-xl bg-gray-300 p-1">
          <Text>+232</Text>
          <TextInput
            className="w-[70%] rounded-xl bg-white p-3"
            placeholder="Enter phone number"
            onChangeText={setNumber}
            value={number}
            keyboardType="numeric"
          />
        </View>
      </View>
      <View className="mt-[15%] w-full items-center justify-center gap-2">
        <Button
          onPress={() => {
            console.log('Home pressed');
            router.push('/(tabs)/Home');
          }}
          title="Sign In"
          containerStyle="w-[90%] rounded-xl p-5"
        />
        <Button
          onPress={() => router.push('/sign-up')}
          title="Sign up here"
          containerStyle="w-[90%] rounded-lg border-none"
          type="secondary"
        />
      </View>
      <StatusBar />
    </SafeAreaView>
  );
};

export default SignIn;
