import React from 'react'
import { View, Text,ScrollView ,Dimensions} from 'react-native'
import CartNav from './CartNav';
import CheckOut from './CheckOut';
import ProductCard from './ProductCard';
import RecentlyViewed from './RecentlyViewed';
import { connect } from 'react-redux';

const style = require('./cartStyle');
const {height} =  Dimensions.get('screen');

 function Cart({ navigation, cart }) {
   const {cartData} = cart;
   return (
     <View style={style.container}>
       <CartNav navigation={navigation} />
       <View style={{ height: height * 0.83 }}>
         <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
           <View style={style.productsContainer}>
             {cartData.map((cartItem, index) => {
               return ( 
                 <ProductCard key={'cartItem' + index} product={cartItem} />
               );
             })}
           </View>
           <CheckOut cart={cart} navigation={navigation} />

           <RecentlyViewed navigation={navigation} />
         </ScrollView>
       </View>
     </View>
   );
 }

const mapStateToProps = state => ({
  cart:state.cart,
});

export default connect(mapStateToProps, {})(Cart);
