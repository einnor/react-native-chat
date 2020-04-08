import React, { useState, useEffect } from 'react';
import { View, Text, Alert, SafeAreaView, Image, KeyboardAvoidingView } from 'react-native';

import Strings from '../../consts/String';
import Button from '../../components/Button';
import TextField from '../../components/TextField';
import PasswordTextField from '../../components/PasswordTextField';
import DismissKeyboard from '../../components/DismissKeyboard';
import Utility from '../../utils/Utility';
import Images from '../../consts/Images';
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

  validatePasswordField = () => {
    const isStrong = Utility.isPasswordStrong(password);

    isStrong ?
      setState((prevState) => ({ ...prevState, passwordError: '' }))
      : setState((prevState) => ({ ...prevState, passwordError: Strings.PasswordNotStrong }));
    return isStrong;
  };

  cosnt { email, password, emailError, passwordError } = state;

  return (
    <DismissKeyboard>
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <View style={styles.container}>
          <SafeAreaView>
            <Image style={styles.logo} source={Images.logo} />
            <TextField
              term={email}
              error={emailError}
              placeHolder={Strings.EmailPlaceHolder}
              OnTermChange={(txt) => setState((prevState) => ({ ...prevState, email: txt }))}
              onValidateEmailAddress={validateEmailAddress}
            />
            <PasswordTextField
              term={password}
              error={passwordError}
              placeHolder={Strings.PasswordPlaceHolder}
              onTermChange={(txt) => setState((prevState) => ({ ...prevState, password: txt }))}
              onValidatePasswordField={validatePasswordField}
            />
            <Button title={String.Join}></Button>
          </SafeAreaView>
        </View>
      </KeyboardAvoidingView>
    </DismissKeyboard>
  )
};

export default SignIn;
