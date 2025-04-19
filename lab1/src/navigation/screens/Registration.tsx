import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

export default function Registration() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Реєстрація</Text>
      <TextInput placeholder="Електронна пошта" style={styles.input} />
      <TextInput placeholder="Пароль" style={styles.input} secureTextEntry />
      <TextInput placeholder="Пароль (ще раз)" style={styles.input} secureTextEntry />
      <TextInput placeholder="Прізвище" style={styles.input} />
      <TextInput placeholder="Ім'я" style={styles.input} />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Зареєструватися</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});