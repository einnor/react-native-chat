import React from 'react';
import { TextInput, View, Button } from 'react-native';

import Color from '../../utils/Colors';
import Strings from '../../consts/String';
import styles from './styles';

const MessageFieldView = ({
  term,
  placeHolder,
  onTermChange,
  onValidateTextField,
  error,
  onSubmit,
  isJoined,
}) => {
  return (
    <View style={styles.containerView}>
      <View style={styles.fieldView}>
        <TextInput
          autoCorrect={false}
          style={styles.textField}
          placeholder={placeHolder}
          value={term}
          onChangeText={onTermChange}
          onEndEditing={onValidateTextField}
        />
        <Button title={Strings.Send} color={Color.white} onPress={onSubmit} />
      </View>
    </View>
  );
};

export default MessageFieldView;
