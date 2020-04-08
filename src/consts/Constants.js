import { Dimensions, Platform } from 'react-native';

const headerHeight = Platform.OS === 'ios' ? 66 : 46;
const footerHeight = 55;

const constants = {
  headerHeight: headerHeight,
  footerHeight: footerHeight,
  viewHeight: Dimensions.get('window').height - headerHeight,
  screenHeight: Dimensions.get('window').height,
  screenWidth: Dimensions.get('window').width
};

export default constants;
