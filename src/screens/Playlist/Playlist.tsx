import { View, Text } from "react-native";
import React from "react";
import { colors } from "../../util/colors";
import FooterPlayer from "../../components/FooterPlayer";

const Playlist = () => {
  return (
    <View
      style={{
        height: "100%",
        marginRight: 10,
        marginLeft: 10,
      }}
    >
      <View
        style={{
          height: 50,
          position: "absolute",
          bottom: 0,
          width: "100%",
          flexDirection: "row",
          marginBottom: 10,
          backgroundColor: colors.dark,
          borderRadius: 5,
        }}
      >
        <FooterPlayer />
      </View>
    </View>
  );
};

export default Playlist;
