import React from 'react'
import { View, Text,Image } from 'react-native';
import {COLORS, images} from '../../../constants';
import CustomButton from '../../../components/CustomButton';

const style = require('./contactStyle');

export default function ContactUs() {
      return (
        <View style={style.contactRow}>
          <View style={[style.slimBox, { backgroundColor: COLORS.primary }]} />

          <View style={style.contactBox}>
            <Image source={images.stars} style={style.starBg} />
            <Text style={style.contactText}>
              Having any <Text style={style.issue}>issues</Text> with {'\n'}
              your order?
            </Text>

            <CustomButton
              text="Contact Us"
              textColor="white"
              onButtonClick={() => {}}
              btnWidth={91}
              btnColor={COLORS.primary}
              btnBorderColor={COLORS.primary}
              customStyle={{ height: 41 }}
            />
          </View>

          <View style={[style.slimBoxTwo, { backgroundColor: '#EE6F44' }]} />
        </View>
      );
}
