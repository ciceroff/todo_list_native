import {StyleSheet} from 'react-native';
import {globalColors} from '../../styles/global';

export const styles = StyleSheet.create({
  radio: {
    width: 20,
    height: 20,
    borderColor: globalColors.blue,
    borderRadius: 10,
    borderWidth: 3,
    margin: 10,
  },
  radioBg: {
    backgroundColor: globalColors.blue,
    height: 14,
    width: 14,
    margin: 3,
    borderRadius: 10,
  },
  taskBox: {
    backgroundColor: globalColors['gray-300'],
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
