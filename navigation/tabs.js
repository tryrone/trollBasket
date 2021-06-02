import React from 'react';
import {View, Image,Dimensions} from 'react-native';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';
import {COLORS, FONTS, icons} from '../constants';
import Buy from '../pages/Buy';


const Tab = createBottomTabNavigator();
const {height} = Dimensions.get('screen');

const CustomTabBar = props => {
  return (
    <View>
      <View
        style={{
          position: 'absolute',
          paddingBottom: 20,
          bottom: 0,
          left: 0,
          right: 0,
          height: 80,
          borderTopWidth: 1,
          borderTopColor: '#E1E1E1',
          backgroundColor: 'white',
        }}
      />
      <BottomTabBar {...props.props} />
    </View>
  );
};

const homeRapper = (props, CustomComponent) => {
  // const user = props._props.route.params.user;

  const innerFunc = (calendarProps) => (
    <CustomComponent {...props} {...calendarProps} />
  );
  return innerFunc;
};


const Tabs = (_props) => {
  return (
    <Tab.Navigator
    initialRouteName="Buy"
      tabBarOptions={{
        showLabel: true,
        activeTintColor: COLORS.primary,
        style: {
          paddingBottom: 10,
          backgroundColor: 'white',
          height: 80,
          borderTopWidth: 1,
          borderTopColor: '#E1E1E1',
        },
        labelStyle: {
          ...FONTS.bodyText,
          fontSize: 12,
          marginTop: -10,
          fontWeight:'500',
          textTransform:'capitalize',
          marginBottom:14
        },
      }}
      tabBar={(props) => <CustomTabBar props={props} />}
    >
      <Tab.Screen
        name="Home"
        component={homeRapper({ _props }, Buy)}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={icons.homeInactive}
              resizeMode="contain"
              style={{
                width: 24,
                height: 24,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Buy"
        component={Buy}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={icons.buyActive}
              resizeMode="contain"
              style={{
                width: 24,
                height: 24,
              }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Deals"
        component={Buy}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={icons.priceInactive}
              resizeMode="contain"
              style={{
                width: 24,
                height: 24,
              }}
            />
          ),
          //     tabBarButton: props => <TabBarCustomButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={Buy}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={icons.walletInactive}
              resizeMode="contain"
              style={{
                width: 24,
                height: 24,
              }}
            />
          ),
          //     tabBarButton: props => <TabBarCustomButton {...props} />,
        }}
      />
      <Tab.Screen
        name="More"
        component={Buy}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={icons.moreInactive}
              resizeMode="contain"
              style={{
                width: 24,
                height: 24,
              }}
            />
          ),
          //     tabBarButton: props => <TabBarCustomButton {...props} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
