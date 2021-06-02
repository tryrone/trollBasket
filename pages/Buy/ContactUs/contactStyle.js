import { StyleSheet, Platform, Dimensions, StatusBar } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { COLORS, FONTS } from '../../../constants';

const  {width} = Dimensions.get('screen');

module.exports = StyleSheet.create({
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  slimBox: {
    height: 123,
    width: 19,
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
  },
  slimBoxTwo: {
    height: 123,
    width: 19,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
  },
  contactBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 123,
    width: width * 0.85,
    position: 'relative',
    paddingHorizontal: 24,
    overflow: 'hidden',
    borderRadius: 8,
  },
  contactText: {
    ...FONTS.largeTitle,
    color: 'white',
    textAlign: 'left',
  },
  issue: {
    color: '#F39677',
  },
  starBg: {
    position: 'absolute',
    top: 0,
    left: 0,
    resizeMode: 'cover',
    zIndex: 0,
    height: 123,
    width: width
  },
});