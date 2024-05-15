//import liraries
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Man, Woman, Command} from 'iconsax-react-native';
import {genderTypes} from '../../utils/constans';
import Colors from '../../theme/colors';

const GenderIcon = ({gender, size}) => {
  if (gender == genderTypes.MALE) {
    return <Man size={size} color={Colors.BLACK} />;
  }
  if (gender == genderTypes.FEMALE) {
    return <Woman size={size} color={Colors.BLACK} />;
  }
  if (gender == genderTypes.UNKOWN) {
    return <Command size={size} color={Colors.BLACK} />;
  }
};

export default GenderIcon;
