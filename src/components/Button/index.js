import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import styles from './styles';

const Button = (props) => {
  const { title = 'Enter', style = {}, textStyle = {}, onPress } = props;

  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <Text style={[styles.text, textStyle]}> {title}</Text>

    </TouchableOpacity>
  );
};

export default Button;
