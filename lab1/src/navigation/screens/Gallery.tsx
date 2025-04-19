import React from 'react';
import { View, Image, StyleSheet, FlatList } from 'react-native';

const galleryData = Array.from({ length: 10 }, (_, index) => ({
  id: `${index + 1}`,
}));

export default function Gallery() {
  const renderItem = () => (
    <View style={styles.item}>
      <Image
        source={require('../../assets/news-placeholder.jpg')}
        style={styles.image}
      />
    </View>
  );

  return (
    <FlatList
      data={galleryData}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      numColumns={2}
      contentContainerStyle={styles.list}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    padding: 16,
  },
  item: {
    flex: 1,
    aspectRatio: 1,
    margin: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
});