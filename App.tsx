import { Text, View. StyleSheet } from "react-native";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#131016",
        padding: 48,
      }}
    >
      <Text
        style={{
          color: "#FFF",
          fontSize: 24,
          fontWeight: "bold",
          marginTop: 18,
        }}
      >
        Nome do evento
      </Text>

      <Text
        style={{
          color: "#bfbfbf",
          fontSize: 16,
        }}
      >
        Sexta, 4 de outobro de 2023
      </Text>
    </View>
  );
}
