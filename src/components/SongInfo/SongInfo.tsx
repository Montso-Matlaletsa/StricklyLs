import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FC } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'

interface SongInfoProps{
    songName: string;
    artistName: string;
    like: () => void;
    likeIcon: string;
    iconColor: string;
}
const SongInfo:FC<SongInfoProps> = ({songName, artistName, like, likeIcon, iconColor}) => {
  return (
    <View style={{marginLeft: 20, marginRight: 20, height: 70, flexDirection: 'row'}} >
      <View style={{flex: 3, flexDirection: 'column', marginVertical: 5, justifyContent: 'center'}}>
            <Text style={{color: '#F0F3FF', fontWeight: '600', fontSize: 25}} >{songName}</Text>
            <Text style={{color: '#ABAFBD', fontSize: 15}} >{artistName}</Text>
      </View>
      <TouchableOpacity onPress={like} style={{flex: 1, justifyContent: 'center', alignItems: 'center'}} >
        <Icon name={likeIcon} size={30} color={iconColor} />
      </TouchableOpacity>
    </View>
  )
}

export default SongInfo

const styles = StyleSheet.create({})