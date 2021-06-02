import React from 'react'
import { View,FlatList, StyleSheet,TouchableOpacity,Image,Text } from 'react-native'
import { FONTS, images } from '../../../constants'

 function Categories() {

      const renderCategory =  (item) =>{
            const{img,title,bgColor} = item;
            return (
              <TouchableOpacity style={{alignItems:'center' }}>
                <View style={[style.box, { backgroundColor: bgColor }]}>
                  <Image
                    source={img}
                    style={[
                      style.image,
                      { width: img == DATA[1].img ? 18.07 : 24 },
                    ]}
                  />
                </View>

                <Text style={style.productName}>{title}</Text>
              </TouchableOpacity>
            );
      }

      const DATA = [
        {
          id: 'iuhdjkv',
          img: images.document,
          title: 'Product \n categories',
          bgColor: '#227EFF',
        },
        {
          id: 'adklcjlka',
          img: images.fire,
          title: 'Popular \n  Products',
          bgColor: '#EE6F44',
        },
        {
          id: 'adlckadkv',
          img: images.like,
          title: 'Recommended \n  Products',
          bgColor: '#7E42F5',
        },
        {
          id: 'adkcnmlsdvkj',
          img: images.shop,
          title: 'Shops',
          bgColor: '#05944F',
        },
      ];


      return (
        <View style={style.categoryWrap}>
          {DATA.map((item) => {
                return (
                  <View  key={item.id}>
                    {renderCategory(item)}
                  </View>
                );
          })}
        </View>
      );
}

const style = StyleSheet.create({
  categoryWrap: {
    marginTop: 29,
    paddingHorizontal:25,
    flexDirection:'row',
    justifyContent:'space-between',
  },
  box: {
    height: 48,
    width: 48,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 24,
  },
  productName:{
      ...FONTS.bodyText,
      fontSize:10,
      fontWeight:'400',
      marginTop:5,
      lineHeight:15
  }
});


export default  Categories;