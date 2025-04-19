import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useTaskContext } from '../../context/TaskProvider';

export function Tasks() {
  const { tasks, score } = useTaskContext();

  const renderItem = ({ item }: any) => (
    <View style={styles.task}>
      <Text style={styles.taskText}>{item.title}</Text>
      <Text style={styles.status}>{item.completed ? 'Виконано' : 'Не виконано'}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.score}>Current Score: {score}</Text>
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  score: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  list: {
    paddingBottom: 20,
  },
  task: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  taskText: {
    fontSize: 16,
  },
  status: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});