import React from 'react';
import { View, Text, Image } from 'react-native';

const Avatar = ({ avatar, name }) => {
  return (
    <View className="h-36 w-36 rounded-full bg-red-500">
      <Image source={{ uri: avatar }} style={{ width: 50, height: 50 }} />
      <Text>{name}</Text>
    </View>
  );
};

export default Avatar;
