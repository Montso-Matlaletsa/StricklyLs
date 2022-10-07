// In
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import BottomNav from "./BottomNav";
import Player from "../screens/Player";
import { RootScreens } from "./Routes";
import {
  CardStyleInterpolators,
  createStackNavigator,
  StackNavigationProp,
  TransitionPresets,
} from "@react-navigation/stack";
import spaces from "../styles/spaces";

export type RootStackParamList = {
  AppTab: undefined;
  Player: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export const RootNav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={RootScreens.APP_TAB}
        screenOptions={{
          ...TransitionPresets.ModalPresentationIOS,
          presentation: "transparentModal",
          headerShown: false,
          headerTransparent: true,

          headerLeftContainerStyle: {
            marginHorizontal: spaces.md,
          },
          headerRightContainerStyle: {
            marginHorizontal: spaces.md,
          },
        }}
      >
        <Stack.Screen name={RootScreens.APP_TAB} component={BottomNav} />
        <Stack.Screen
          name={RootScreens.PLAYER}
          component={Player}
          options={{
            cardStyleInterpolator: (interpolatorProps) => {
              const interpolator =
                CardStyleInterpolators.forVerticalIOS(interpolatorProps);

              return {
                ...interpolator,
                cardStyle: {
                  ...interpolator.cardStyle,
                  overflow: "hidden",
                  borderTopLeftRadius:
                    interpolatorProps.current.progress.interpolate({
                      inputRange: [0, 0.99, 1],
                      outputRange: [32, 32, 0],
                    }),
                  borderTopRightRadius:
                    interpolatorProps.current.progress.interpolate({
                      inputRange: [0, 0.99, 1],
                      outputRange: [32, 32, 0],
                    }),
                },
              };
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
