import React,{useState} from 'react'
import { View, Text } from 'react-native';
import Modal from 'react-native-modal';
import DropDownPicker from 'react-native-dropdown-picker';
import { COLORS,CITIES } from '../../constants';

 function CityModal({ visible, setVisible, setCity }) {
   const [open, setOpen] = useState(false);
   const [value, setValue] = useState(null);
   const [items, setItems] = useState();

   const CityArray = () => {
     const cityData = [];
     CITIES.map((city) => {
       cityData.push({ label: city, value: city });
     });
     return cityData;
   };

   return (
     <Modal
       onBackdropPress={() => setVisible()}
       animationInTiming={300}
       isVisible={visible}
     >
       <View
         style={{
           padding: 20,
           borderRadius: 15,
           justifyContent: 'center',
           backgroundColor: 'white',
           alignItems: 'center',
         }}
       >
         <View style={{ height: 250 }}>
           <DropDownPicker
             open={open}
             value={value}
             items={CityArray()}
             onChangeValue={(value) => {
               setVisible();
               if(value == CITIES[0]){
                 setCity('');
               }else{
                setCity(value);
               }
               
             }}
             setOpen={setOpen}
             setValue={setValue}
             setItems={setItems}
             placeholder="Pick a City"
             placeholderStyle={{ color: COLORS.gray }}
           />
         </View>
       </View>
     </Modal>
   );
 }


export default CityModal;