import React from 'react';
import { TextInput, Text, View } from 'react-native';

import styles from './styles';

const TextField = ({ term, placeHolder, OnTermChange, onValidateEmailAddress, error }) => {
  return (
    <View>
      <Text style={styles.ErrorText}> {error}</Text>
      <View style={styles.TextFieldView}>
        <TextInput
          autoCorrect={false}
          style={styles.TextField}
          placeholder={placeHolder}
          value={term}
          onChangeText={OnTermChange}
          onEndEditing={onValidateEmailAddress}
        />
      </View>
    </View>
  );
};

export default TextField;
