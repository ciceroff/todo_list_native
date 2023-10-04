import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {Trash} from 'phosphor-react-native';
import {globalColors} from '../../styles/global';
import {useTaskStore} from '../../Context/TaskContext/task';

type TaskItemProps = {
  id: string;
  description: string;
  checked: boolean;
  remove_at?: Date;
};

export function TaskItem(props: TaskItemProps) {
  const [selectRadio, setSelectedRadio] = useState<boolean>(false);
  const {removeTask, checkTask, removeCheck} = useTaskStore();

  function handleDeleteTask() {
    if (props.checked === true) {
      removeCheck();
    }
    removeTask(props.id);
  }

  return (
    <View style={styles.taskBox}>
      <View style={styles.descriptionAndButton}>
        <TouchableOpacity
          onPress={() => {
            setSelectedRadio(!selectRadio);
            if (!selectRadio) {
              checkTask(props.id);
            } else {
              removeCheck();
            }
          }}>
          <View style={styles.radio}>
            {selectRadio ? <View style={styles.radioBg} /> : null}
          </View>
        </TouchableOpacity>
        <Text style={styles.taskDescription}>{props.description}</Text>
      </View>
      <TouchableOpacity style={styles.trashBox} onPress={handleDeleteTask}>
        <Trash color={globalColors['gray-300']} />
      </TouchableOpacity>
    </View>
  );
}
