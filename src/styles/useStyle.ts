import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useState } from 'react';
import { Platform, StyleSheet } from 'react-native';
import { EdgeInsets, useSafeAreaInsets } from 'react-native-safe-area-context';

import spaces from './spaces';

const useStyle = () => {
  //
  const safeArea = useSafeAreaInsets();
  const bottomTabBarHeight = useBottomTabBarHeight();

  const styles = StyleSheet.create({
    root: {
      flex: 1,
      backgroundColor: 'white',
    },
    topbarContainer: {
      position: 'absolute',
      top: safeArea.top ? safeArea.top + 16 : spaces.xl,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: spaces.xl,
      alignItems: 'center',
    },
    rootPaddingVerticalWithTopbar: {
      paddingTop: (safeArea.top ?? spaces.xl) + 72,
      paddingBottom: safeArea.top ?? spaces.xl,
    },

    rootPaddingVerticalWithoutTopbar: {
      paddingTop: (safeArea.top ?? spaces.xl) + 40,
      paddingBottom: safeArea.top ?? spaces.xl,
    },

    scrollViewWithTopBar: {
      paddingTop: (safeArea.top ?? spaces.xl) + 72,
      paddingBottom: safeArea.bottom + bottomTabBarHeight + (Platform.select({ android: 134, ios: 0 }) ?? 0),
    },

    scrollViewWithoutTopBar: {
      paddingTop: (safeArea.top ?? spaces.xl) + 24,
      paddingBottom: safeArea.bottom + bottomTabBarHeight + (Platform.select({ android: 134, ios: 0 }) ?? 0),
    },

    // Gradients
    topGradient: {
      height: (safeArea.top ?? spaces.xl) + 72,
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
    },

    // GUIDED JOURNALING
    guidedJournalingColor: {
      backgroundColor: '#DCCCFF',
    },

    // FEED
    feedStoryContent: {
      marginTop: (safeArea.top ?? spaces.xl) + 72,
      flex: 1,
      paddingHorizontal: 32,
    },
    feedStoryContentShare: {
      marginTop: 24,
      flex: 1,
      paddingHorizontal: 32,
    },
  });

  return styles;
};

export const useStyleWithoutBottomTabBar = () => {
  //
  const safeArea = useSafeAreaInsets();

  const styles = StyleSheet.create({
    root: {
      flex: 1,
      backgroundColor: 'white',
    },
    topbarContainer: {
      position: 'absolute',
      top: safeArea.top ? safeArea.top + 16 : spaces.xl,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: spaces.xl,
      alignItems: 'center',
    },
    rootPaddingVerticalWithTopbar: {
      paddingTop: (safeArea.top ?? spaces.xl) + 72,
      paddingBottom: safeArea.top ?? spaces.xl,
    },

    rootPaddingVerticalWithoutTopbar: {
      paddingTop: (safeArea.top ?? spaces.xl) + 40,
      paddingBottom: safeArea.top ?? spaces.xl,
    },

    scrollViewWithTopBar: {
      paddingTop: (safeArea.top ?? spaces.xl) + 72,
    },

    // Gradients
    topGradient: {
      height: (safeArea.top ?? spaces.xl) + 72,
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
    },

    // GUIDED JOURNALING
    guidedJournalingColor: {
      backgroundColor: '#DCCCFF',
    },

    // FEED
    feedStoryContent: {
      marginTop: (safeArea.top ?? spaces.xl) + 72,
      flex: 1,
      paddingHorizontal: 32,
    },
    feedStoryContentShare: {
      marginTop: 24,
      flex: 1,
      paddingHorizontal: 32,
    },
  });

  return styles;
};

export default useStyle;
