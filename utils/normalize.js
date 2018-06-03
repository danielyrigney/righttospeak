// A utility function to normalize text sizing based on the screen pixel ratio.
// https://stackoverflow.com/questions/34837342/font-size-on-iphone-6s-plus


import { Dimensions, Platform, PixelRatio } from 'react-native';

const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

// based on iPhone 5s's scale
const scale = screenWidth / 320;

const normalize = (size) => {
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(size))
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(size)) - 2
  }
}

export default normalize;
