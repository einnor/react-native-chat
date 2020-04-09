import React, { useLayoutEffect, useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert } from 'react-native';

import GroupItem from '../../components/GroupItem';
import styles from './styles';

const Groups = ({ navigation }) => {
  const [groups, setGroups] = useState([]);

  navigateToChatScreen = (item) => {
    navigation.navigate('Chat Screen', { item })
  }
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
