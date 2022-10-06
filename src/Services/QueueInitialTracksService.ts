import TrackPlayer, { RepeatMode } from "react-native-track-player";
import localTrack from "../../assets/songs/playlist.json";

export const QueueInitialTracksService = async (): Promise<void> => {
  // @ts-ignore
  await TrackPlayer.add(localTrack);
  await TrackPlayer.setRepeatMode(RepeatMode.Queue);
};
