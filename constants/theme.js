import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');


export const FONTS = {
  largeTitle: {
    fontFamily: 'NotoSansJP-Bold',
    fontWeight: '700',
  },
  bodyText: {
    fontFamily: 'NotoSansJP-Regular',
    textAlign: 'center',
  },
  inputText: {
    fontFamily: 'NotoSansJP-Regular',
    textAlign: 'center',
  },
};

export const COLORS = {
  // base colors
  primary: '#227EFF',
  gray: '#A0B1C0',
  lightGray: '#CBD6E0',
};

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 30,
  padding: 10,
  padding2: 12,

  // font sizes
  largeTitle: 50,
  h1: 30,
  h2: 22,
  h3: 20,
  h4: 18,
  body1: 30,
  body2: 20,
  body3: 16,
  body4: 14,
  body5: 12,

  // app dimensions
  width,
  height,
};
export const CITIES = [
  'Clear filter',
  'Lagos',
  'Abuja',
  'Owerri',
  'Ilorin',
  'Ibadan',
  'Kano',
  'Kaduna',
  'Warri',
  'Benin',
  'Enugu',
  'Cross-River',
  'Abeokuta',
  'Anambra',
];
