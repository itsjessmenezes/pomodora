import React, { useCallback } from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Button from "../../components/Button";

import { styles } from "./styles";

export default function Congrats() {
  const navigation = useNavigation();

  const navigateToTimer = useCallback(() => navigation.navigate("Timer"), [
    navigation,
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfeito!</Text>
      <Text style={styles.text}>Agora é hora de descansar</Text>
      <Button
        text="I'm ready to work again"
        style={styles.button}
        onPress={navigateToTimer}
      />
    </View>
  );
}
