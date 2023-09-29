import {TextInput, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {globalColors} from '../../styles/global';
import {PlusCircle} from 'phosphor-react-native';

export function InputTask() {
  return (
    <View style={styles.inputBox}>
      <TextInput
        placeholderTextColor={globalColors['gray-300']}
        style={styles.input}
        placeholder="Adicione uma nova tarefa"
      />
      <View style={styles.plusBox}>
        <PlusCircle color="white" />
      </View>
    </View>
  );
}
