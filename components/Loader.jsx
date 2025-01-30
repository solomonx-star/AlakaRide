import React from 'react';
import { ActivityIndicator, View } from 'react-native';

const Loader = ({ size = 'large', color = 'blue' }) => {
  return (
    <View className="flex-1 items-center justify-center">
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};

export default Loader;
