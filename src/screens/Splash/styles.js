import { StyleSheet } from 'react-native';
import Color from '../../utils/Colors';
import Constants from '../../consts/Constants';

const styles = StyleSheet.create({
  logo: {
    alignSelf: 'center',
    margin: 0.04 * Constants.screenHeight,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.theme,
  },
});

export default styles;
