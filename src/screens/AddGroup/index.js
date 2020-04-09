import React, { useState } from 'react';
import { View, Alert } from 'react-native';

import TextField from '../../components/TextField';
import Button from '../../components/Button';
import Strings from '../../consts/String';
import Utility from '../../utils/Utility';
import { firestore } from '../../firebase';
import styles from './styles';

const AddGroup = ({ navigation }) => {
  const [state, setState] = useState({
    name: '',
    error: '',
    isLoading: false,
  });

  validateField = () => {
    const isValidField = Utility.isValidField(state.name);
    isValidField ?
      setState((prevState) => ({ ...prevState, error: '' }))
      : setState((prevState) => ({ ...prevState, error: Strings.GroupNameEmpty }));
    return isValidField;
  };

  onSubmit = () => {
    const isValidField = validateField();
    if (isValidField) {
      saveGroup();
    }
  };

  saveGroup = () => {
    setState((prevState) => ({ ...prevState, isLoading: true }));
    const groupsRef = firestore.collection('groups').doc();
    const userID = firebase.auth().currentUser.uid;

    groupsRef.set({
      groupID: groupsRef.id,
      groupName: groupName,
      userID: userID,
    }).then((docRef) => {
      setState((prevState) => ({ ...prevState, isLoading: false }));
      console.log('Document written with ID: ', groupsRef.id);
      addMembersOfChatToFirebase(groupsRef.id, userID);
    }).catch((error) => {
      Alert.alert(error.message);
      setState((prevState) => ({ ...prevState, isLoading: false }));
      console.error('error adding document: ', error);
    });
  };

  addMembersOfChatToFirebase = (groupId, userID) => {
    const membersRef = firestore.collection('members').doc(groupId).collection('member').doc();
    membersRef.set({
      userID: userID,
    }).then((docRef) => {
      navigation.goBack();
    })
      .catch((error) => {
        setState((prevState) => ({ ...prevState, isLoading: false }));
        console.error('Error adding document: ', error);
      });
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
      <Button title={Strings.CreateGroup} onPress={onSubmit} isLoading={isLoading} />
    </View>
  );
};

export default AddGroup;
