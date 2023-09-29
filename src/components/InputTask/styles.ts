import {StyleSheet} from 'react-native';
import {globalColors} from '../../styles/global';

export const styles = StyleSheet.create({
  input: {
    backgroundColor: globalColors['gray-500'],
    borderRadius: 6,
    color: globalColors['gray-100'],
    width: '80%',
    paddingLeft: 15,
  },
  inputBox: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: -30,
    gap: 4,
    height: 54,
  },
  plusBox: {
    backgroundColor: globalColors.blueDark,
    borderRadius: 6,
    width: 52,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
