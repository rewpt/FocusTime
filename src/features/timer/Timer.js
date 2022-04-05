import React, {useState} from "react";
import {StyleSheet, Text, View} from "react-native"
import { colors } from "../../utils/colors";
import { spacing, sizes } from "../../utils/sizes";
import { Countdown } from "../../components/Countdown";
import { RoundedButton } from "../../components/RoundedButton";
import { ProgressBar } from "react-native-paper";
import { Timing } from "./Timing";
import { useKeepAwake} from "expo-keep-awake"

const DEFAULT_TIME = 0.1;
export const Timer = (props) => {
  useKeepAwake();

  const [minutes, setMinutes] = useState(DEFAULT_TIME);
  const {focusSubject} = props
  const [isStarted, setIsStarted] = useState(false)
  const [progress, setProgress] = useState(1);

  const onProgress = progress => {
    setProgress(progress)
  }

  const onEnd = () => {
    setMinutes(DEFAULT_TIME);
    setProgress(1);
    setIsStarted(false);
  }

  const changeTime = min => {
    setMinutes(min);
    setProgress(1);
    setIsStarted(false);
  }

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown onEnd={onEnd} minutes={minutes} isPaused={!isStarted} onProgress={onProgress}/>
      </View>
      <View style={{ paddingTop: spacing.xxl}}>
        <Text style={styles.title}>Focusing on:</Text>
        <Text style={styles.task}>{focusSubject}</Text>
      </View>
      <View style={styles.progressContainer}>
        <ProgressBar progress={progress} color = '#5E84E2' style={styles.progress}/>
      </View>
      <View style={styles.buttonWrapper}>
        <Timing onChangeTime={changeTime} />
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
    flexDirection: 'row',
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