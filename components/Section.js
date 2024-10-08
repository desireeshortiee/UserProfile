import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles'; 

export default function Section({ title, children, sectionTitleColor }) {
  return (
    <View style={styles.section}>
      <Text style={[styles.sectionTitle, { color: sectionTitleColor }]}>
        {title}
      </Text>
      {children}
    </View>
  );
}
