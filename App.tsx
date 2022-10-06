import React, { useEffect, useState } from "react";
import {
  useColorScheme,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  View,
} from "react-native";
import TrackPlayer from "react-native-track-player";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Player from "./src/screens/Player";
import Playlist from "./src/screens/Playlist";
import { QueueInitialTracksService, SetupService } from "./src/Services";

const App = () => {
  const isDarkMode = useColorScheme() === "dark";
  const [isPlayerReady, setIsPlayerReady] = useState<boolean>(false);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    async function run() {
      const isSetup = await SetupService();
      setIsPlayerReady(isSetup);

      const queue = await TrackPlayer.getQueue();
      if (isSetup && queue.length <= 0) {
        await QueueInitialTracksService();
      }
    }

    run();
  }, []);
  return (
    <View style={{ backgroundColor: "#102e4a" }}>
      <StatusBar
        barStyle={isDarkMode ? "light-content" : "dark-content"}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Playlist />
    </View>
  );
};

export default App;
