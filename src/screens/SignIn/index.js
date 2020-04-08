import React from 'react';
import { View, Text } from 'react-native';

import String from '../../consts/String';
import Button from '../../components/Button';
import TextField from '../../components/TextField';
import styles from './styles';

const SignIn = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text} > SignIn Screen</Text>
      <Button title={String.Join}></Button>
      <TextField />
    </View>
  )
};

export default SignIn;
