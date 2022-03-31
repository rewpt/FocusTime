import {useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import  {Focus} from './src/features/focus/Focus.js'

export default function App() {
  const [focusSubject, setFocusSubject] = useState(true);
  return (
    <View style={styles.container}>
      {focusSubject? <Text> hey  </Text> : null }
      <StatusBar style="auto" />
      <Focus />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252250',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
