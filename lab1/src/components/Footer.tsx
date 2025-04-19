import { View, Text, Image, StyleSheet } from 'react-native'

export default function Footer() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Герасимчук Дмитро ІПЗ-21-2</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 10,
  },
})
