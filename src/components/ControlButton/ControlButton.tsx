import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FC } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { State } from 'react-native-track-player';

interface ButtonProps{
    icon: string;
    size?: number;
    color?: string;
    onPress?: (playBackState: State) => void,
    iconColor?: string
}

export const  ControlButton: FC<ButtonProps> = ({icon, size, color, onPress, iconColor}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <TouchableOpacity onPress={onPress} style={{justifyContent: 'center', alignItems: 'center', backgroundColor: color ?? color, borderRadius: 100, padding: 10, width: 50, height: 50 }} >
        <Icon name={icon} color={ iconColor ? iconColor: 'white'} size={size ? size : 25} />
    </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({})