import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';

const newsData = [
  { id: '1', title: 'Заголовок новини', date: 'Дата новини', description: 'Короткий текст новини' },
  { id: '2', title: 'Заголовок новини', date: 'Дата новини', description: 'Короткий текст новини' },
  { id: '3', title: 'Заголовок новини', date: 'Дата новини', description: 'Короткий текст новини' },
  { id: '4', title: 'Заголовок новини', date: 'Дата новини', description: 'Короткий текст новини' },
  { id: '5', title: 'Заголовок новини', date: 'Дата новини', description: 'Короткий текст новини' },
  { id: '6', title: 'Заголовок новини', date: 'Дата новини', description: 'Короткий текст новини' },
  { id: '7', title: 'Заголовок новини', date: 'Дата новини', description: 'Короткий текст новини' },
];

export default function NewsList() {
  const renderItem = ({ item }: { item: typeof newsData[0] }) => (
    <View style={styles.newsItem}>
      <Image source={require('../../assets/news-placeholder.jpg')} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.date}>{item.date}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );

  return (
    <FlatList
      data={newsData}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.list}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    padding: 16,
  },
  newsItem: {
    flexDirection: 'row',
    marginBottom: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  date: {
    fontSize: 12,
    color: '#888',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#555',
  },
});