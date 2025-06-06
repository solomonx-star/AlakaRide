import '../global.css';

import { Slot } from 'expo-router';
import { LocationProvider } from '../context/locationContex';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

export default function RootLayout() {
  return (
    <LocationProvider>
      <Slot />
    </LocationProvider>
  );
}
