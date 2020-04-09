import React, { useState } from 'react';
import { View, Alert } from 'react-native';

import TextField from '../../components/TextField';
import Strings from '../../consts/String';
import styles from './styles';

const AddGroup = () => {
  const [state, setState] = useState({
    name: '',
    error: '',
    isLoading: false,
  });

  validateField = () => {
    const isValidField = Utility.isValidField(state.name)
    isValidField ?
      setState((prevState) = ({ ...prevState, error: '' }))
      : setState((prevState) => ({ ...prevState, error: Strings.GroupNameEmpty }));
    return isValidField;
  };

  const { name, error, isLoading } = state;

  return (
    <View style={styles.container}>
      <TextField
        term={name}
        error={error}
        placeHolder={Strings.EnterYourGroupName}
        OnTermChange={(txt) => setState((prevState) => ({ ...prevState, name: txt }))}
        onValidateTextField={validateField}
      />
    </View>
  );
};

export default AddGroup;
