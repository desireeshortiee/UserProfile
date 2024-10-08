import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Switch,
  Image,
} from 'react-native';
import LoadingScreen from './LoadingScreen'; 
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

  
  const backgroundColor = form.darkMode ? '#000' : '#cdebf9';
  const textColor = form.darkMode ? '#fff' : '#000';        
  const rowBackgroundColor = form.darkMode ? '#444' : '#f2f2f2';  
  const sectionTitleColor = form.darkMode ? '#bbb' : '#000'; 

  if (loading) {
    return <LoadingScreen darkMode={form.darkMode} />; 
  }
  
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: backgroundColor }}>
      <View style={styles.profile}>
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.profileAvatarWrapper}>
            <Image
              alt="profile picture"
              source={{ uri: 'https://i.imgur.com/z8vPVf2.jpeg' }}
              style={styles.profileAvatar} />
            <TouchableOpacity onPress={() => {}}>
              <View style={styles.profileAction}>
                <FeatherIcon color="#fff" name="edit-3" size={15} />
              </View>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        <View>
          <Text style={[styles.profileName, { color: textColor }]}>Maria Desiree Ganohay</Text>
          <Text style={[styles.profileAddress, { color: textColor }]}>Zone 1 Upper Bantiles, Bugo</Text>
        </View>
      </View>

      <ScrollView>
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: sectionTitleColor }]}>Account Information</Text>
          <TouchableOpacity onPress={() => {}} style={[styles.row, { backgroundColor: rowBackgroundColor }]}>
            <View style={[styles.rowIcon, { backgroundColor: '#fe9400' }]}>
              <FeatherIcon color="#fff" name="user" size={20} />
            </View>
            <Text style={[styles.rowLabel, { color: textColor }]}>Name: Maria Desiree Ganohay</Text>
            <View style={styles.rowSpacer} />
            <FeatherIcon color={form.darkMode ? "#fff" : "#C6C6C6"} name="chevron-right" size={20} />
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
              // Language
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