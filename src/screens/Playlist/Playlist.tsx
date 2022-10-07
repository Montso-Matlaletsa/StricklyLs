import { View, Text, ScrollView } from "react-native";
import React from "react";
import { colors } from "../../util/colors";
import FooterPlayer from "../../components/FooterPlayer";
import { SafeAreaView } from "react-native-safe-area-context";
import Player from "../Player";

const Playlist = () => {
  return (
    <SafeAreaView
      style={{
        height: "100%",

        backgroundColor: colors.dark,
      }}
    >
      <ScrollView>{}</ScrollView>
      <View
        style={{
          height: 50,
          position: "absolute",
          bottom: 85,
          width: "100%",
          flexDirection: "row",
          marginBottom: 10,
          backgroundColor: colors.dark,
          borderRadius: 5,
        }}
      >
        <FooterPlayer />
      </View>
    </SafeAreaView>
  );
};

export default Playlist;
