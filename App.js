import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Switch,
  Image,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export default function MyProfile() { 
  const [form, setForm] = useState({
    darkMode: false,
    emailNotifications: true,
    pushNotifications: false,
  });

  const [loading, setLoading] = useState(true); 
  useEffect(() => {
    
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 2000);
    return () => clearTimeout(timer); 
  }, []);

  // Dynamic styles for dark mode
  const backgroundColor = form.darkMode ? '#000' : '#cdebf9'; 
  const textColor = form.darkMode ? '#fff' : '#000';        
  const rowBackgroundColor = form.darkMode ? '#444' : '#f2f2f2';  
  const sectionTitleColor = form.darkMode ? '#bbb' : '#000';  

  if (loading) {
    return (
      <SafeAreaView style={[styles.loadingContainer, { backgroundColor: form.darkMode ? '#000' : '#cdebf9' }]}>
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
  }
  
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: backgroundColor }}>
      <View style={styles.profile}>
        <TouchableOpacity
          onPress={() => {
            
          }}>
          <View style={styles.profileAvatarWrapper}>
            <Image
              alt="profile picture"
              source={{
                uri: 'https://i.imgur.com/z8vPVf2.jpeg',
              }}
              style={styles.profileAvatar} />
            <TouchableOpacity
              onPress={() => {
                
              }}>
              <View style={styles.profileAction}>
                <FeatherIcon color="#fff" name="edit-3" size={15} />
              </View>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <View>
          <Text style={[styles.profileName, { color: textColor }]}>Maria Desiree Ganohay</Text>
          <Text style={[styles.profileAddress, { color: textColor }]}>
            Zone 1 Upper Bantiles, Bugo
          </Text>
        </View>
      </View>

      <ScrollView>
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: sectionTitleColor }]}>Account Information</Text>

          <TouchableOpacity
            onPress={() => {
              
            }}
            style={[styles.row, { backgroundColor: rowBackgroundColor }]}>
            <View style={[styles.rowIcon, { backgroundColor: '#fe9400' }]}>
              <FeatherIcon color="#fff" name="user" size={20} />
            </View>
            <Text style={[styles.rowLabel, { color: textColor }]}>Name: Maria Desiree Ganohay</Text>
            <View style={styles.rowSpacer} />
            <FeatherIcon
              color={form.darkMode ? "#fff" : "#C6C6C6"}
              name="chevron-right"
              size={20} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              
            }}
            style={[styles.row, { backgroundColor: rowBackgroundColor }]}>
            <View style={[styles.rowIcon, { backgroundColor: '#007afe' }]}>
              <FeatherIcon color="#fff" name="mail" size={20} />
            </View>
            <Text style={[styles.rowLabel, { color: textColor }]}>Email: maria.ganohay@gmail.com</Text>
            <View style={styles.rowSpacer} />
            <FeatherIcon
              color={form.darkMode ? "#fff" : "#C6C6C6"}
              name="chevron-right"
              size={20} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              
            }}
            style={[styles.row, { backgroundColor: rowBackgroundColor }]}>
            <View style={[styles.rowIcon, { backgroundColor: '#32c759' }]}>
              <FeatherIcon color="#fff" name="lock" size={20} />
            </View>
            <Text style={[styles.rowLabel, { color: textColor }]}>Change Password</Text>
            <View style={styles.rowSpacer} />
            <FeatherIcon
              color={form.darkMode ? "#fff" : "#C6C6C6"}
              name="chevron-right"
              size={20} />
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: sectionTitleColor }]}>Preferences</Text>

          <TouchableOpacity
            onPress={() => {
              
            }}
            style={[styles.row, { backgroundColor: rowBackgroundColor }]}>
            <View style={[styles.rowIcon, { backgroundColor: '#fe9400' }]}>
              <FeatherIcon color="#fff" name="globe" size={20} />
            </View>
            <Text style={[styles.rowLabel, { color: textColor }]}>Language</Text>
            <View style={styles.rowSpacer} />
            <FeatherIcon
              color={form.darkMode ? "#fff" : "#C6C6C6"}
              name="chevron-right"
              size={20} />
          </TouchableOpacity>

          <View style={[styles.row, { backgroundColor: rowBackgroundColor }]}>
            <View style={[styles.rowIcon, { backgroundColor: '#007afe' }]}>
              <FeatherIcon color="#fff" name="moon" size={20} />
            </View>
            <Text style={[styles.rowLabel, { color: textColor }]}>Dark Mode</Text>
            <View style={styles.rowSpacer} />
            <Switch
              onValueChange={darkMode => setForm({ ...form, darkMode })}  
              value={form.darkMode} />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: sectionTitleColor }]}>Notifications</Text>

          <View style={[styles.row, { backgroundColor: rowBackgroundColor }]}>
            <View style={[styles.rowIcon, { backgroundColor: '#38C959' }]}>
              <FeatherIcon color="#fff" name="at-sign" size={20} />
            </View>
            <Text style={[styles.rowLabel, { color: textColor }]}>Email Notifications</Text>
            <View style={styles.rowSpacer} />
            <Switch
              onValueChange={emailNotifications =>
                setForm({ ...form, emailNotifications })
              }
              value={form.emailNotifications} />
          </View>

          <View style={[styles.row, { backgroundColor: rowBackgroundColor }]}>
            <View style={[styles.rowIcon, { backgroundColor: '#38C959' }]}>
              <FeatherIcon color="#fff" name="bell" size={20} />
            </View>
            <Text style={[styles.rowLabel, { color: textColor }]}>Push Notifications</Text>
            <View style={styles.rowSpacer} />
            <Switch
              onValueChange={pushNotifications =>
                setForm({ ...form, pushNotifications })
              }
              value={form.pushNotifications} />
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#dff2fb', 
  },
  loadingText: {
    fontSize: 30, 
    fontWeight: '900', 
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'Black', 
    textAlign: 'center', 
  },
  profile: {
    padding: 24,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  profileAvatarWrapper: {
    position: 'relative',
    marginTop: 20,
  },
  profileAvatar: {
    width: 72,
    height: 72,
    borderRadius: 9999,
  },
  profileAction: {
    position: 'absolute',
    right: -4,
    bottom: -10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 28,
    height: 28,
    borderRadius: 9999,
    backgroundColor: '#007bff',
  },
  profileName: {
    marginTop: 20,
    fontSize: 19,
    fontWeight: '600',
  },
  profileAddress: {
    marginTop: 5,
    fontSize: 16,
    color: '#989898',
  },
  section: {
    paddingHorizontal: 24,
    marginBottom: 32,
  },
  sectionTitle: {
    paddingVertical: 12,
    fontSize: 12,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 1.1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 50,
    borderRadius: 8,
    marginBottom: 12,
    paddingHorizontal: 12,
  },
  rowIcon: {
    width: 32,
    height: 32,
    borderRadius: 9999,
    marginRight: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowLabel: {
    fontSize: 17,
  },
  rowSpacer: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
});
