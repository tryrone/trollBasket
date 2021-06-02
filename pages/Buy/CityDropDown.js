import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native';
import {images} from '../../constants';

const style = require('./buyStyle');

 function CityDropDown({ openModal,city }) {
   return (
     <View>
       <TouchableOpacity
         onPress={() => {
           openModal(true);
         }}
         style={style.clickRow}
       >
         <Image source={images.location} style={style.location} />
         <Text style={style.cityText}>{city}</Text>
         <Image source={images.downArrow} style={style.downArrow} />
       </TouchableOpacity>
     </View>
   );
 }

export default CityDropDown;

