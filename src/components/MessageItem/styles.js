import { StyleSheet } from 'react-native';
import Constants from '../const/Constants';
import Color from '../utils/Colors';

const styles = StyleSheet.create({
  othersMessageContainerView: {
    width: Constants.screenWidth - 50,
    backgroundColor: Color.gray,
    borderRadius: 5,
    marginLeft: 25,
    marginTop: 5,
    marginBottom: 5,
    padding: 10,
  },
  myMessageContainerView: {
    width: Constants.screenWidth - 50,
    backgroundColor: Color.gray,
    borderRadius: 5,
    margin: 5,
    padding: 10,
  },
  senderName: {
    color: Color.white,
    fontSize: 14,
    fontWeight: 'bold',
  },

  message: {
    color: Color.white,
    fontSize: 14,
  },
});

export default styles;
