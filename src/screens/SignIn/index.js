import React, { useState, useEffect } from 'react';
import { View, Text, Alert, SafeAreaView, Image, KeyboardAvoidingView } from 'react-native';

import String from '../../consts/String';
import Button from '../../components/Button';
import TextField from '../../components/TextField';
import PasswordTextField from '../../components/PasswordTextField';
import Utility from '../../utils/Utility';
import styles from './styles';

const SignIn = () => {
  const [state, setState] = useState({
    email: '',
    password: '',
    emailError: '',
    passwordError: '',
    isLoading: false,
  });

  validateEmailAddress = () => {
    const isValidEmail = Utility.isEmailValid(email);
    isValidEmail ?
      setState((prevState) => ({ ...prevState, emailError: '' }))
      : setState((prevState) => ({ ...prevState, emailError: Strings.InvalidEmailAddress }));
    return isValidEmail;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text} > SignIn Screen</Text>
      <Button title={String.Join}></Button>
      <TextField />
      <PasswordTextField />
    </View>
  )
};

export default SignIn;
