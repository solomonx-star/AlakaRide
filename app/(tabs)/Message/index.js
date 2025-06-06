import React from 'react';
import { View, Text } from 'react-native';
import Button from '../../../components/Button';

export default function Message() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text> Hi </Text>
      <Button title="press me" type="primary" containerStyle="w-[90%]" />
    </View>
  );
}
