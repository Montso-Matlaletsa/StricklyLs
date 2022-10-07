import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";

import colors, { Colors } from "../../styles/colors";
import fonts, { FontSize, FontWeigth } from "../../styles/fonts";
import spaces, { Spaces } from "../../styles/spaces";

interface TextV1Props {
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "cta-large"
    | "copy-lg"
    | "copy-sm"
    | "copy-sm-bold"
    | "eyebrown"
    | "section"
    | "cta-sm";
  color?: Colors | string;
  align?: "left" | "center" | "right" | "justify";
  margin?: Spaces | number;
  marginVertical?: Spaces | number;
  marginHorizontal?: Spaces | number;
  marginTop?: Spaces | number;
  marginBottom?: Spaces | number;
  marginLeft?: Spaces | number;
  marginRight?: Spaces | number;
  size?: FontSize | number;
  zIndex?: number;
  numberOfLines?: number;
  withoutContainer?: boolean;
  lineHeight?: number;
  letterSpacing?: number;
  weight?: FontWeigth;
  styleProps?: any;
  adjustsFontSizeToFit?: boolean;
}

const TextV2: FC<TextV1Props> = ({
  // @ts-ignore
  children,
  variant = "copy-sm",
  color,
  align,
  margin,
  marginVertical,
  marginHorizontal,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  size,
  zIndex,
  numberOfLines,
  withoutContainer,
  lineHeight,
  letterSpacing,
  weight,
  styleProps = {},
  adjustsFontSizeToFit,
}) => {
  //
  const variantStyles = StyleSheet.create({
    h1: {
      fontFamily: weight ? fonts[weight] : fonts[900],
      fontSize: size
        ? typeof size === "number"
          ? size
          : fonts[size ?? "md"]
        : 38,
      lineHeight: lineHeight ? lineHeight : 40,
      letterSpacing: letterSpacing ? letterSpacing : -2,
    },
    h2: {
      fontFamily: weight ? fonts[weight] : fonts[900],
      fontSize: size
        ? typeof size === "number"
          ? size
          : fonts[size ?? "md"]
        : 30,
      lineHeight: lineHeight ? lineHeight : 32,
      letterSpacing: letterSpacing ? letterSpacing : -2,
    },
    h3: {
      fontFamily: weight ? fonts[weight] : fonts[700],
      fontSize: size
        ? typeof size === "number"
          ? size
          : fonts[size ?? "md"]
        : 20,
      lineHeight: lineHeight ? lineHeight : 32,
      letterSpacing: letterSpacing ? letterSpacing : -1,
    },
    "cta-large": {
      fontFamily: weight ? fonts[weight] : fonts[700],
      fontSize: size
        ? typeof size === "number"
          ? size
          : fonts[size ?? "md"]
        : 20,
      lineHeight: lineHeight ? lineHeight : 32,
      letterSpacing: letterSpacing ? letterSpacing : -1,
    },
    "copy-lg": {
      fontFamily: weight ? fonts[weight] : fonts[400],
      fontSize: size
        ? typeof size === "number"
          ? size
          : fonts[size ?? "md"]
        : 20,
      lineHeight: lineHeight ? lineHeight : 32,
      letterSpacing: letterSpacing ? letterSpacing : -1,
    },
    "copy-sm": {
      fontFamily: weight ? fonts[weight] : fonts[400],
      fontSize: size
        ? typeof size === "number"
          ? size
          : fonts[size ?? "md"]
        : 14,
      lineHeight: lineHeight ? lineHeight : 24,
      letterSpacing: letterSpacing ? letterSpacing : 0,
    },
    "copy-sm-bold": {
      fontFamily: weight ? fonts[weight] : fonts[700],
      fontSize: size
        ? typeof size === "number"
          ? size
          : fonts[size ?? "md"]
        : 14,
      lineHeight: lineHeight ? lineHeight : 24,
      letterSpacing: letterSpacing ? letterSpacing : 0,
    },
    eyebrown: {
      fontFamily: weight ? fonts[weight] : fonts[400],
      fontSize: size
        ? typeof size === "number"
          ? size
          : fonts[size ?? "md"]
        : 12,
      lineHeight: lineHeight ? lineHeight : 16,
      letterSpacing: letterSpacing ? letterSpacing : 0,
      textTransform: "uppercase",
    },
    section: {
      fontFamily: weight ? fonts[weight] : fonts[700],
      fontSize: size
        ? typeof size === "number"
          ? size
          : fonts[size ?? "md"]
        : 12,
      lineHeight: lineHeight ? lineHeight : 16,
      letterSpacing: letterSpacing ? letterSpacing : 0,
      textTransform: "uppercase",
    },
    "cta-sm": {
      fontFamily: weight ? fonts[weight] : fonts[700],
      fontSize: size
        ? typeof size === "number"
          ? size
          : fonts[size ?? "md"]
        : 12,
      lineHeight: lineHeight ? lineHeight : 16,
      letterSpacing: letterSpacing ? letterSpacing : 0,
      textTransform: "uppercase",
    },
  });

  const styles = StyleSheet.create({
    container: {
      margin: margin
        ? typeof margin === "number"
          ? margin
          : spaces[margin]
        : undefined,
      marginVertical: marginVertical
        ? typeof marginVertical === "number"
          ? marginVertical
          : spaces[marginVertical]
        : undefined,
      marginHorizontal: marginHorizontal
        ? typeof marginHorizontal === "number"
          ? marginHorizontal
          : spaces[marginHorizontal]
        : undefined,
      marginTop: marginTop
        ? typeof marginTop === "number"
          ? marginTop
          : spaces[marginTop]
        : undefined,
      marginBottom: marginBottom
        ? typeof marginBottom === "number"
          ? marginBottom
          : spaces[marginBottom]
        : undefined,
      marginLeft: marginLeft
        ? typeof marginLeft === "number"
          ? marginLeft
          : spaces[marginLeft]
        : undefined,
      marginRight: marginRight
        ? typeof marginRight === "number"
          ? marginRight
          : spaces[marginRight]
        : undefined,
      zIndex,
      overflow: "visible",
    },
    extra: {
      // @ts-ignore, because the color will be a color string ID
      color: color?.substr(0, 1) === "#" ? color : colors[color ?? "black"],
      textAlign: align,
    },
  });

  return withoutContainer ? (
    <Text
      adjustsFontSizeToFit={adjustsFontSizeToFit}
      allowFontScaling={false}
      numberOfLines={numberOfLines}
      style={[variantStyles[variant], styles.extra, styleProps]}
    >
      {children}
    </Text>
  ) : (
    <View style={styles.container}>
      <Text
        adjustsFontSizeToFit={adjustsFontSizeToFit}
        allowFontScaling={false}
        numberOfLines={numberOfLines}
        style={[variantStyles[variant], styles.extra, styleProps]}
      >
        {children}
      </Text>
    </View>
  );
};

export default TextV2;
