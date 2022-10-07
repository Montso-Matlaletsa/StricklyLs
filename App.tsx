import React, { useEffect, useState } from "react";
import {
  useColorScheme,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  View,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import TrackPlayer from "react-native-track-player";
import { Colors } from "react-native/Libraries/NewAppScreen";
import BottomNav from "./src/navigation/BottomNav";
import Player from "./src/screens/Player";
import Playlist from "./src/screens/Playlist";
import { QueueInitialTracksService, SetupService } from "./src/Services";

const App = () => {
  return (
    <SafeAreaProvider>
      <BottomNav />
    </SafeAreaProvider>
  );
};

export default App;
