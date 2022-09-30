import TrackPlayer, { RepeatMode } from 'react-native-track-player';

import playlistData from '../../assets/songs/playlist.json';
// @ts-expect-error – sure we can import this
import localTrack from '../../assets/songs/playlist.json';
// @ts-expect-error – sure we can import this


export const QueueInitialTracksService = async (): Promise<void> => {
  await TrackPlayer.add(
    localTrack
  );
  await TrackPlayer.setRepeatMode(RepeatMode.Queue);
};