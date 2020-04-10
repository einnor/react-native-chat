import { StyleSheet } from 'react-native';

import Constants from '../../consts/Constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ebebeb',
  },
  logo: {
    alignSelf: 'center',
    margin: 0.04 * Constants.screenHeight,
  },
  text: {
    color: '#101010',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default styles;
