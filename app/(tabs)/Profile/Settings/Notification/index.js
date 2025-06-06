import { Entypo, SimpleLineIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { View, Text, TouchableOpacity, Switch } from 'react-native';

const Notification = () => {
  const router = useRouter();
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
        <Text className="text-2xl">Notification Settings</Text>
      </View>
      <View className="mt-[10%]">
        <View className="gap-4">
          <Text className="p-1 text-xl text-gray-400">Mobile Notification</Text>
          <View className="border border-b-0 border-gray-300" />
          <View className="flex-row justify-between p-1">
            <Text className="text-lg">Enable text message Notification</Text>
            <Switch />
          </View>
          <View className="border border-b-0 border-gray-300" />
          <TouchableOpacity className=" flex-row items-center justify-between p-1">
            <Text className="text-lg">Push Notification</Text>
            <SimpleLineIcons name="arrow-right" size={24} color="gray" />
          </TouchableOpacity>
          <View className="border border-b-0 border-gray-300" />
        </View>
      </View>
      <View className="mt-[10%] gap-4">
        <Text className="p-1 text-xl text-gray-400">Email Notification</Text>
        <View className="border border-b-0 border-gray-300" />
        <View className="flex-row items-center justify-between p-1">
          <Text className="text-lg">Promotions and announcements</Text>
          <Switch />
        </View>
        <View className="border border-b-0 border-gray-300" />
      </View>
    </View>
  );
};

export default Notification;
