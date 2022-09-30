import { useCallback } from "react"
import TrackPlayer, { State, usePlaybackState } from "react-native-track-player"


export const useOnTogglePlayback = () =>{
    const state = usePlaybackState()
    const isPlaying = state === State.Playing

    return useCallback(()=>{
        if(isPlaying){
            TrackPlayer.pause()
        }else{
            console.log('not playing');
            TrackPlayer.play()
        }
    }, [isPlaying])
}