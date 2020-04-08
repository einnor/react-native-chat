import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import String from '../../consts/String';
import Button from '../../components/Button';
import styles from './styles';

const SignIn = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text} > SignIn Screen</Text>
      <Button title={String.Join}></Button>
    </View>
  )
};

export default SignIn;
