import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Alert,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
} from 'react-native';

import Strings from '../../consts/String';
import Button from '../../components/Button';
import TextField from '../../components/TextField';
import PasswordTextField from '../../components/PasswordTextField';
import DismissKeyboard from '../../components/DismissKeyboard';
import Utility from '../../utils/Utility';
import Images from '../../consts/Images';
import styles from './styles';
import firebase from '../../firebase';

const SignIn = ({ navigation }) => {
  const [state, setState] = useState({
    email: '',
    password: '',
    emailError: '',
    passwordError: '',
    isLoading: false,
  });

  validateEmailAddress = () => {
    const isValidEmail = Utility.isEmailValid(email);
    isValidEmail
      ? setState((prevState) => ({ ...prevState, emailError: '' }))
      : setState((prevState) => ({
          ...prevState,
          emailError: Strings.InvalidEmailAddress,
        }));
    return isValidEmail;
  };

  validatePasswordField = () => {
    const isStrong = Utility.isPasswordStrong(password);

    isStrong
      ? setState((prevState) => ({ ...prevState, passwordError: '' }))
      : setState((prevState) => ({
          ...prevState,
          passwordError: Strings.PasswordNotStrong,
        }));
    return isStrong;
  };

  navigateToGroups = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Groups Screen' }],
    });
  };

  onSubmit = () => {
    const isValidEmail = validateEmailAddress();
    const isPasswordStrong = validatePasswordField();

    if (isValidEmail && isPasswordStrong) {
      setState((prevState) => ({
        ...prevState,
        emailError: '',
        passwordError: '',
      }));
      submitToFirebase(email, password);
    }
  };

  const submitToFirebase = (email, password) => {
    try {
      setState((prevState) => ({ ...prevState, isLoading: true }));

      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((user) => {
          setState((prevState) => ({ ...prevState, isLoading: false }));
          // Alert.alert('Successfully logged in');
          navigateToGroups();
        })
        .catch((error) => {
          firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((user) => {
              setState((prevState) => ({ ...prevState, isLoading: false }));
              // Alert.alert('Successfully created a new user');
              navigateToGroups();
            })
            .catch((error) => {
              setState((prevState) => ({ ...prevState, isLoading: false }));
              console.log('error');
              Alert.alert(error.message);
            });
        });
    } catch (error) {
      setState((prevState) => ({ ...prevState, isLoading: false }));
      Alert.alert(error.message);
    }
  };

  const { email, password, emailError, passwordError, isLoading } = state;

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
              OnTermChange={(txt) =>
                setState((prevState) => ({
                  ...prevState,
                  email: txt.toLowerCase(),
                }))
              }
              onValidateTextField={validateEmailAddress}
            />
            <PasswordTextField
              term={password}
              error={passwordError}
              placeHolder={Strings.PasswordPlaceHolder}
              onTermChange={(txt) =>
                setState((prevState) => ({ ...prevState, password: txt }))
              }
              onValidatePasswordField={validatePasswordField}
            />
            <Button
              title={String.Join}
              onPress={onSubmit}
              isLoading={isLoading}></Button>
          </SafeAreaView>
        </View>
      </KeyboardAvoidingView>
    </DismissKeyboard>
  );
};

export default SignIn;
