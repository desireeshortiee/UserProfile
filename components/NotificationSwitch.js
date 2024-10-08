import React from 'react';
import { View, Text, Switch } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { styles } from './styles'; 

export default function NotificationSwitch({
  label,
  icon,
  value,
  onValueChange,
  backgroundColor,
  rowBackgroundColor,
  textColor
}) {
  return (
    <View style={[styles.row, { backgroundColor: rowBackgroundColor }]}>
      <View style={[styles.rowIcon, { backgroundColor }]}>
        <FeatherIcon color="#fff" name={icon} size={20} />
      </View>
      <Text style={[styles.rowLabel, { color: textColor }]}>{label}</Text>
      <View style={styles.rowSpacer} />
      <Switch onValueChange={onValueChange} value={value} />
    </View>
  );
}
