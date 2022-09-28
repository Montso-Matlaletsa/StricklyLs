import { Pressable, StyleSheet, Text, View, Image, Platform, TouchableOpacity } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import TrackPlayer,{Capability, useProgress, State, usePlaybackState} from 'react-native-track-player';

import ControlButton from '../../components/ControlButton';
import SeekBar from '../../components/SeekBar';
import SongInfo from '../../components/SongInfo';
import  Icon  from 'react-native-vector-icons//AntDesign';
import  MenuIcon  from 'react-native-vector-icons//Entypo';

const icon = Platform.OS == 'ios'? 'dots-three-horizontal' : 'dots-three-vertical'
const songs = 
  {
    url: '../../../assets/songs/band.mp3',
    title: 'Tragedy of the Commons',
    artist: 'Band of Horses',
    album: 'Things are greate',
    genre: 'Progressive House, Electro House',
    date: '2014-05-20T07:00:00+00:00', // RFC 3339
    artwork: 'https://media.pitchfork.com/photos/5929a4b513d1975652138d8a/1:1/w_320,c_limit/1a0eb755.jpg', // Load artwork from the network
    duration: 402 // Duration in seconds
  
  }

const setupPlayer =async () => {
  await TrackPlayer.setupPlayer()
  await TrackPlayer.add(songs)
}

const Player = () => {

  

  const [repeatSong, setRepeatSong] = useState<boolean>(false)
  const [muteSong, setMuteSong] = useState<boolean>(false)
  const [songPlaying, setSongPlaying] = useState<boolean>(false)
  const [likeSong, setLikeSong] = useState<boolean>(false)
  const playBackState = usePlaybackState()

  const repeat = useCallback(()=>{
      setRepeatSong((repeatSong) => !repeatSong)    
  }, [])

  const mute = useCallback(()=>{
    setMuteSong((muteSong) => !muteSong)    
  }, [])


const play = useCallback(async (playBackState)=>{
  const currentTrack = await TrackPlayer.getCurrentTrack();
  console.log({playBackState});
  
console.log(currentTrack);

  if(currentTrack === null){
    
    if(playBackState === State.Connecting){
      await TrackPlayer.play()
      console.log('in');
    }else{
      await TrackPlayer.pause()
      console.log('out');
      
    }
  }
   
  }, [])

  const like = useCallback(()=>{
      setLikeSong((likeSong) => !likeSong)
  },[])

  useEffect(()=>{
    
    setupPlayer()
  })
  return (
    <View style={{height: '100%', backgroundColor: '#102e4a'}} >

      <View style={{height: 50, marginTop: 20, marginLeft: 20, marginRight: 20, flexDirection: 'row'}} >
          
          <TouchableOpacity style={{flex: 1, alignItems: 'flex-start'}} >
            <Icon name='down' size={20} color={'white'} />
          </TouchableOpacity>

          <Text style={{color: 'white', fontSize: 20, flex: 1}}>Now Playing</Text>

          <TouchableOpacity style={{flex: 1, alignItems: 'flex-end'}} >
            <MenuIcon name={icon} size={20} color={'white'} />
          </TouchableOpacity>
      </View>

      <View style={{position:'absolute', bottom: 150, width: '100%'}} >
        <View  style={{marginLeft: 20, marginRight: 20, marginBottom: 50}} >
          <Image source={require('../../../assets/thingsaregreat-cover.jpeg')}  style={{height: 400, width: '100%', borderRadius: 10}} />
        </View>

        <SongInfo songName={'The Funeral'} 
          artistName={'Band of Horses'} 
          like={like}
          likeIcon={likeSong ?  'ios-heart' : 'ios-heart-outline'}
          iconColor={likeSong ? '#B87F3E' : '#B87F3E'} />
      </View>

      <View style={{position:'absolute', bottom: 100, width: '100%'}} ><SeekBar /></View>

      <View style={{ height: 40, position: 'absolute', bottom: 0, width: '100%', flexDirection: 'row', marginBottom: 30}}>
        <ControlButton icon={'repeat-sharp'} onPress={repeat} iconColor={ repeatSong  ? '#B87F3E' : 'white' } />

        <ControlButton icon={'play-skip-back-sharp'}  onPress={() => console.log('back')
        } />

        <ControlButton icon={ playBackState === State.Playing ? 'pause': 'caret-forward-sharp'} color={'#B87F3E'} size={30} onPress={(playBackState) =>  play(playBackState)} />

        <ControlButton icon={'play-skip-forward-sharp'} onPress={() => console.log('forward')
        } />

        <ControlButton icon={ muteSong ? 'volume-mute-sharp': 'volume-high-sharp'} onPress={mute} iconColor={ muteSong  ? 'red' : 'white' } />
          

      </View>
    </View>
  )
}

export default Player

const styles = StyleSheet.create({})