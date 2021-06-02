import React,{useState} from 'react';
import { View, Text,Image,TouchableOpacity } from 'react-native';
import  {images, moneyFormat} from  '../../constants';
import {deleteFromCart} from '../../store/actions/CartAction';
import { connect } from 'react-redux';

const style =  require('./cartStyle'); 


 function ProductCard({ product, cart, deleteFromCart }) {
   const [numberOfItems, setNumberOfItems] = useState(1);
   const { cartData } = cart;

   const deleteItem = (id) => {
     const result = cartData.filter((item) => item.id !== id);
     deleteFromCart(result);
   };

   return (
     <View style={style.productWrap}>
       <View style={style.productTopWrap}>
         <Image
           source={{ uri: product.image }}
           style={style.productCartImage}
         />
         <View style={style.productDetailWrap}>
           <Text
             numberOfLines={2}
             ellipsizeMode="tail"
             style={style.productName}
           >
             {product.title}
           </Text>
           <Text style={style.productPrice}>₦{moneyFormat(product.price)}</Text>
         </View>
       </View>

       <View style={style.productBottomWrap}>
         <TouchableOpacity
           onPress={() => {
             deleteItem(product.id);
           }}
           style={style.deleteWrap}
         >
           <Image source={images.deleteImg} style={style.delete} />
           <Text style={style.deleteText}>Delete</Text>
         </TouchableOpacity>

         <View style={style.numberWrap}>
           <TouchableOpacity
             onPress={() => {
               setNumberOfItems(numberOfItems - 1);
               if (numberOfItems - 1 == 0) {
                 deleteItem(product.id);
               }
             }}
           >
             <Image source={images.minus} style={style.minus} />
           </TouchableOpacity>
           <Text style={style.productNumber}>{numberOfItems}</Text>
           <TouchableOpacity
             onPress={() => {
               setNumberOfItems(numberOfItems + 1);
               
             }}
           >
             <Image source={images.plus} style={style.minus} />
           </TouchableOpacity>
         </View>
       </View>
     </View>
   );
 }
const mapStateToProps = state => ({
  cart:state.cart,
});

export default connect(mapStateToProps, { deleteFromCart })(ProductCard);
