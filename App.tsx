import React from "react";
import {
  useColorScheme,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Player from "./src/screens/Player";
import Playlist from "./src/screens/Playlist";

const App = () => {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#102e4a" }}>
      <StatusBar
        barStyle={isDarkMode ? "light-content" : "dark-content"}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Playlist />
    </SafeAreaView>
  );
};

export default App;
