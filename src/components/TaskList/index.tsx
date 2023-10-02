import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import {InputTask} from '../InputTask';
import {TaskItem} from '../Task';

type Task = {
  key: string;
  checked: boolean;
  description: string;
  remove_at?: Date;
};

const tasks: Task[] = [
  {key: 'acs3245', checked: false, description: 'Teste de task'},
  {
    key: 'b3245ge',
    checked: false,
    description: 'Estudar front end com GraphQL',
  },
  {
    key: 'ac23ds',
    checked: false,
    description: 'Abastecer os postos de gasolina com alcool',
  },
];

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

      <View>
        {tasks.map(task => {
          return (
            <TaskItem
              key={task.key}
              description={task.description}
              checked={task.checked}
            />
          );
        })}
      </View>
    </View>
  );
}
