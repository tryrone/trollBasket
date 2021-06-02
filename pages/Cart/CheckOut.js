import React from 'react'
import { View, Text } from 'react-native';
import CustomButton from '../../components/CustomButton';
import  {COLORS, moneyFormat} from '../../constants';
import { deleteFromCart } from '../../store/actions/CartAction';
import { connect } from 'react-redux';

const style = require('./cartStyle');

 function CheckOut({ navigation, cart, deleteFromCart }) {
   const { cartData } = cart;
   const totalAmount = () => {
     let total = 0;
     cartData.map((item) => {
       total = item.price + total;
     });
     return total;
   };

   return (
     <View style={style.totalCont}>
       <View style={style.totalRow}>
         <Text style={style.totalText}>Subtotal</Text>
         <Text style={style.subTotalAmount}>₦{moneyFormat(totalAmount())}</Text>
       </View>
       <View style={[style.totalRow, { marginTop: 16 }]}>
         <Text style={style.totalText}>Total</Text>
         <Text style={style.totalAmount}>₦{moneyFormat(totalAmount())}</Text>
       </View>

       <CustomButton
         text="Checkout"
         textColor="white"
         onButtonClick={() => {
           deleteFromCart([]);
           navigation.reset({
             index: 0,
             routes: [{ name: 'CheckoutPage' }],
           });
         }}
         btnWidth="100%"
         btnColor={COLORS.primary}
         btnBorderColor={COLORS.primary}
         customStyle={{ height: 56, marginTop: 16 }}
       />
     </View>
   );
 }

const mapStateToProps = state => ({
  cart:state.cart,
});

export default connect(mapStateToProps, { deleteFromCart })(CheckOut);
