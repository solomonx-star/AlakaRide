import React from 'react';
import { View, Text, Modal } from 'react-native';

const ModalView = ({ isVisible, onClose, children }) => {
  return (
    <Modal visible={isVisible} animationType="slide" transparent onRequestClose={onClose}>
      <View className="">
        <Text>Helo modal</Text>
      </View>
    </Modal>
  );
};

export default ModalView;
