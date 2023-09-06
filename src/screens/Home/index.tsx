import React from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import { Participant } from "../../components/Participant";
import { styles } from "./styles";

export function Home() {
  const Participants = [
    "Teoian",
    "Yrlan",
    "Erick",
    "Lucas",
    "Paulo",
    "Juninho",
    "Sirlan",
    "Robson",
    "Miles",
    "Reptile",
    "Cleiton",
    "Nivolas",
    "Periquito",
    "Thiago",
    "Yago",
  ];

  function handleParticipantAdd() {
    if (Participants.includes("Nivolas")) {
    }
    console.log("Clicado!");
  }

  function handleParticipantRemove(name: String) {
    console.log(`Participante ${name} removido!`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de outobro de 2023</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}> + </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={Participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showVerticalScrollIndicator={false}
      />
    </View>
  );
}
