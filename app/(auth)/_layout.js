import { Stack } from 'expo-router';

const _layout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="sign-in" options={{}} />
      <Stack.Screen name="sign-up" options={{}} />
    </Stack>
  );
};

export default _layout;
