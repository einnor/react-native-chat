import React from 'react';
import { View, Text, Image } from 'react-native';

import Images from '../../consts/Images';
import styles from './styles';

const GroupItem = ({ item }) => {
  return (
    <View>
      <View style={styles.container}>
        <Image source={Images.groups} style={styles.Image} />
        <View style={{ justifyContent: 'center' }}>
          <Text style={styles.groupTitle}>{item.groupName}</Text>
          <Text style={styles.groupMembers}>{item.groupMembers}</Text>
        </View>
      </View>
    </View>
  );
};

export default GroupItem;
