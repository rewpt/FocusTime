import React, {useState} from "react";
import {StyleSheet, Text, View} from "react-native"
import { colors } from "../../utils/colors";
import { spacing, sizes } from "../../utils/sizes";
import { Countdown } from "../../components/Countdown";
import { RoundedButton } from "../../components/RoundedButton";
import { ProgressBar } from "react-native-paper";

export const Timer = (props) => {
  const {focusSubject} = props
  const [isStarted, setIsStarted] = useState(false)
  const [progress, setProgress] = useState(1);
  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown isPaused={!isStarted}/>
      </View>
      <View style={{ paddingTop: spacing.xxl}}>
        <Text style={styles.title}>Focusing on:</Text>
        <Text style={styles.task}>{focusSubject}</Text>
      </View>
      <View style={styles.progressContainer}>
        <ProgressBar progress={progress} color = '#5E84E2' style={styles.progress}/>
      </View>
      <View style={styles.buttonWrapper}>
      {!isStarted?
        <RoundedButton title="start" onPress={()=> setIsStarted(true) }/> :
        <RoundedButton title="pause" onPress={()=> setIsStarted(false) }/>
      }
      </View>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: colors.white,
    textAlign: 'center',
  },
  task: {
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  countdown: {
    flex: .5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonWrapper: {
    flex: .3,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  progress: {
    height : 10,
  },
  progressContainer: {
    paddingTop: spacing.md,
    paddingHorizontal: spacing.xxl
  },
})