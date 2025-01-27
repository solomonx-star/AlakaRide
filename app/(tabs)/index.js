import React from 'react';
import { View, Text } from 'react-native';

import Button from '../../components/Button';

export default function Home() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text>Hello</Text>
      <Button title="Submit" type="secondary" />
    </View>
  );
}
