import React, {useState} from "react";
import {Text, View, StyleSheet} from 'react-native';
import { colors } from "../utils/colors";
import { fontSizes, spacing } from "../utils/sizes";

const minutesToMillis = (min) => {
  return min * 1000 * 60
}
const formatTime = time => {
  return time < 10 ? `0${time}` : time;
}

export const Countdown = ({
  minutes = 20,
  isPaused,
}) => {
  const [millis, setMillies] = useState(minutesToMillis(minutes))

  const minute= Math.floor(millis /1000/ 60) % 60;
  const seconds = Math.floor(millis /1000 ) % 60;

  return (
    <Text style={styles.text}> {formatTime(minute)}:{formatTime(seconds)}</Text>
  )
}


const styles = StyleSheet.create({
  text: {
    fontSize : fontSizes.xxxxl,
    fontWeight: 'bold',
    color: colors.white,
    padding: spacing.lg,
    backgroundColor: 'rgba(94,132,226,0.3)'

  }
})