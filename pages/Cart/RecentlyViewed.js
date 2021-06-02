import React from 'react';
import { View, Text,TouchableOpacity,StyleSheet,Image } from 'react-native';
import { productData } from '../../data';
import {FONTS} from  '../../constants';

const styleThree = require('../Details/detailsStyle');
const styleTwo = require('./cartStyle');

 function RecentlyViewed({ navigation }) {
   return (
     <View style={styleTwo.recentWrap}>
       <View style={styleThree.ratingsHeaderWrap}>
         <Text style={styleThree.ratingsTitle}>Review and Ratings</Text>
         <TouchableOpacity>
           <Text style={styleThree.viewAll}>View all</Text>
         </TouchableOpacity>
       </View>

       <View style={style.productWrap}>
         {productData.slice(0, 3).map((product) => {
           return (
             <TouchableOpacity
               onPress={() => {
                 navigation.navigate('Details', { product });
               }}
               key={'product' + product.id}
               style={{ width: 102.61, marginTop: 19 }}
             >
               <Image
                 source={{ uri: product.image }}
                 style={style.productImage}
               />
               <Text
                 style={style.productTitle}
                 numberOfLines={2}
                 ellipsizeMode="tail"
               >
                 {product.title}
               </Text>
               <Text
                 style={style.productPrice}
                 numberOfLines={1}
                 ellipsizeMode="tail"
               >
                 ₦{product.price}
               </Text>
               <Text
                 style={style.productCategory}
                 numberOfLines={1}
                 ellipsizeMode="tail"
               >
                 {product.category}
               </Text>
             </TouchableOpacity>
           );
         })}
       </View>
     </View>
   );
 }

export default RecentlyViewed;

const style = StyleSheet.create({
  productWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop:16
  },
  productImage: {
    height: 98,
    width: 101,
    borderRadius: 4,
  },
  productTitle: {
    ...FONTS.bodyText,
    textAlign: 'left',
    fontSize: 10,
    marginTop: 5,
    color: '#718596',
  },
  productPrice: {
    ...FONTS.largeTitle,
    fontSize: 12,
    fontWeight: '700',
    textAlign: 'left',
  },
  productCategory: {
    ...FONTS.bodyText,
    fontSize: 10,
    fontWeight: '400',
    textAlign: 'left',
    color: '#56636D',
  },
});