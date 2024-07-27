import {Dimensions, PixelRatio} from 'react-native';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

const scale = SCREEN_WIDTH / 375;

const scaleVertical = SCREEN_HEIGHT / 812;

const widthSizes = {};
const heightSizes = {};

export function widthPixel(size, responsiveScaling = true) {
  if (!responsiveScaling) {
    return size;
  }

  if (widthSizes?.[size?.toString()]) {
    return widthSizes?.[size?.toString()];
  }

  const elemWidth = typeof size === 'number' ? size : parseFloat(size);

  if (typeof size !== 'number') {
    return PixelRatio.roundToNearestPixel((SCREEN_WIDTH * elemWidth) / 100);
  }

  const newSize = elemWidth * scale;

  widthSizes[size] = Math.round(PixelRatio.roundToNearestPixel(newSize));

  return widthSizes[size];
}

export function heightPixel(size, responsiveScaling = true) {
  if (!responsiveScaling) {
    return size;
  }

  if (heightSizes[size?.toString()]) {
    return heightSizes[size?.toString()];
  }

  const elemHeight = typeof size === 'number' ? size : parseFloat(size);

  if (typeof size !== 'number') {
    return PixelRatio.roundToNearestPixel((SCREEN_HEIGHT * elemHeight) / 100);
  }

  const newSize = elemHeight * scaleVertical;

  heightSizes[size] = Math.round(PixelRatio.roundToNearestPixel(newSize));

  return heightSizes[size];
}

// dp - Device pixel - dp(52) here 52 is pixel and it converts to device screen density (dpi).
const dp = (px) => {
  return (px * 3) / PixelRatio.get();
};

// fp - Font pixel - fp(14) here 14 is pixel and it converts to device screen density along with device font scale
const fp = (px = 14) => {
  // return (px * 3) / (PixelRatio.getFontScale() * PixelRatio.get());
  // return px * scale;
  return px;
};

// NOTE:
// Do not use dp for fontSize. dp just depends on device screen density (dpi)
// fp is used for fontSize only. fp is also just like dp but the difference is that it also depends on user's font settings in his device along with the device screen density (dpi).

const getPercentInNumber = (numberValue) => {
  const max = Math.max(100, numberValue);
  const min = Math.min(100, numberValue);

  return (min / max) * 100;
};

const boldString = (str, substr) => {
  if (substr) {
    var strRegExp = new RegExp(substr, 'g');
    return str.replace(strRegExp, '**' + substr + '**');
  } else {
    return str;
  }
};

export {dp, fp, getPercentInNumber, boldString};
