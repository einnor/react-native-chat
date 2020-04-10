/* eslint-disable no-shadow */
import React, { useState, useEffect } from 'react';
import {
  View,
  Alert,
  KeyboardAvoidingView,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import DismissKeyboard from '../../components/DismissKeyboard';
import MessageFieldView from '../../components/MessageFieldView';
import MessageItem from '../../components/MessageItem';
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

  const sendMessagesToChat = () => {
    const messageRef = firestore
      .collection('message')
      .doc(item.groupID)
      .collection('messages')
      .doc();
    const userEmail = firebase.auth().currentUser.email;

    messageRef
      .set({
        messageID: messageRef.id,
        message: state.message,
        senderId: userID,
        senderEmail: userEmail,
      })
      .then((docRef) => {
        console.log('Document written with ID: ', messageRef.id);
        setState((prevState) => ({ ...prevState, message: '' }));
      })
      .catch((error) => {
        Alert.alert(error.message);
        console.log('Error:', error);
      });
  };

  useEffect(() => {
    getUserJoinedAlreadyOrNot();
    getMessages();
  }, []);

  const { messages, message } = state;

  return (
    <DismissKeyboard>
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingView}
        behavior="padding"
        enabled={true}
        keyboardVerticalOffset={100}>
        <View style={styles.container}>
          <FlatList
            style={styles.flatList}
            data={messages}
            keyExtractor={(item, index) => `key-${index}`}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity onPress={() => {}}>
                  <MessageItem item={item} />
                </TouchableOpacity>
              );
            }}
          />

          <View style={styles.messageFieldView}>
            <MessageFieldView
              term={message}
              placeHolder={Strings.typeYourMessage}
              onTermChange={(message) =>
                setState((prevState) => ({ ...prevState, message }))
              }
              onSubmit={sendMessagesToChat}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </DismissKeyboard>
  );
};

export default Chat;
