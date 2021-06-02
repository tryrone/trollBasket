import { StyleSheet, Platform, Dimensions, StatusBar } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { COLORS, FONTS } from '../../constants';

const  {height,width} = Dimensions.get('screen');

module.exports = StyleSheet.create({
  container: {
    height: height,
    backgroundColor: 'white',
    paddingTop: Platform.OS == 'ios' ? 50 : StatusBar.currentHeight,
  },
  productsContainer: {
    paddingBottom: 20,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(226,233,240,0.3)',
    marginTop: 12,
  },
  productWrap: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginTop: 16,
  },
  productTopWrap: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  productCartImage: {
    height: 48,
    width: 48,
    borderRadius: 4,
  },
  productDetailWrap: {
    marginLeft: 16,
    width:'80%'
  },
  productName: {
    ...FONTS.bodyText,
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'left',
  },
  productPrice: {
    ...FONTS.largeTitle,
    fontSize: 14,
    fontWeight: '700',
    textAlign: 'left',
  },
  productBottomWrap: {
    marginTop: 11,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: '#F6F2F2',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  deleteWrap: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  delete: {
    height: 24,
    width: 24,
  },
  deleteText: {
    ...FONTS.bodyText,
    fontSize: 12,
    fontWeight: '400',
    textAlign: 'left',
    marginLeft: 8,
  },
  numberWrap: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  minus: {
    height: 28,
    width: 28,
  },
  productNumber: {
    ...FONTS.bodyText,
    fontSize: 11.2,
    fontWeight: '500',
    marginHorizontal: 7.35,
  },
  totalCont: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 8,
    borderBottomColor: 'rgba(226,233,240,0.3)',
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  totalText: {
    ...FONTS.bodyText,
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'left',
  },
  subTotalAmount: {
    ...FONTS.bodyText,
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'right',
  },
  totalAmount: {
    ...FONTS.largeTitle,
    fontSize: 14,
    textAlign: 'right',
  },
  recentWrap: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
});