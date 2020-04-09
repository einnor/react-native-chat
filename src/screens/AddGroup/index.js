import React, { useState } from 'react';
import { View, Alert } from 'react-native';

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

  return (
    <View style={styles.container}>
      <Text style={styles.text} > Add Group</Text>
    </View>
  );
};

export default AddGroup;
