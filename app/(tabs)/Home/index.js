import React from 'react';
import { View, Text } from 'react-native';
import Button from '../../../components/Button';

import Map from '../../../components/MapView';

export default function Home() {
  return (
    <View className="flex-1 items-center justify-center">
      <Map />
    </View>
  );
}
