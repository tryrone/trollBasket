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
  detailsNavWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  backButton: {
    height: 24,
    width: 24,
  },
  detailNavText: {
    ...FONTS.bodyText,
    fontSize: 14,
    fontWeight: '400',
    position: 'relative',
    left: 16,
  },
  searchCartWrap: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchButton: {
    height: 24,
    width: 24,
  },
  cart: {
    height: 24,
    width: 24,
  },
  productImageWrap: {
    backgroundColor: 'rgba(226,233,240,0.2)',
    position: 'relative',
    paddingHorizontal: 31,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 10,
  },
  productImage: {
    height: 206,
    width: 312,
    borderRadius: 4,
    resizeMode: 'contain',
  },
  detailWrap: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  productTitle: {
    ...FONTS.bodyText,
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'left',
  },
  productDetail: {
    ...FONTS.bodyText,
    fontSize: 12,
    fontWeight: '400',
    textAlign: 'left',
    lineHeight: 21,
    color: '#627483',
  },
  productPrice: {
    ...FONTS.largeTitle,
    fontSize: 16,
    textAlign: 'left',
    marginTop: 18,
  },
  pieceSpan: {
    ...FONTS.bodyText,
    fontSize: 12,
    textAlign: 'left',
    color: '#627483',
    fontStyle: 'italic',
  },
  productDescWrap: {
    height: 53,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopColor: 'rgba(226,233,240,0.7)',
    borderTopWidth: 1,
    borderBottomColor: 'rgba(226,233,240,0.7)',
    borderBottomWidth: 1,
  },
  productDescText: {
    ...FONTS.bodyText,
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'left',
  },
  rightArrow: {
    height: 16,
    width: 16,
  },
  ratingsWrap: {
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  ratingsHeaderWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ratingsTitle: {
    ...FONTS.bodyText,
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'left',
  },
  viewAll: {
    ...FONTS.bodyText,
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'right',
    color: COLORS.primary,
  },
  ratingsFlex: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    ...FONTS.bodyText,
    fontSize: 12,
    fontWeight: '400',
    textAlign: 'left',
    position: 'relative',
    top: 10,
    marginLeft: 5,
  },
  ratingText: {
    marginTop: 16,
    color: '#627483',
    ...FONTS.bodyText,
    fontSize: 12,
    lineHeight: 21,
    textAlign: 'left',
  },
  userRatingWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  userAvater: {
    height: 24,
    width: 24,
  },
  userName: {
    ...FONTS.bodyText,
    fontSize: 12,
    textAlign: 'left',
    marginLeft: 8,
  },
  BtnContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    width: width,
    height: 100,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  cartWrap: {
    position: 'absolute',
    top: 0,
    right: 0,
    height: 16,
    minWidth: 16,
    paddingHorizontal: 2,
    backgroundColor: '#EE6F44',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartText: {
    ...FONTS.bodyText,
    color: 'white',
    fontSize: 10,
  },
  itemCartWrap: {
    zIndex: 4,
    position:'absolute',
    top:-5,
    // left:0,
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#D3FDE9',
    borderRadius: 4,
    borderWidth: 1,
    width:'100%',
    borderColor: '#93ECC1',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemCartText: {
    ...FONTS.bodyText,
    fontSize: 14,
    fontWeight: '400',
  },
  close:{
    height:16,
    width:16
  }
});