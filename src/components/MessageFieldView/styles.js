import { StyleSheet } from 'react-native';
import Color from '../../utils/Colors';
import Constants from '../../consts/Constants';

const styles = StyleSheet.create({
  containerView: {
    backgroundColor: Color.white,
    width: Constants.screenWidth,
    flex: 1,
    justifyContent: 'space-between',
  },
  fieldView: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: Color.uaStudiosGreen,
  },
  textField: {
    fontSize: 14,
    flex: 1,
    marginRight: 10,
    paddingLeft: 10,
    width: '75%',
    borderColor: Color.gray,
    borderWidth: 1,
    justifyContent: 'center',
    backgroundColor: Color.smoke,
  },
  Button: {
    flex: 1,
    alignSelf: 'center',
    width: '25%',
    height: '100%',
  },
});

export default styles;
