import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {Trash} from 'phosphor-react-native';
import {globalColors} from '../../styles/global';

type TaskItemProps = {
  key: string;
  description: string;
  checked: boolean;
  remove_at?: Date;
};

export function TaskItem(props: TaskItemProps) {
  const [selectRadio, setSelectedRadio] = useState<boolean>(false);

  return (
    <View style={styles.taskBox}>
      <View style={styles.descriptionAndButton}>
        <TouchableOpacity
          onPress={() => {
            setSelectedRadio(!selectRadio);
          }}>
          <View style={styles.radio}>
            {selectRadio ? <View style={styles.radioBg} /> : null}
          </View>
        </TouchableOpacity>
        <Text style={styles.taskDescription}>{props.description}</Text>
      </View>
      <TouchableOpacity style={styles.trashBox}>
        <Trash color={globalColors['gray-300']} />
      </TouchableOpacity>
    </View>
  );
}
