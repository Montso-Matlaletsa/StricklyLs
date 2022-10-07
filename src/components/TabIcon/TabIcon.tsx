import React, { ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import TextV1 from "../TextV1/TextV1";

const TabIcon = ({
  children,
  isDisabled,
  name,
  focused,
  color,
}: {
  children: ReactNode;
  isDisabled?: boolean;
  name: string;
  focused: boolean;
  color: string;
}) => {
  //
  const styles = StyleSheet.create({
    iconContainer: {
      position: "relative",
      alignItems: "center",
    },
    icon: {
      width: 22,
      aspectRatio: 1,
      alignItems: "center",
      overflow: "visible",
      justifyContent: "center",
      opacity: isDisabled ? 0.5 : 1,
    },
  });

  return (
    <View style={styles.iconContainer}>
      <View style={styles.icon}>{children}</View>
      <TextV1
        color={color}
        lineHeight={16}
        marginTop={5}
        size={10}
        weight="medium"
      >
        {name}
      </TextV1>
    </View>
  );
};

export default TabIcon;
