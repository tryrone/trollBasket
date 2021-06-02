import React from 'react'
import { View, Text, StyleSheet,Image, ImageBackground, Dimensions } from 'react-native';
import CustomButton from '../../components/CustomButton';
import {COLORS, FONTS, images}   from  '../../constants';

const {height,width} = Dimensions.get('screen');

 function CheckoutPage({navigation}) {
   setTimeout(()=>{
     navigation.navigate('Dash');
   },3000)
      return (
        <ImageBackground source={images.background} style={style.imageBack}>
          <View style={style.buttonWrap}>
            <Image
              source={images.checkoutButton}
              style={style.checkoutButton}
            />

            <Text style={style.checkText}>Checkout Succesful</Text>
            <Text style={style.checkTextSmall}>
              Your checkout is now successful.
            </Text>

            <CustomButton
              text="Got It"
              textColor={COLORS.primary}
              onButtonClick={() => {
                navigation.navigate('Dash');
              }}
              btnWidth="90%"
              btnColor='white'
              btnBorderColor='white'
              customStyle={{ height: 56,position:'absolute',bottom:40,alignSelf:'center' }}
            />
          </View>
        </ImageBackground>
      );
}

export default CheckoutPage;

const style = StyleSheet.create({
  imageBack: {
    height: height,
    width: width,
    backgroundColor: COLORS.primary,
  },
  checkoutButton: {
    height: 140,
    width: 140,
    alignSelf: 'center',
  },
  buttonWrap: {
    height: height,
    width: width,
    justifyContent: 'center',
  },
  checkText: {
    ...FONTS.largeTitle,
    color: 'white',
    marginTop: 23,
    fontSize: 24,
    textAlign: 'center',
  },
  checkTextSmall: {
    ...FONTS.bodyText,
    color: 'white',
    marginTop: 10,
    fontSize: 14,
    textAlign: 'center',
  },
});