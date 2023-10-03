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
    borderRadius: 10,
  },
  taskBox: {
    backgroundColor: globalColors['gray-500'],
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 70,
  },
  taskDescription: {
    color: globalColors['gray-100'],
    marginLeft: 8,
  },
  descriptionAndButton: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
  },
  trashBox: {
    alignItems: 'center',
    flexDirection: 'row',
    marginRight: 16,
  },
});
