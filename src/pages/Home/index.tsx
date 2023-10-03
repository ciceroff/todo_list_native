import React from 'react';
import {View} from 'react-native';
import {Header} from '../../components/Header';
import {TaskList} from '../../components/TaskList';
import {styles} from './style';

export function Home() {
  return (
    <View>
      <Header />
      <View style={styles.body}>
        <TaskList />
      </View>
    </View>
  );
}
