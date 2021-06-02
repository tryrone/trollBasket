import React from 'react'
import { View, Text,Image,TouchableOpacity } from 'react-native';
import {images} from '../../constants';

const  style = require('../Details/detailsStyle');

export default function CartNav({navigation}) {
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
          <Text style={[style.detailNavText,{left:-20}]}>Carts</Text>
          <View style={style.searchCartWrap}/>
        </View>
      );
}
