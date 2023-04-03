import React from 'react';
import { View } from 'react-native';

import Selector from '../components/Selector';

export default function SettingsScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <Selector />
    </View>
  );
}