import TrackPlayer, { Event, State } from "react-native-track-player"

let wasPausedByDuck = false

export const PlaybackService = async () =>{
    TrackPlayer.addEventListener(Event.RemotePause, ()=>{
        TrackPlayer.pause()
    });

    TrackPlayer.addEventListener(Event.RemotePlay, ()=>{
        TrackPlayer.play()
    })

    TrackPlayer.addEventListener(Event.RemoteNext, ()=>{
        TrackPlayer.skipToNext()
    })

    TrackPlayer.addEventListener(Event.RemotePrevious, ()=>{
        TrackPlayer.skipToPrevious()
    })

    TrackPlayer.addEventListener(Event.RemoteJumpForward, async (event)=>{
        const position = (await TrackPlayer.getPosition()) + event.interval;
        TrackPlayer.seekTo(position)
    })

    TrackPlayer.addEventListener(Event.RemoteJumpBackward,async (event) => {
        const position = (await TrackPlayer.getPosition()) - event.interval
        TrackPlayer.seekTo(position)
    })

    TrackPlayer.addEventListener(Event.RemoteSeek, (event) =>{
        TrackPlayer.seekTo(event.position)
    })

    TrackPlayer.addEventListener(
        Event.RemoteDuck,
       async ({permanent, paused}) => {
            if(permanent){
                TrackPlayer.pause()
                return
            }

            if(paused){
                const playerState = await TrackPlayer.getState()
                wasPausedByDuck = playerState !== State.Paused
                TrackPlayer.pause()

            }else{
                if(wasPausedByDuck){
                    TrackPlayer.play()
                    wasPausedByDuck = false
                }
            }
       }
    );

    TrackPlayer.addEventListener(Event.PlaybackQueueEnded, (event) => {
        console.log('Event.PlaybackQueueEnded', event);
      });
    
      TrackPlayer.addEventListener(Event.PlaybackTrackChanged, (event) => {
        console.log('Event.PlaybackTrackChanged', event);
      });
    
    //   // @ts-ignore
    //   TrackPlayer.addEventListener(Event.PlaybackProgressUpdated, (event) => {
    //     console.log('Event.PlaybackProgressUpdated', event);
    //   });

}