import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const ResetButton = ({ onReset }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onReset}>
        <Text style={styles.buttonText}>Reset Pertandingan</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    alignItems: "center",
    width: "80%",
  },
  button: {
    backgroundColor: "#673AB7",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default ResetButton;
