import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Link, Tabs } from 'expo-router';
import { CgHomeAlt } from 'react-icons/cg';
import { Image, View } from 'react-native';

import { icons } from '../../constants/icon';

export default function TabLayout() {
  const img = require('../../assets/messageblack.jpeg');
  const img1 = require('../../assets/message.jpeg');
  const img2 = require('../../assets/profile.jpeg');
  const TabIcon = ({ focused, source }) => (
    <View
      className={`flex flex-row items-center justify-center rounded-full ${focused ? 'bg-gray-' : ''}`}>
      <View
        className={`h-10 w-10 items-center justify-center rounded-full ${focused ? 'bg-gray-30' : ''}`}>
        <Image source={source} tintColor="" resizeMode="contain" className="h-7 w-7" />
      </View>
    </View>
  );
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        // tabBarActiveTintColor: '#',
        // tabBarInactiveTintColor: 'white',
        tabBarShowLabel: false,
        // tabBarStyle: {
        //   backgroundColor: 'black',
        //   // borderRadius: 50,
        //   // paddingBottom: 0,
        //   // marginBottom: 20,
        //   // marginHorizontal: 20,
        //   overflow: 'hidden',
        //   // position: 'absolute',
        //   flexDirection: 'row',
        //   alignItems: 'center',
        //   justifyContent: 'space-between',
        //   display: 'flex',
        //   height: 70,
        // },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          href: null,
          title: 'Tab One',
          tabBarIcon: ({ focused, color }) => <TabIcon />,
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
          // title: 'Home',
          tabBarIcon: ({ focused, color }) => (
            <TabIcon focused={focused} source={img} color={color} />
          ),
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
          // title: 'Message',
          tabBarIcon: ({ focused, color }) => <TabIcon focused={focused} source={img1} />,
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
          // title: 'Profile',
          tabBarIcon: ({ focused, color }) => <TabIcon focused={focused} source={img2} />,
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
