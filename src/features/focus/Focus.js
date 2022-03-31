import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export const Focus = () => {
  return (
    <View style={styles.container}> 
      <Text>What would you like to focus on?</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
  }
})