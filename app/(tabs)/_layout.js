import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Link, Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'black',
      }}>
      <Tabs.Screen
        name="index"
        options={{
          href: null,
          title: 'Tab One',
          tabBarIcon: ({ color }) => <Entypo name="home" size={24} color="black" />,
          headerRight: () => (
            <Link href="/modal" asChild>
              {/* <HeaderButton /> */}
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="Home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Entypo name="home" size={24} color="green" />,
          headerRight: () => (
            <Link href="/modal" asChild>
              {/* <HeaderButton /> */}
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="Message"
        options={{
          title: 'Message',
          tabBarIcon: ({ color }) => <AntDesign name="message1" size={24} color="green" />,
          headerRight: () => (
            <Link href="/modal" asChild>
              {/* <HeaderButton /> */}
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <Ionicons name="person" size={24} color="green" />,
          headerRight: () => (
            <Link href="/modal" asChild>
              {/* <HeaderButton /> */}
            </Link>
          ),
        }}
      />
    </Tabs>
  );
}
