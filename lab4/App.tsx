import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
  Modal,
} from 'react-native';
import DateTimePicker from 'react-native-date-picker';
import { LogLevel, OneSignal } from 'react-native-onesignal';

type Task = {
  id: string;
  title: string;
  description: string;
  reminderTime: Date;
  notificationId: string;
};

const appId = '5732da25-1cf4-4449-b47b-0958d935a236';
const apiKey = 'os_v2_app_k4znuji46rcetnd3bfmnsnncg3scsg5goifugavhtgvxrxwmfdye64mkwgwdd3kkl3igisos6z76h4lzcd3gwrfi2553ior6srd7cty';

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [newTask, setNewTask] = useState({ title: '', description: '', reminderTime: new Date() });


  OneSignal.Debug.setLogLevel(LogLevel.Verbose);
  OneSignal.initialize(appId);
  OneSignal.Notifications.requestPermission(false);

  const addTask = async () => {

    const url = 'https://onesignal.com/api/v1/notifications';
    const options = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        Authorization: 'Basic ' + apiKey,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        app_id: appId,
        'included_segments': ['Total Subscriptions'],
        'contents': { 'en': newTask.description },
        'send_after': newTask.reminderTime.toISOString(),
      }),
    };

    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      setTasks([
        ...tasks,
        {
          id: Math.random().toString(),
          title: newTask.title,
          description: newTask.description,
          reminderTime: newTask.reminderTime,
          notificationId: result.id,
        },
      ]);
      setModalVisible(false);
      setNewTask({ title: '', description: '', reminderTime: new Date() });
    } catch (error) {
    }
  };

  const deleteTask = async (notificationId: string) => {
    const url = 'https://onesignal.com/api/v1/notifications/' + notificationId + '?app_id=' + appId;
    const options = {
      method: 'DELETE',
      headers: {
        accept: 'application/json',
        Authorization: 'Basic ' + apiKey,
        'content-type': 'application/json',
      },
    };

    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

    } catch (error) {

    }

    setTasks(tasks.filter(task => task.notificationId !== notificationId));
  };

  return (
    <View style={styles.container}>
      <Button title="Add Task" onPress={() => setModalVisible(true)} />
      <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.task}>
            <Text style={styles.taskTitle}>{item.title}</Text>
            <Text>{item.description}</Text>
            <Text>{item.reminderTime.toLocaleString()}</Text>
            <Button title="Delete" onPress={() => deleteTask(item.notificationId)}/>
          </View>
        )}
      />
      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modal}>
          <TextInput
            style={styles.input}
            placeholder="Title"
            value={newTask.title}
            onChangeText={text => setNewTask({ ...newTask, title: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Description"
            value={newTask.description}
            onChangeText={text => setNewTask({ ...newTask, description: text })}
          />
          <DateTimePicker date={newTask.reminderTime} onDateChange={(date) => setNewTask({ ...newTask, reminderTime: date })} />
          <Button title="Add Task" onPress={addTask} />
          <Button title="Cancel" onPress={() => setModalVisible(false)}/>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  task: {
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
  },
  taskTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});
