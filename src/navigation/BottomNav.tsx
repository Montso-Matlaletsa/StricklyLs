import { BlurView as RNCBlurView } from "@react-native-community/blur";
import {
  BottomTabBar,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React, { FC, useEffect, useState } from "react";
import { Platform, useColorScheme, View } from "react-native";

import { useSafeAreaInsets } from "react-native-safe-area-context";
import TrackPlayer from "react-native-track-player";
import Icon from "react-native-vector-icons/Ionicons";
import TabIcon from "../components/TabIcon";
import Playlist from "../screens/Playlist";
import Settings from "../screens/Settings";
import { SetupService, QueueInitialTracksService } from "../Services";
import spaces from "../styles/spaces";
import { colors } from "../util/colors";

const Tabs = createBottomTabNavigator();

export type AppTabsParamList = {
  Playlist: undefined;
  Settings: undefined;
};

export const BottomNav = () => {
  //
  const safeArea = useSafeAreaInsets();

  const isDarkMode = useColorScheme() === "dark";
  const [isPlayerReady, setIsPlayerReady] = useState<boolean>(false);

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
    <NavigationContainer>
      <Tabs.Navigator
        safeAreaInsets={{
          bottom: safeArea.bottom ? safeArea.bottom : 16,
          left: 16,
        }}
        screenOptions={{
          tabBarStyle: {
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            borderWidth: 0,
            elevation: 0,
            borderTopWidth: 0,
            backgroundColor: "transparent",
            overflow: "visible",
          },
          headerShown: false,
          tabBarActiveTintColor: colors.lightOrange,
          tabBarInactiveTintColor: colors.dark,
          tabBarShowLabel: false,
        }}
        tabBar={(props) => {
          const { index } = props.state;

          return (
            <>
              {Platform.OS === "ios" ? (
                <RNCBlurView
                  blurAmount={10}
                  // @ts-ignore
                  blurRadius={25}
                  blurType="regular"
                  overlayColor="transparent"
                  style={{
                    position: "absolute",
                    overflow: "visible",
                    opacity: 1,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height:
                      (safeArea.bottom ? safeArea.bottom : spaces.md) + 54,
                  }}
                />
              ) : (
                <View
                  style={{
                    backgroundColor: "white",
                    position: "absolute",
                    overflow: "visible",
                    opacity: index === 4 ? 0.9 : 0.9,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height:
                      (safeArea.bottom ? safeArea.bottom : spaces.md) + 44,
                  }}
                />
              )}
              {/* eslint-disable-next-line react/jsx-props-no-spreading */}
              <BottomTabBar {...props} />
            </>
          );
        }}
      >
        <Tabs.Screen
          component={Playlist}
          name="Today"
          options={{
            tabBarIcon: ({ focused, color }) => (
              <TabIcon color={color} focused={focused} name="Home">
                <Icon name="home" size={20} />
              </TabIcon>
            ),
          }}
        />

        <Tabs.Screen
          component={Settings}
          name="Settings"
          options={{
            tabBarIcon: ({ focused, color }) => (
              <TabIcon color={color} focused={focused} name="Settings">
                <Icon name="Settings" />
              </TabIcon>
            ),
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default BottomNav;
