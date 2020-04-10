import React, { useState, useEffect } from 'react';
import { View, Text, Alert } from 'react-native';

import firebase, { firestore } from '../../firebase';
import Strings from '../../consts/String';
import styles from './styles';

const Chat = ({ navigation, route }) => {
  const [state, setState] = useState({
    messages: [],
    message: '',
    isJoined: false,
  });

  const { item } = route.params;
  const userID = firebase.auth().currentUser.uid;

  const getUserJoinedAlreadyOrNot = () => {
    firestore
      .collection('members')
      .doc(item.groupID)
      .collection('member')
      .where('userID', '==', userID)
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.size > 0) {
          querySnapshot.forEach((doc) => {
            if (doc.data() != null) {
              setState((prevState) => ({ ...prevState, isJoined: true }));
            } else {
              setState((prevState) => ({ ...prevState, isJoined: false }));
              showAlertToJoinGroup();
            }
          });
        } else {
          showAlertToJoinGroup();
        }
      })
      .catch((error) => {
        console.log('Error getting documents: ', error);
      });
  };

  const showAlertToJoinGroup = () => {
    Alert.alert(
      Strings.JoinChat,
      Strings.JoinChatConfirmMessage,
      [
        {
          text: 'Yes',
          onPress: () => {
            joinGroup();
          },
        },
        {
          text: 'No',
          onPress: () => {},
        },
      ],
      { cancelable: false },
    );
  };

  const joinGroup = () => {
    const groupMemberRef = firestore
      .collection('members')
      .doc(item.groupID)
      .collection('member')
      .doc();
    groupMemberRef
      .set({
        userID: userID,
      })
      .then((docRef) => {
        setState((prevState) => ({ ...prevState, isJoined: true }));
        Alert.alert(Strings.joinMessage);
        setState((prevState) => ({ ...prevState, message: '' }));
      })
      .catch((error) => {
        setState((prevState) => ({ ...prevState, isJoined: false }));
        Alert.alert(Strings.JoinGroupError);
      });
  };

  const getMessages = () => {
    const db = firestore;
    const messages = [];

    db.collection('message')
      .doc(item.groupID)
      .collection('messages')
      .onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
          if (change.type === 'added') {
            console.log('New Message: ', change.doc.data());
            messages.push(change.doc.data());
          }
          if (change.type === 'modified') {
            console.log('Modified Message', change.doc.data());
          }
          if (change.type === 'removed') {
            console.log('Removed Message:', change.doc.data());
          }
          setState((prevState) => ({ ...prevState, messages }));
        });
      });
  };

  useEffect(() => {
    getUserJoinedAlreadyOrNot();
    getMessages();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}> Chat Screen</Text>
    </View>
  );
};

export default Chat;
