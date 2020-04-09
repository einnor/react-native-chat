import React, { useLayoutEffect, useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert } from 'react-native';

import GroupItem from '../../components/GroupItem';
import ButtonWithImage from '../../components/ButtonWithImage';
import Images from '../../consts/Images';
import { firestore } from 'firebase';
import styles from './styles';

const Groups = ({ navigation }) => {
  const [groups, setGroups] = useState([]);

  fetchGroups = () => {
    const db = firestore;
    const groupArray = [];

    db.collection('groups')
      .onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
          if (change.type == 'added') {
            console.log('New Group: ', change.doc.data());
            groupArray.push(change.doc.data());
          }
          if (change.type === 'modified') {
            console.log('Modified Group: ', change.doc.data());
          }
          if (change.type === 'removed') {
            console.log('Removed Group: ', change.doc.data());
          }

          setGroups(groupArray);
        });
      });
  };

  useEffect(() => {
    fetchGroups();
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <ButtonWithImage onPress={() => {
          navigation.navigate('Add Group Screen')
        }}
          image={Images.add}
        />
      ),
      headerLeft: () => {
        <ButtonWithImage onPress={() => {

        }}
          image={Images.add}
        />
      }
    })

  })


  navigateToChatScreen = (item) => {
    navigation.navigate('Chat Screen', { item })
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={groups}
        keyExtractor={(item, index) => `key-${index}`}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigateToChatScreen(item)}>
            <GroupItem item={item}></GroupItem>
          </TouchableOpacity>
        )}
      />
      <Text style={styles.text} > Groups Screen</Text>
    </View>
  );
};

export default Groups;
