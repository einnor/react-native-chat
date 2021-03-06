import React, { useEffect } from 'react';
import { View, Image } from 'react-native';

import Images from '../../consts/Images';
import firebase from '../../firebase';
import styles from './styles';

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      firebase.auth().onAuthStateChanged((user) => {
        if (user !== null) {
          navigation.reset({
            index: 0,
            routes: [{ name: 'Groups Screen' }],
          });
        } else {
          navigation.reset({
            index: 0,
            routes: [{ name: 'SignIn Screen' }],
          });
        }
      });
    }, 1000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={Images.logo} />
    </View>
  );
};

export default Splash;
