import React,{useState} from 'react';
import { productData } from '../../data';
import SearchInput, { createFilter } from 'react-native-search-filter';
import { View, Image,Text, TextInput, FlatList, StyleSheet,Dimensions, TouchableOpacity } from 'react-native'
import { COLORS, FONTS, images } from '../../constants';

const {width} = Dimensions.get('screen');
const KEYS_TO_FILTERS = ['title'];

 function CustomSearch({ customStyle ,navigation}) { 
   const [searchText, setSearchText] = useState('');
  

   const filteredProducts = productData.filter(
     createFilter(searchText, KEYS_TO_FILTERS)
   );

   const renderSearchItem = ({item}) => {
      const { image, title } = item;
     return (
       <TouchableOpacity onPress={()=>{
         navigation.navigate('Details',{product:item});
       }} style={style.detailCont}>
         <Image source={{ uri: image }} style={style.image} />
         <Text numberOfLines={1} ellipsizeMode="tail" style={style.detail}>
           {title}
         </Text>
       </TouchableOpacity>
     );
   }

   return (
     <View style={{ position: 'relative', backgroundColor: 'white' }}>
       <View style={[style.searchWrap, customStyle]}>
         <SearchInput
           style={style.textBox}
           placeholder="Search merchbuy"
           onChangeText={(val) => {
             setSearchText(val);
           }}
         />
         <Image source={images.search} style={style.seach} />
       </View>

       {searchText.length !== 0 && (
         <View style={style.searchDetailWrap}>
           <FlatList
             data={filteredProducts}
             ListEmptyComponent={<View style={{padding:10}} ><Text style={{textAlign:'center'}}>No product found...</Text></View>}
             renderItem={renderSearchItem}
             keyExtractor={(item) => item.id}
           />
         </View>
       )}
     </View>
   );
 }

  const style = StyleSheet.create({
    searchWrap: {
      width: width * 0.9,
      alignSelf: 'center',
      marginTop: 14,
      borderRadius: 4,
      padding: 8,
      backgroundColor: '#EDF2F7',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    textBox: {
      ...FONTS.bodyText,
      fontSize: 14,
      width: width * 0.75,
      color: '#6F798B',
      textAlign: 'left',
    },
    seach: {
      height: 16,
      width: 16,
    },
    searchDetailWrap: {
      maxHeight: 200,
      backgroundColor: '#EDF2F7',
      width: width * 0.9,
      alignSelf: 'center',
      marginTop: 1,
    },
    image: {
      height: 40,
      width: 40,
      borderRadius: 4,
      resizeMode:'contain'
    },
    detailCont: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderTopColor: COLORS.lightGray,
      borderTopWidth: 1,
    },
    detail: {
      ...FONTS.bodyText,
      fontSize: 14,
      width: '85%',
      color: 'black',
      textAlign: 'left',
      marginLeft: 10,
    },
  });



export default CustomSearch;