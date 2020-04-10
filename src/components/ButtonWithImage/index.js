import React from 'react';
import { TouchableOpacity, Image, View } from 'react-native';

import styles from './styles';

const ButtonWithImage = (props) => {
  const { style = {}, onPress, image } = props;

  return (
    <View style={[styles.button, style]}>
      <TouchableOpacity onPress={onPress}>
        <Image source={image} style={styles.ImageIconStyle} />
      </TouchableOpacity>
    </View>
  );
};

export default ButtonWithImage;
