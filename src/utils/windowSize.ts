import {PixelRatio, Dimensions} from 'react-native';

const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');

export const widthPercentageToDP = (widthPercent: string): number => {
  const elemWidth = parseFloat(widthPercent);
  return parseFloat(
    PixelRatio.roundToNearestPixel((viewportWidth * elemWidth) / 100).toFixed(
      2,
    ),
  );
};

export const heightPercentageToDP = (heightPercent: string): number => {
  const elemWidth = parseFloat(heightPercent);
  return parseFloat(
    PixelRatio.roundToNearestPixel((viewportHeight * elemWidth) / 100).toFixed(
      2,
    ),
  );
};
