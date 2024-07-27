import React from 'react';
import {
  View,
  I18nManager,
  Platform,
  ScrollView,
  TouchableOpacity,
  Text,
} from 'react-native';
import {useTranslation} from 'react-i18next';
import RNRestart from 'react-native-restart';

const CustomView = props => {
  const {t, i18n} = useTranslation();
  const selectedLanguageCode = i18n.language;

  const setLanguage = language => {
    i18n.changeLanguage(language);
    I18nManager.forceRTL(language === 'ar');
    I18nManager.allowRTL(language === 'ar');
    setTimeout(() => {
      RNRestart.Restart();
    }, 10);
    return;
  };

  const marginTop = Platform.OS === 'ios' ? 50 : 0;

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        padding: 16,
        marginTop,
      }}>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'space-evenly',
          paddingBottom: 24,
          alignItems: 'center',
        }}>
        <TouchableOpacity
          activeOpacity={1}
          style={{
            padding: 16,
            backgroundColor:
              selectedLanguageCode === 'en' ? '#753bbd' : 'transparent',
            borderRadius: 8,
          }}
          onPress={() => {
            selectedLanguageCode !== 'en' && setLanguage('en');
          }}>
          <Text
            style={{
              color: selectedLanguageCode === 'en' ? '#ffffff' : '#000000',
            }}>
            English
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          style={{
            padding: 16,
            backgroundColor:
              selectedLanguageCode === 'ar' ? '#753bbd' : 'transparent',
            borderRadius: 8,
          }}
          onPress={() => {
            selectedLanguageCode !== 'ar' && setLanguage('ar');
          }}>
          <Text
            style={{
              color: selectedLanguageCode === 'ar' ? '#ffffff' : '#000000',
            }}>
            Arabic
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{width: '100%', height: 1, backgroundColor: '#cacaca'}} />
      <ScrollView style={{paddingVertical: 24}} showsVerticalScrollIndicator={false}>
        {props.children}
        <View style={{height: 24}} />
      </ScrollView>
    </View>
  );
};

export default CustomView;
