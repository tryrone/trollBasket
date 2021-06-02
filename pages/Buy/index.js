import React from 'react'
import { View, Text, TouchableOpacity, Image,Dimensions,ScrollView,TouchableWithoutFeedback } from 'react-native';
import CustomSearch from '../../components/CustomSearch';
import { images } from '../../constants';
import Categories from './Categories';
import ContactUs from './ContactUs';
import Products from './Products';
import { connect } from 'react-redux';


const style = require('./buyStyle');
const styleTwo = require('../Details/detailsStyle');
const {height} = Dimensions.get('screen');

 function Buy({navigation,cart}) {
   const {cartData} =  cart;

  

      return (
        <TouchableWithoutFeedback onPress={()=>{}} >
        <View style={style.continer}>
          <Text style={style.pageTitle}>Trollbasket</Text>

          <View style={style.functionRow}>
            <TouchableOpacity style={style.clickRow}>
              <Image source={images.location} style={style.location} />
              <Text style={style.cityText}>Lagos</Text>
              <Image source={images.downArrow} style={style.downArrow} />
            </TouchableOpacity>
            <TouchableOpacity style={[style.clickRow, style.sideBorders]}>
              <Image source={images.packageImage} style={style.location} />
              <Text style={style.cityText}>My Orders</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Cart');
              }}
              style={style.clickRow}
            >
              <View style={{ position: 'relative' }}>
                <Image source={images.cart} style={style.location} />
                {cartData.length !== 0 && (
                  <View style={[styleTwo.cartWrap, { top: -8, right: -5 }]}>
                    <Text style={styleTwo.cartText}>{cartData.length}</Text>
                  </View>
                )}
              </View>

              <Text style={style.cityText}>Cart</Text>
            </TouchableOpacity>
          </View>

          <CustomSearch navigation={navigation} />

          <ContactUs />

          <Categories />
          <View style={{ height: height * 0.355, marginTop: 24 }}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <Products navigation={navigation} />
            </ScrollView>
          </View>
        </View>
        </TouchableWithoutFeedback>
      );
}
const mapStateToProps = state => ({
  cart:state.cart,
});

export default connect(mapStateToProps, {})(Buy);