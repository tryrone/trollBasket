import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native';
import {images} from '../../constants'

const  style= require('./detailsStyle');

export default function DetailsNav({ navigation, cartData, setSearch }) {
  return (
    <View style={style.detailsNavWrap}>
      <TouchableOpacity
        style={{ padding: 8 }}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Image source={images.backButton} style={style.backButton} />
      </TouchableOpacity>
      <Text style={style.detailNavText}>Details</Text>
      <View style={style.searchCartWrap}>
        <TouchableOpacity
          onPress={setSearch}
          style={{ padding: 8 }}
        >
          <Image source={images.searchButton} style={style.searchButton} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Cart');
          }}
          style={{ padding: 8, position: 'relative' }}
        >
          <Image source={images.cart} style={style.cart} />
          {cartData.length !== 0 && (
            <View style={style.cartWrap}>
              <Text style={style.cartText}>{cartData.length}</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}
