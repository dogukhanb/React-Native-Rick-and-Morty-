//import liraries
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Book1, Home, Location, Setting2} from 'iconsax-react-native';
import {CHARACTERS, EPISODES, LOCATIONS, SETTINGS} from '../../utils/routes';

const TabIcon = ({screenName, color, focused, size}) => {
  if (screenName == CHARACTERS) {
    return (
      <Home size={size} color={color} variant={focused ? 'Bold' : 'Outline'} />
    );
  }
  if (screenName === EPISODES) {
    return (
      <Book1 size={size} color={color} variant={focused ? 'Bold' : 'Outline'} />
    );
  }
  if (screenName === LOCATIONS) {
    return (
      <Location
        size={size}
        color={color}
        variant={focused ? 'Bold' : 'Outline'}
      />
    );
  }
  if (screenName === SETTINGS) {
    return (
      <Setting2
        size={size}
        color={color}
        variant={focused ? 'Bold' : 'Outline'}
      />
    );
  }
};

export default TabIcon;
