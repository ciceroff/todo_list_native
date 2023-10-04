import {TextInput, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {globalColors} from '../../styles/global';
import {PlusCircle} from 'phosphor-react-native';
import {useTaskStore} from '../../Context/TaskContext/task';

export function InputTask() {
  const [inputText, setInputText] = useState('');
  const {addTask} = useTaskStore();

  function handleAddTask() {
    if (inputText !== '') {
      addTask({
        description: inputText,
        checked: false,
        id: String(Math.random() * 1000),
      });
    }
    setInputText('');
  }
  return (
    <View style={styles.inputBox}>
      <TextInput
        placeholderTextColor={globalColors['gray-300']}
        style={styles.input}
        placeholder="Adicione uma nova tarefa"
        onChangeText={text => setInputText(text)}
        value={inputText}
      />
      <TouchableOpacity onPress={handleAddTask} style={styles.plusBox}>
        <PlusCircle color="white" />
      </TouchableOpacity>
    </View>
  );
}
