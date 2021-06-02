import { StyleSheet, Platform, Dimensions, StatusBar } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { COLORS, FONTS } from '../../constants';

const  {height} = Dimensions.get('screen');

module.exports = StyleSheet.create({
  continer: {
    height: height - 80,
    backgroundColor: 'white',
    paddingTop: Platform.OS == 'ios' ? 50 : StatusBar.currentHeight,
  },
  pageTitle: {
    ...FONTS.bodyText,
    fontWeight: '500',
    fontSize: 14,
    textAlign: 'left',
    marginLeft: 16,
  },
  functionRow: {
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 19,
    borderTopColor: COLORS.lightGray,
    borderTopWidth: 1,
    borderBottomColor: COLORS.lightGray,
    borderBottomWidth: 1,
    height: 45,
    paddingVertical: 11,
  },
  clickRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  location: {
    height: 24,
    width: 24,
  },
  cityText: {
    ...FONTS.bodyText,
    fontSize: 12,
    fontWeight: '400',
    marginLeft: 8,
  },
  downArrow: {
    height: 16,
    width: 16,
    position: 'relative',
    top: 2,
    left: 6,
  },
  sideBorders:{
        borderRightWidth:1,
        borderRightColor:COLORS.lightGray,
        borderLeftWidth:1,
        borderLeftColor:COLORS.lightGray,
        width:140,
        justifyContent:'center'
  }
});
