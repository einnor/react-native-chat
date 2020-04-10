/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text } from 'react-native';

import firebase from '../../firebase';
import styles from './styles';

const MessageItem = ({ item }) => {
  const userID = firebase.auth().currentUser.uid;

  const messageView = () => {
    if (userID === item.senderId) {
      return (
        <View style={styles.othersMessageContainerView}>
          <Text style={[styles.senderName, { textAlign: 'right' }]}>
            {item.senderEmail}
          </Text>
          <Text style={[styles.message, { textAlign: 'right' }]}>
            {item.message}
          </Text>
        </View>
      );
    }
    return (
      <View style={styles.myMessageContainerView}>
        <Text style={styles.senderName}> {item.senderEmail}</Text>
        <Text style={styles.message}>{item.message}</Text>
      </View>
    );
  };

  return messageView();
};

export default MessageItem;
