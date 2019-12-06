import { StyleSheet, Platform } from 'react-native';

export const baseHeight = 35;

export default StyleSheet.create({
  container: {
    height: baseHeight,
    backgroundColor: 'white',
    borderBottomWidth: 1.5,
    borderBottomColor: 'gray',
    flexDirection: 'row',
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 5,
  },
  textContainer: {
    justifyContent: 'center',
    flex: 1,
  },
  label: {
    fontSize: 20,
  },
  placeholder: {
    color: 'grey',
  },
  square: {
    width: 10,
    height: 10,
    backgroundColor: 'gray',
  },
  option: {
    paddingHorizontal: 5,
    justifyContent: 'center',
    height: baseHeight,
  },
  flatlist: {
    position: 'absolute',
    top: baseHeight,
    left: 0,
    right: 0,
    backgroundColor: 'white',

    ...Platform.select({
      ios: {
        shadowRadius: 2,
        shadowColor: 'rgba(0, 0, 0, 1.0)',
        shadowOpacity: 0.54,
        shadowOffset: { width: 0, height: 2 },
      },

      android: {
        elevation: 2,
      },
    }),
  },
  modalContainer: {
    ...StyleSheet.absoluteFillObject,
  },
  accessory: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  triangle: {
    width: 8,
    height: 8,
    transform: [{
      translateY: -4,
    }, {
      rotate: '45deg',
    }],
    backgroundColor: 'grey',
  },
  triangleContainer: {
    width: 12,
    height: 6,
    overflow: 'hidden',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
});
