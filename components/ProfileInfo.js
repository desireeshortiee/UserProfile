import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles'; 
export default function ProfileInfo({ name, address, textColor }) {
  return (
    <View>
      <Text style={[styles.profileName, { color: textColor }]}>{name}</Text>
      <Text style={[styles.profileAddress, { color: textColor }]}>{address}</Text>
    </View>
  );
}
