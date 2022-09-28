import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Slider } from 'react-native-elements/dist/slider/Slider'

const SeekBar = () => {
    const [progress, setProgress] = useState<number>(0)
    const max = 125
    const time = max/60
    const maxTime = time.toFixed(2)

    const change = (value: number) =>{
        const time = value/60
        const progress = time.toFixed(2)
        setProgress(parseFloat(progress))
    }
  return (
    <View  style={{marginLeft: 20, marginRight: 20}}>
      <Slider  value={progress}
        maximumValue={max}
        step={progress}
        onValueChange={change}
        maximumTrackTintColor={'#765F44'}
        minimumTrackTintColor={'#B87F3E'} 
        thumbStyle={{ height: 40, width: 20, backgroundColor: 'transparent' }}
        animationType={'spring'}
        allowTouchTrack
        />

        <View style={{ height: 20, flexDirection: 'row' }} >
            <Text style={{flex: 1, textAlign: 'left', color: 'white' }} >{progress}</Text>
            <Text style={{flex: 1, textAlign: 'right', color: 'white'}} >{maxTime}</Text>
        </View>
    </View>
  )
}

export default SeekBar

const styles = StyleSheet.create({})