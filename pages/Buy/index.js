import React,{useState} from 'react'
import { View, Text, TouchableOpacity, Image,Dimensions,ScrollView,StatusBar } from 'react-native';
import CustomSearch from '../../components/CustomSearch';
import { COLORS, images } from '../../constants';
import Categories from './Categories';
import ContactUs from './ContactUs';
import Products from './Products';
import { connect } from 'react-redux';
import CityDropDown from './CityDropDown';
import CityModal from './CityModal';



const style = require('./buyStyle');
const styleTwo = require('../Details/detailsStyle');
const {height} = Dimensions.get('screen');

 function Buy({navigation,cart}) {
   const {cartData} =  cart;
   const[modalVisible,setModalVisible] = useState(false);
   const[city,setCity] = useState('');

    

      return (
        <View style={style.continer}>
          <StatusBar backgroundColor={COLORS.primary} />
          <Text style={style.pageTitle}>Trollbasket</Text>
          {modalVisible && (
            <CityModal
              visible={modalVisible}
              setCity={(val) => {
                setCity(val);
              }}
              setVisible={() => {
                setModalVisible(false);
              }}
            />
          )}

          <View style={style.functionRow}>
            <CityDropDown
              city={city}
              openModal={(val) => {
                setModalVisible(val);
              }}
            />
            <TouchableOpacity style={[style.clickRow, style.sideBorders]}>
              <Image source={images.packageImage} style={style.location} />
              <Text style={style.cityText}>My Orders</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Cart');
              }}
              style={style.clickRow}
            >
              <View style={{ position: 'relative' }}>
                <Image source={images.cart} style={style.location} />
                {cartData.length !== 0 && (
                  <View style={[styleTwo.cartWrap, { top: -8, right: -5 }]}>
                    <Text style={styleTwo.cartText}>{cartData.length}</Text>
                  </View>
                )}
              </View>

              <Text style={style.cityText}>Cart</Text>
            </TouchableOpacity>
          </View>

          <CustomSearch navigation={navigation} />

          <ContactUs />

          <Categories />
          <View style={{ height: height * 0.355, marginTop: 24 }}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <Products city={city} navigation={navigation} />
            </ScrollView>
          </View>
        </View>
      );
}
const mapStateToProps = state => ({
  cart:state.cart,
});

export default connect(mapStateToProps, {})(Buy);