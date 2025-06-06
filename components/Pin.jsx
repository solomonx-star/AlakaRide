import { useRef, useState } from 'react';
import { View, TextInput } from 'react-native';

const Pin = ({ length, onChange }) => {
  const [values, setValues] = useState(Array(length).fill(''));
  const [displayValues, setDisplayValues] = useState(Array(length).fill(''));

  const inputs = useRef([]);

  const handleChange = (text, index) => {
    const newValues = [...values];
    newValues[index] = text;
    setValues(newValues);

    if (text.length === 1 && index < length - 1) {
      inputs.current[index + 1].focus();
    }

    if (onChange) {
      onChange(newValues.join(''));
    }
    setTimeout(() => {
      const newDisplayValues = [...displayValues];
      newDisplayValues[index] = '*';
      setDisplayValues(newDisplayValues);
    }, 400);
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === 'Backspace' && index > 0 && values[index] === '') {
      inputs.current[index - 1].focus();
    }
  };
  return (
    <View className="flex-row gap-2">
      {values.map((value, index) => (
        <TextInput
          key={index}
          className="h-14 w-14 items-center justify-center rounded border border-green-500 text-center"
          keyboardType="number-pad"
          maxLength={1}
          value={displayValues}
          onChangeText={(text) => handleChange(text, index)}
          onKeyPress={(e) => handleKeyPress(e, index)}
          ref={(ref) => (inputs.current[index] = ref)}
        />
      ))}
    </View>
  );
};

export default Pin;
