import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {styles} from './styles';
import {InputTask} from '../InputTask';
import {TaskItem} from '../Task';
import {Separator} from '../Separator';

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
    description:
      'Abastecer os postos de gasolina com alcool e fazer muitas outras coisas pq eu quero escrever para fazer um texto bem grande',
  },
];

export function TaskList() {
  return (
    <View style={styles.taskListBody}>
      <InputTask />
      <View style={styles.textInfoBox}>
        <Text style={styles.createdText}>Criadas</Text>
        <Text style={styles.concludedText}>Concluídas</Text>
      </View>

      <FlatList
        ItemSeparatorComponent={Separator}
        data={tasks}
        renderItem={({item}) => (
          <TaskItem
            checked={item.checked}
            description={item.description}
            remove_at={item.remove_at}
            key={item.key}
          />
        )}
        keyExtractor={item => item.key}
      />
    </View>
  );
}
