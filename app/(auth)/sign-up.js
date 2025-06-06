import React, { useState } from 'react';
import { Link, useRouter } from 'expo-router';
import { View, Text, TextInput } from 'react-native';
import Zocial from '@expo/vector-icons/Zocial';
import { SafeAreaView } from 'react-native-safe-area-context';
import Fontisto from '@expo/vector-icons/Fontisto';
import Ionicons from '@expo/vector-icons/Ionicons';
import Button from '../../components/Button';

const SignUp = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  return (
    <SafeAreaView className="flex-1 items-center gap-9 pt-[80px]">
      <View className="mb-8 w-[90%]">
        <Text className="text-left text-4xl font-bold">Sign up with Email</Text>
      </View>

      <View className="w-full items-center gap-5">
        <View className="w-[90%] flex-row items-center gap-2 rounded-xl bg-white p-3">
          <Zocial name="email" size={20} color="#22c55e" />
          <TextInput
            className="w-[90%]"
            placeholder="Enter email address"
            onChangeText={setEmail}
            value={email}
          />
        </View>
        <View className="w-[90%] flex-row items-center gap-2 rounded-xl bg-white p-3">
          <Ionicons name="person" size={20} color="#22c55e" />
          <TextInput
            className="w-[90%]"
            placeholder="Enter Full name"
            onChangeText={setName}
            value={name}
          />
        </View>
        <View className="w-[90%] flex-row items-center gap-2 rounded-xl bg-white p-3">
          <Fontisto name="locked" size={20} color="#22c55e" />
          <TextInput
            className="w-[90%]"
            placeholder="Enter Password"
            onChangeText={setPassword}
            value={password}
          />
        </View>
      </View>
      <View className="mt-[15%] w-full items-center justify-center gap-2">
        <Button
          onPress={() => router.push('/sign-up')}
          title="Sign Up"
          containerStyle="w-[90%] rounded-xl p-5"
        />
        <Button
          type="secondary"
          onPress={() => router.push('/sign-in')}
          title="Sign in here"
          containerStyle="w-[90%] rounded-lg"
        />
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
