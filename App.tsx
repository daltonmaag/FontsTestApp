import React from 'react';
import {StyleSheet, Platform, I18nManager, Text} from 'react-native';
import CustomView from './CustomView';
import './translations/Localize';
import {useTranslation} from 'react-i18next';

const isIOS = Platform.OS === 'ios';

const App = () => {
  const {t} = useTranslation();

  const isRtl = I18nManager.isRTL;

  const commonTextStyles = {
    fontSize: 36,
    lineHeight: isRtl ? 60 : 40,
    letterSpacing: isIOS ? (!isRtl ? -0.6 : undefined) : -0.6, // ISSUE: Letter spacing issue in ios in RTL
    color: 'black',
    backgroundColor: '#cacaca',
    marginBottom: 16,
    textAlign: 'left',
  };

  const paddingTopTextStyles = {
    ...commonTextStyles,

    // Possible fix: add padding-top
    // https://github.com/facebook/react-native/issues/7687
    paddingTop: 10,
  };

  const textAlignTextStyles = {
    ...commonTextStyles,

    // https://reactnative.dev/docs/text-style-props#textalignvertical-android
    includeFontPadding: false,
    textAlignVertical: 'bottom',
    verticalAlign: 'bottom',
  };

  // ISSUE: In LTR text clipping issue with OG assets/fonts/duCoBrand_A_Bd_arabic
  const original_duCoBrand_A_Bd = {
    fontFamily: isIOS ? 'duCoBrandBetaAppArabic-Bold' : 'duCoBrand_A_Bd_arabic',
  };

  // SOLUTION: In LTR text clipping issue resolved with modified assets/fonts/duCoBrand_A_Bd_english
  // NOTE: In RTL using original_duCoBrand_A_Bd
  const modified_duCoBrand_A_Bd = isRtl
    ? original_duCoBrand_A_Bd
    : {
        fontFamily: isIOS ? 'duCoBrandBetaApp-Bold' : 'duCoBrand_A_Bd_english',
      };

  return (
    <CustomView>
      <Text style={[commonTextStyles, modified_duCoBrand_A_Bd]}>
        {t('Title')}
      </Text>
      <Text style={[commonTextStyles, original_duCoBrand_A_Bd]}>
        {t('Title')}
      </Text>
      <Text style={[paddingTopTextStyles, original_duCoBrand_A_Bd]}>
        It’s a bright idea to choose you (paddingTop)
      </Text>
      <Text style={[textAlignTextStyles, original_duCoBrand_A_Bd]}>
        It’s a bright idea to choose you (alignment)
      </Text>
      <Text style={[commonTextStyles, styles.duCoBrand_A_Lt]}>
        {t('Title')}
      </Text>
      <Text style={[commonTextStyles, styles.duCoBrand_A_Md]}>
        {t('Title')}
      </Text>
      <Text style={[commonTextStyles, styles.duCoBrand_A_Rg]}>
        {t('Title')}
      </Text>
      <Text style={[commonTextStyles, styles.duCoBrand_A_SBd]}>
        {t('Title')}
      </Text>
      {/* duCoBrandVF_A_Wght - Font weight is not applying in android and Text clipping issue */}
      <Text style={[commonTextStyles, styles.duCoBrandVF_A_Wght]}>
        {t('Title')}
      </Text>
    </CustomView>
  );
};

// FONT FAMILY NAME is postScriptName of respective font family .ttf file

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  duCoBrand_A_Lt: {
    fontFamily: isIOS ? 'duCoBrandBetaApp-Light' : 'duCoBrand_A_Lt',
  },
  duCoBrand_A_Md: {
    fontFamily: isIOS ? 'duCoBrandBetaApp-Medium' : 'duCoBrand_A_Md',
  },
  duCoBrand_A_Rg: {
    fontFamily: isIOS ? 'duCoBrandBetaApp-Regular' : 'duCoBrand_A_Rg',
  },
  duCoBrand_A_SBd: {
    fontFamily: isIOS ? 'duCoBrandBetaApp-SemiBold' : 'duCoBrand_A_SBd',
  },
  duCoBrandVF_A_Wght: {
    fontFamily: isIOS ? 'duCoBrandBetaVFApp-Regular' : 'duCoBrandVF_A_Wght',
    fontWeight: '500',
  },
});

export default App;
