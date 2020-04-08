import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator, View } from 'react-native';

import styles from './styles';

const Button = (props) => {
  const { title = 'Enter', style = {}, textStyle = {}, onPress, isLoading } = props;

  const loader = () => {
    return (
      <ActivityIndicator animating={isLoading} />
    );
  };

  const button = () => (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <Text style={[styles.text, textStyle]}> {title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.button, style]}>
      {isLoading ? loader() : button()}
    </View>
  );
};

export default Button;
