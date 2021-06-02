import React from 'react'
import { TouchableOpacity, Text,Dimensions } from 'react-native';
import {COLORS, FONTS} from '../../constants';

const {width} = Dimensions.get('screen');

 function CustomButton(props) {
       const {
         btnColor,
         btnBorderColor,
         text,
         textColor,
         onButtonClick,
         btnWidth,
         customStyle,
         textWeight
       } = props;
      return (
        <TouchableOpacity
          onPress={onButtonClick}
          style={[
            {
              backgroundColor: btnColor,
              borderWidth: 1,
              borderColor: btnBorderColor,
              height: 45,
              width: btnWidth ? btnWidth : width * 0.9,
              borderRadius: 4,
              justifyContent: 'center',
            },
            customStyle,
          ]}
        >
          <Text
            style={{
              ...FONTS.bodyText,
              fontSize: 14,
              color: textColor,
              fontWeight: '500',
            }}
          >
            {text}
          </Text>
        </TouchableOpacity>
      );
}

export default  CustomButton;