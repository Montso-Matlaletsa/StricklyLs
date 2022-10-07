import { View, Text } from "react-native";
import React from "react";
import Playlist from "../Playlist";
import TextV1 from "../../components/TextV1";

const Home = () => {
  return (
    <View
      style={{
        height: "100%",
      }}
    >
      <TextV1>Hoi</TextV1>
      <Playlist />
    </View>
  );
};

export default Home;
