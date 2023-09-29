import React from 'react';
import {View} from 'react-native';
import {Header} from '../../components/Header';
import {TaskList} from '../../components/TaskList';

export function Home() {
  return (
    <View>
      <Header />
      <TaskList />
    </View>
  );
}
