import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { styles } from './styles'; 

export default function ImageComponent({ uri, onEdit }) {
  return (
    <TouchableOpacity onPress={onEdit}>
      <View style={styles.profileAvatarWrapper}>
        <Image
          alt="profile picture"
          source={{ uri }}
          style={styles.profileAvatar}
        />
        <TouchableOpacity onPress={onEdit}>
          <View style={styles.profileAction}>
            <FeatherIcon color="#fff" name="edit-3" size={15} />
          </View>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}
