import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, title, type = 'primary' }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`rounded px-4 py-3 ${
        type === 'secondary' ? 'border border-green-500 bg-white' : 'bg-green-500'
      }`}>
      <Text
        className={`text-center font-bold ${
          type === 'secondary' ? 'text-green-500' : 'text-white'
        }`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
