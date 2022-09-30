import React, { FC, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Slider } from 'react-native-elements/dist/slider/Slider';
import TrackPlayer, { useProgress } from 'react-native-track-player';

const SeekBar: FC<{live?: boolean}>= ({live}) => {
  const [progress, setProgress] = useState<number>(0);
  const trackProgress = useProgress()
  const max = 125;
  const time = max / 60;
  const maxTime = time.toFixed(2);

  const change = (value: number) => {
    const time = value / 60;
    const progress = time.toFixed(2);
    setProgress(parseFloat(progress));
  };

  return live ? (    
  <View style={styles.liveContainer}>
    <Text style={styles.liveText}>Live Stream</Text>
  </View>) : (
    <View style={{ marginLeft: 20, marginRight: 20 }}>
      <Slider
        animationType={'spring'}
        maximumTrackTintColor={'#765F44'}
        maximumValue={trackProgress.duration}
        minimumTrackTintColor={'#B87F3E'}
        step={progress}
        thumbStyle={{ height: 40, width: 20, backgroundColor: 'transparent' }}
        value={trackProgress.position}
        allowTouchTrack
        onValueChange={change}
        minimumValue={0} 
        onSlidingComplete={TrackPlayer.seekTo}
      
        animateTransitions

      />

      <View style={{ height: 20, flexDirection: 'row' }}>
        <Text style={{ flex: 1, textAlign: 'left', color: 'white' }}>
          {new Date(trackProgress.position * 1000).toISOString().slice(14, 19)}
          </Text>
        <Text style={{ flex: 1, textAlign: 'right', color: 'white' }}>
            {new Date((trackProgress.duration - trackProgress.position)* 1000 )
              .toISOString()
              .slice(14, 19)
            }
          </Text>
      </View>
    </View>
  );
};

export default SeekBar;


const styles = StyleSheet.create({
  liveContainer: {
    height: 100,
    alignItems: 'center',
    flexDirection: 'row',
  },
  liveText: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 18,
  },
  container: {
    height: 40,
    width: 380,
    marginTop: 25,
    flexDirection: 'row',
  },
  labelContainer: {
    width: 370,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  labelText: {
    color: 'white',
    fontVariant: ['tabular-nums'],
  },
});
