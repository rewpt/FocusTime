import {useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform } from 'react-native';
import  {Focus} from './src/features/focus/Focus.js'
import { colors } from './src/utils/colors.js';
import { Timer } from './src/features/timer/Timer.js';
import { spacing } from './src/utils/sizes.js';

export default function App() {
  const [focusSubject, setFocusSubject] = useState("gardening");
  return (
    <View style={styles.container}>
      {focusSubject? 
      (<Timer focusSubject={focusSubject}/>) : 
      (<Focus addSubject={setFocusSubject}/> )}
      <Text>{focusSubject}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? spacing.md : spacing.lg ,
    backgroundColor: colors.darkBlue,
  },
});
