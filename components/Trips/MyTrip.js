import { View, Text, TouchableOpacityComponent, TouchableOpacity } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Button from '../Button';
import Info from '../Info';
import MapCard from '../MapCard';
const TripCard = () => {
  return (
    <View className="mt-[6%] p-1">
      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center gap-6">
          <View className="h-14 w-14 rounded-full bg-red-400" />
          <View>
            <Text className="text-lg font-medium">Solomon Kanu</Text>
            <Text>12 Completed Ride</Text>
          </View>
        </View>
        <View className="flex-row gap-5">
          <TouchableOpacity className="h-10 w-10 items-center justify-center rounded-full bg-white">
            <AntDesign name="message1" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity className="h-10 w-10 items-center justify-center rounded-full bg-white">
            <MaterialIcons name="add-call" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Info from="Wilberforce Cole Drive" to="88 Pademba Road" />
      </View>
      <View className="mt-[8%] flex-row justify-between">
        <Button
          type="secondary"
          title="Cancel Ride"
          containerStyle="w-[45%] rounded-2xl border border-red-400 justify-center p-6"
        />
        <Button
          type="primary"
          title="+  Add stops"
          containerStyle="w-[45%] rounded-2xl justify-center"
        />
      </View>
    </View>
  );
};

export default TripCard;
