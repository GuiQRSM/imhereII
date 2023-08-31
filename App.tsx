import { Text, View, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de outobro de 2023</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131016",
    padding: 48,
  },
  eventName: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 18,
  },
  eventDate: {
    color: "#bfbfbf",
    fontSize: 16,
  },
});
