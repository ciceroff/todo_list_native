import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {styles} from './styles';
import {InputTask} from '../InputTask';
import {TaskItem} from '../Task';
import {Separator} from '../Separator';
import {useTaskStore} from '../../Context/TaskContext/task';

export function TaskList() {
  const {tasks, created, checked} = useTaskStore();

  return (
    <View style={styles.taskListBody}>
      <InputTask />
      <View style={styles.textInfoBox}>
        <Text style={styles.createdText}>Criadas {created}</Text>
        <Text style={styles.concludedText}>Concluídas {checked}</Text>
      </View>

      <FlatList
        ItemSeparatorComponent={Separator}
        data={tasks}
        renderItem={({item}) => (
          <TaskItem
            checked={item.checked}
            description={item.description}
            remove_at={item.remove_at}
            id={item.id}
            key={item.id}
          />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}
