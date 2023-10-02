import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {Trash} from 'phosphor-react-native';

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
      <TouchableOpacity
        onPress={() => {
          setSelectedRadio(true);
        }}>
        <View style={styles.radio}>
          {selectRadio ? <View style={styles.radioBg} /> : null}
        </View>
      </TouchableOpacity>
      <Text>{props.description}</Text>
      <TouchableOpacity>
        <Trash color="white" />
      </TouchableOpacity>
    </View>
  );
}
