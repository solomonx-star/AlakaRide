import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';


export default function Modal() {
  return (
    <>
      {/* <ScreenContent path="app/modal.js" title="Modal" /> */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </>
  );
}