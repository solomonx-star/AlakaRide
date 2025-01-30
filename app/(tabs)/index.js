import React from 'react';
import { View, Text } from 'react-native';
import { Redirect } from 'expo-router';

import Avatar from '../../components/Avatar';
import Button from '../../components/Button';
import Map from '../../components/MapView';

export default function Home() {
  return <Redirect href="/(tabs)/Home" />;
}
