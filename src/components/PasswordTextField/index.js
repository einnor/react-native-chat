import React from 'react';
import { TextInput, Text, View } from 'react-native';

import styles from './styles';

const PasswordTextField = ({
  term,
  placeHolder,
  onTermChange,
  onValidatePasswordField,
  error,
}) => {
  return (
    <View>
      <Text style={styles.ErrorText}>{error}</Text>
      <View style={styles.TextFieldView}>
        <TextInput
          autoCorrect={false}
          secureTextEntry
          style={styles.TextField}
          placeholder={placeHolder}
          value={term}
          onChangeText={onTermChange}
          onEndEditing={onValidatePasswordField}
        />
      </View>
    </View>
  );
};

export default PasswordTextField;
