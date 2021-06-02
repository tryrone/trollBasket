import React from 'react';
import { productData } from '../../../data';
import { View, Text ,TouchableOpacity,StyleSheet,Image,Dimensions} from 'react-native';
import { FONTS } from '../../../constants';

const {width}  = Dimensions.get('screen');

function Products({ navigation }) {
  return (
    <View style={style.productWrap}>
      {productData.map((product) => {
        return (
          <TouchableOpacity
          onPress={()=>{navigation.navigate('Details',{product})}}
            key={'product' + product.id}
            style={{ width: 102.61, marginTop: 19 }}
          >
            <Image source={{ uri: product.image }} style={style.productImage} />
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
  );
}

export default Products;


const style = StyleSheet.create({
  productWrap: {
    paddingHorizontal: 20,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    flexWrap:'wrap'
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