import { View, Text } from "react-native";
import React from "react";
import { colors } from "../../util/colors";

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
          backgroundColor: colors.orange,
          borderRadius: 5,
        }}
      ></View>
    </View>
  );
};

export default Playlist;
