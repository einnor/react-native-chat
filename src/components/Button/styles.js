import { StyleSheet } from 'react-native';

import Color from '../../utils/Colors';

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    height: 50,
    borderRadius: 5,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,

    backgroundColor: Color.uaStudiosGreen,
    shadowColor: Color.uaStudiosGreen,
    shadowOpacity: 0.4,
    shadowOffset: { height: 10, width: 10 },
    shadowRadius: 20,
  },
  text: {
    fontSize: 16,
    textTransform: 'uppercase',
    color: Color.white
  }
});

export default styles;
