import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {TextInput} from "react-native-paper"
import {RoundedButton} from '../../components/RoundedButton'

export const Focus = () => {
  return (
    <View style={styles.container}> 
      <View style={styles.titleContainer}>
        <Text style={styles.title}>What would you like to focus on?</Text>
        <View style={styles.inputContainer}>
        <TextInput />
        <RoundedButton title="+" size={50}></RoundedButton>
        </View>
        
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
  },
  titleContainer: {
    flex: .5,
    padding: 16,
    justifyContent: "center"
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 24
  },
  inputContainer: {
    paddingTop: 20
  }
})