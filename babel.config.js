module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: [
          '.ios.js',
          '.android.js',
          '.ios.jsx',
          '.android.jsx',
          '.js',
          '.jsx',
          '.json',
          '.ts',
          '.tsx',
        ],
        root: ['.'],
        alias: {
          // '@api': './src/api',
          // '@assets': './src/assets',
          '@global-design-toolkit': './src/global-design-toolkit',
          '@app-design-toolkit': './src/app-design-toolkit',
          '@components': './src/components',
          '@theme': './src/theme',
          '@utils': './src/utils',
          // '@constants': './src/constants',
          // '@modules': './src/modules',
          // '@mocks': './src/mocks',
          // '@core': './src/core',
          // '@profiles': './src/profiles',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
