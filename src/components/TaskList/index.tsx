import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import {InputTask} from '../InputTask';

export function TaskList() {
  return (
    <View style={styles.taskListBody}>
      <View>
        <InputTask />
      </View>
      <View style={styles.textInfoBox}>
        <Text style={styles.createdText}>Criadas</Text>
        <Text style={styles.concludedText}>Concluídas</Text>
      </View>
    </View>
  );
}
