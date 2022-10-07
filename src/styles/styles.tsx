import { StyleSheet } from 'react-native';

import colors from './colors';
import radius from './radius';
import spaces from './spaces';

const DEBUG = false;

const styles = StyleSheet.create({
  godView: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'white',
  },
  keyboardView: {
    flex: 1,
  },
  flex1: { flex: 1 },
  flex2: { flex: 2 },
  flex3: { flex: 3 },
  container: {
    flex: 1,
    borderColor: 'green',
    borderWidth: DEBUG ? 2 : 0,
    backgroundColor: colors.white,
  },
  content: {
    flex: 1,
    borderColor: 'red',
    borderWidth: DEBUG ? 2 : 0,
    padding: spaces.lg,
  },
  contentScroll: { paddingHorizontal: spaces.lg },
  header: {
    marginTop: spaces.xl + 30,
    borderColor: 'blue',
    borderWidth: DEBUG ? 2 : 0,
  },
  root: {
    flex: 1,
    backgroundColor: 'white',
  },
  body: {
    flex: 1,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'yellow',
    borderWidth: DEBUG ? 2 : 0,
  },
  bodyIllustration: {
    width: '70%',
    maxHeight: 270,
    alignSelf: 'center',
    paddingVertical: spaces.md,
  },
  scrollView: {
    paddingBottom: spaces.lg,
    justifyContent: 'flex-start',
    display: 'flex',
    flexGrow: 1,
    width: '100%',
    borderColor: 'pink',
    borderWidth: DEBUG ? 2 : 0,
  },
  footer: {
    borderColor: 'cyan',
    borderWidth: DEBUG ? 2 : 0,
  },
  actions: {
    width: 310,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  action: {
    backgroundColor: 'white',
    width: '45%',
    borderRadius: radius.sm,
    paddingVertical: spaces.md,
    marginHorizontal: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionBadge: {
    height: 52,
    width: 52,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.black,
    borderRadius: 52,
    position: 'absolute',
    right: -52 / 4,
    top: -52 / 4,
  },
  horizontalDivider: {
    marginVertical: spaces.md,
    width: '85%',
    alignSelf: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(0,0,0,.3)',
  },
  actionIllustration: {},
  // MODAL TOP BAR CONTAINER
  topbarContainer: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: spaces.xl,
    alignItems: 'center',
    zIndex: 10,
    borderWidth: DEBUG ? 2 : 0,
  },
  // tags wrapper
  hashtagsWrap: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  tagContainer: {
    padding: 4,
  },

  // mood tracker header
  moodContainer: {
    width: 112,
    aspectRatio: 1,
    backgroundColor: 'transparent',
    alignSelf: 'center',
    padding: 8,
  },
});

export default styles;
