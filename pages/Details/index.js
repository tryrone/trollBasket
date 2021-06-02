import React,{useState} from 'react'
import { View ,Image,ScrollView,Text,TouchableOpacity,Dimensions} from 'react-native'
import CustomSearch from '../../components/CustomSearch';
import { COLORS, images,moneyFormat } from '../../constants'
import DetailsNav from './DetailsNav';
import  CustomButton from '../../components/CustomButton';
import {
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Ratings from './Ratings';
import {addToCart} from '../../store/actions/CartAction'
import { connect } from 'react-redux';



const style = require('./detailsStyle');
const{height} = Dimensions.get('screen');


 function Details({ navigation, route, addToCart,cart }) {
   const { product } = route.params;
   const{cartData} = cart;
   const [addedToCart, setAddedToCart] = useState(false);
   const [visible, setVisivle] = useState(false);

   const availableInCart = (id) =>{
    return new Promise((resolved, reject) => {
      try{
      const dataRes = cartData.filter((cartItem) => cartItem.id == id);
      resolved(dataRes.length);
      }catch(e){
        reject(e);
      }  
    });
   }


   return (
     <View style={style.container}>
       <View style={{ position: 'relative' }}>
         <DetailsNav
           setSearch={() => {
             setVisivle(!visible);
           }}
           cartData={cartData}
           navigation={navigation}
         />
       </View>
       <View style={{ height: height * 0.77 }}>
         {visible && <CustomSearch navigation={navigation} />}
         <ScrollView showsVerticalScrollIndicator={false}>
           <View style={style.productImageWrap}>
             {addedToCart && (
               <View style={style.itemCartWrap}>
                 <Text style={style.itemCartText}>
                   Item added to cart successfully
                 </Text>
                 <TouchableOpacity
                   onPress={() => {
                     setAddedToCart(false);
                   }}
                 >
                   <Image source={images.close} style={style.close} />
                 </TouchableOpacity>
               </View>
             )}

             <Image
               source={{ uri: product.image }}
               style={style.productImage}
             />
           </View>

           <View style={style.detailWrap}>
             <Text style={style.productTitle}>{product.title}</Text>
             <Text
               numberOfLines={2}
               ellipsizeMode="tail"
               style={style.productDetail}
             >
               {product.description}
             </Text>

             <Text style={style.productPrice}>
               ₦{moneyFormat(product.price)}{' '}
               <Text style={style.pieceSpan}>/Piece</Text>
             </Text>
           </View>

           <TouchableOpacity style={style.productDescWrap}>
             <Text style={style.productDescText}>Product Description</Text>
             <Image source={images.rightArrow} style={style.rightArrow} />
           </TouchableOpacity>

           <Ratings />
         </ScrollView>
       </View>
       <View style={style.BtnContainer}>
         <CustomButton
           textColor="white"
           onButtonClick={async () => {
             if (cartData.length !== 0) {
               availableInCart(product.id).then((res) => {
                 if (res > 0) {
                   setAddedToCart(true);
                   setTimeout(() => {
                     setAddedToCart(false);
                   }, 2000);
                 } else {
                   addToCart(product);
                   setAddedToCart(true);
                   setTimeout(() => {
                     setAddedToCart(false);
                   }, 2000);
                 }
               });
             } else {
               addToCart(product);
               setAddedToCart(true);
               setTimeout(() => {
                 setAddedToCart(false);
               }, 2000);
             }
           }}
           btnWidth={wp(45)}
           text="Add to cart"
           btnColor={COLORS.primary}
           btnBorderColor={COLORS.primary}
         />
         <CustomButton
           textColor="#2E4457"
           onButtonClick={() => {}}
           btnWidth={wp(45)}
           text="Wishlist"
           btnColor={'white'}
           btnBorderColor={'#2E4457'}
         />
       </View>
     </View>
   );
 }


const mapStateToProps = state => ({
  cart:state.cart,
});

export default connect(mapStateToProps, { addToCart })(Details);
