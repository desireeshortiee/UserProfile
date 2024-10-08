import React from 'react';
import { SafeAreaView, View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

const LoadingScreen = ({ darkMode }) => {
  const backgroundColor = darkMode ? '#000' : '#cdebf9';

  return (
    <SafeAreaView style={[styles.loadingContainer, { backgroundColor }]}>
      <View style={{ alignItems: 'center' }}>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <FeatherIcon name="cloud" size={30} color="#B0C4DE" />
          <FeatherIcon name="sun" size={30} color="#FFD700" style={{ marginHorizontal: 10 }} />
          <FeatherIcon name="cloud" size={30} color="#B0C4DE" />
        </View>
        <Text style={styles.loadingText}>Profile And Settings App</Text>
      </View>
      <ActivityIndicator size="large" color="#007bff" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'Black',
    textAlign: 'center',
  },
});

export default LoadingScreen;
