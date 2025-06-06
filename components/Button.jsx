import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, title = '', type = 'primary', containerStyle = '', ...props }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`rounded ${
        type === 'secondary' ? 'border-none border-green-500' : 'bg-green-500'
      } ${containerStyle}`}
      {...props}>
      <Text
        className={`text-center font-bold ${type === 'secondary' ? 'text-black' : 'text-white'}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
