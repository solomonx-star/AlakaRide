import React from 'react';
import { Text, Pressable } from 'react-native';

const Button = ({ onPress, title, type = 'primary' }) => {
  const isSecondary = type === 'secondary';
  return (
    <Pressable
      onPress={onPress}
      className={`rounded px-4 py-3 ${isSecondary ? 'border border-blue-500 bg-white' : 'bg-blue-500'}`}>
      <Text className={`font-bold ${isSecondary ? 'text-blue-500' : 'text-white'}`}>{title}</Text>
    </Pressable>
  );
};

export default Button;
