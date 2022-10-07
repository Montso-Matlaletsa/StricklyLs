import {
  View,
  Text,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import React, { useCallback, useState } from "react";
import Slider from "react-native-elements/dist/slider/Slider";
import TrackPlayer, {
  State,
  usePlaybackState,
  useProgress,
  Track,
} from "react-native-track-player";
import ControlButton from "../ControlButton";
import { useDebouncedValue } from "../../hooks/useDebouncedValue";
import { useCurrentTrack, useOnTogglePlayback } from "../../hooks";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/RootNav";
import { RootScreens } from "../../navigation/Routes";

const FooterPlayer = () => {
  const trackProgress = useProgress();
  const [progress, setProgress] = useState<number>(0);
  const state = usePlaybackState();
  const isPlaying = state === State.Playing;
  const track = useCurrentTrack();
  const onTogglePlayback = useOnTogglePlayback();

  const isLoading = useDebouncedValue(
    state === State.Connecting || state === State.Buffering,
    250
  );

  const { navigate } = useNavigation<StackNavigationProp<RootStackParamList>>();

  const routeToPlayer = useCallback(
    () => navigate(RootScreens.PLAYER),
    [navigate]
  );
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
      }}
    >
      <TouchableOpacity onPress={routeToPlayer}>
        <Image
          // @ts-ignore
          source={{ uri: track?.artwork }}
          resizeMode={"cover"}
          style={{
            width: 50,
            height: 50,
            borderRadius: 5,
            marginLeft: 5,
          }}
        />
      </TouchableOpacity>

      <View
        style={{
          flex: 1,
          marginRight: 10,
          marginLeft: 10,
          flexDirection: "column",
          height: 50,
        }}
      >
        <View>
          <View
            style={{
              height: 35,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View
              style={{
                flex: 5,
                flexDirection: "column",
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 17,
                }}
              >
                {track?.title}
              </Text>
              <Text
                style={{
                  color: "grey",
                  fontSize: 15,
                }}
              >
                {track?.artist}
              </Text>
            </View>

            <View
              style={{
                flex: 1,
                flexDirection: "row",
                marginHorizontal: 5,
              }}
            >
              {isLoading ? (
                <ActivityIndicator />
              ) : (
                <ControlButton
                  icon={isPlaying ? "pause" : "caret-forward-sharp"}
                  // color={"#B87F3E"}
                  size={25}
                  onPress={onTogglePlayback}
                />
              )}
            </View>
          </View>
        </View>
        <Slider
          animationType={"spring"}
          maximumTrackTintColor={"#765F44"}
          maximumValue={trackProgress.duration}
          minimumTrackTintColor={"#B87F3E"}
          step={progress}
          thumbStyle={{ height: 40, width: 20, backgroundColor: "transparent" }}
          value={trackProgress.position}
          allowTouchTrack
          minimumValue={0}
          onSlidingComplete={TrackPlayer.seekTo}
          animateTransitions
          style={{
            height: 15,
          }}
        />
      </View>
    </View>
  );
};

export default FooterPlayer;
