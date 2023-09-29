import {StyleSheet} from 'react-native';
import {globalColors} from '../../styles/global';

export const styles = StyleSheet.create({
  taskListBody: {
    backgroundColor: globalColors['gray-600'],
    height: '100%',
  },
  createdText: {
    color: globalColors.blue,
    fontWeight: 'bold',
    fontSize: 16,
  },
  concludedText: {
    color: globalColors.purple,
    fontWeight: 'bold',
    fontSize: 16,
  },
  textInfoBox: {
    marginTop: 30,
    marginLeft: 16,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});
