import React, { useState } from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import Team from "./src/components/Team";
import ResetButton from "./src/components/ResetButton";

export default function App() {
  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);

  const handleIncrease = (team) => {
    if (team === "A") {
      const newScore = scoreA + 1;
      setScoreA(newScore);
      if (newScore === 10) {
        alert("Tim A memenangkan pertandingan!");
      }
    } else if (team === "B") {
      const newScore = scoreB + 1;
      setScoreB(newScore);
      if (newScore === 10) {
        alert("Tim B memenangkan pertandingan!");
      }
    }
  };

  const handleDecrease = (team) => {
    if (team === "A" && scoreA > 0) {
      setScoreA(scoreA - 1);
    } else if (team === "B" && scoreB > 0) {
      setScoreB(scoreB - 1);
    }
  };

  const handleReset = () => {
    setScoreA(0);
    setScoreB(0);
  };

  return (
    <ImageBackground
      source={require("./assets/dito.jpg")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.title}>Skor Pertandingan Futsal</Text>

        <Team
          teamName="Tim A"
          score={scoreA}
          onIncrease={() => handleIncrease("A")}
          onDecrease={() => handleDecrease("A")}
        />
        <Team
          teamName="Tim B"
          score={scoreB}
          onIncrease={() => handleIncrease("B")}
          onDecrease={() => handleDecrease("B")}
        />

        <ResetButton onReset={handleReset} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 40,
    textShadowColor: "#000",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
});
