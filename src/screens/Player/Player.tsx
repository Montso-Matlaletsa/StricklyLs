import React, { useCallback, useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import TrackPlayer, {
  Capability,
  State,
  usePlaybackState,
  useProgress,
} from "react-native-track-player";
import Icon from "react-native-vector-icons//AntDesign";
import MenuIcon from "react-native-vector-icons//Entypo";

import ControlButton from "../../components/ControlButton";
import SeekBar from "../../components/SeekBar";
import SongInfo from "../../components/SongInfo";
import { useOnTogglePlayback } from "../../hooks";
import { useDebouncedValue } from "../../hooks/useDebouncedValue";

import { useCurrentTrack } from "../../hooks";
import { QueueInitialTracksService, SetupService } from "../../Services";

const Player = () => {
  const [repeatSong, setRepeatSong] = useState<boolean>(false);
  const [muteSong, setMuteSong] = useState<boolean>(false);
  const [songPlaying, setSongPlaying] = useState<boolean>(false);
  const [likeSong, setLikeSong] = useState<boolean>(false);
  const state = usePlaybackState();
  const isPlaying = state === State.Playing;
  const isLoading = useDebouncedValue(
    state === State.Connecting || state === State.Buffering,
    250
  );

  const onTogglePlayback = useOnTogglePlayback();

  const track = useCurrentTrack();

  const repeat = useCallback(() => {
    setRepeatSong((repeatSong) => !repeatSong);
  }, []);

  const like = useCallback(() => {
    setLikeSong((likeSong) => !likeSong);
  }, []);

  return (
    <View style={{ height: "100%", backgroundColor: "#102e4a" }}>
      <View
        style={{
          height: 50,
          marginTop: 20,
          marginLeft: 20,
          marginRight: 20,
          flexDirection: "row",
        }}
      >
        <TouchableOpacity style={{ flex: 1, alignItems: "flex-start" }}>
          <Icon name="down" size={20} color={"white"} />
        </TouchableOpacity>

        <Text style={{ color: "white", fontSize: 20, flex: 1 }}>
          Now Playing
        </Text>

        <TouchableOpacity style={{ flex: 1, alignItems: "flex-end" }}>
          <MenuIcon color={"white"} name={"menu"} size={20} />
        </TouchableOpacity>
      </View>

      <View style={{ position: "absolute", bottom: 150, width: "100%" }}>
        <View style={{ marginLeft: 20, marginRight: 20, marginBottom: 50 }}>
          <Image
            // @ts-ignore
            source={{ uri: track?.artwork }}
            style={{ height: 400, width: "100%", borderRadius: 10 }}
          />
        </View>

        <SongInfo
          track={track}
          like={like}
          likeIcon={likeSong ? "ios-heart" : "ios-heart-outline"}
          iconColor={likeSong ? "#B87F3E" : "#B87F3E"}
        />
      </View>

      <View style={{ position: "absolute", bottom: 100, width: "100%" }}>
        <SeekBar live={track?.isLiveStream} />
      </View>

      <View
        style={{
          height: 40,
          position: "absolute",
          bottom: 0,
          width: "100%",
          flexDirection: "row",
          marginBottom: 30,
        }}
      >
        <ControlButton
          icon={"repeat-sharp"}
          iconColor={repeatSong ? "#B87F3E" : "white"}
          onPress={repeat}
        />

        <ControlButton
          icon={"play-skip-back-sharp"}
          onPress={() => TrackPlayer.skipToPrevious()}
        />

        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <ControlButton
            icon={isPlaying ? "pause" : "caret-forward-sharp"}
            color={"#B87F3E"}
            size={30}
            onPress={onTogglePlayback}
          />
        )}

        <ControlButton
          icon={"play-skip-forward-sharp"}
          onPress={() => TrackPlayer.skipToNext()}
        />

        <ControlButton
          icon={muteSong ? "volume-mute-sharp" : "volume-high-sharp"}
          onPress={() => {
            setMuteSong((muteSong) => !muteSong);
            TrackPlayer.setVolume(!muteSong ? 0 : 1);
          }}
          iconColor={muteSong ? "red" : "white"}
        />
      </View>
    </View>
  );
};

export default Player;
