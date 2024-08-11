import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import InitialPage from "./components/InitialPage";
import PhoneGuessPage from "./components/PhoneGuessPage";
import GameOverPage from "./components/GameOverPage";

export default function App() {
  return (
    <View style={styles.container}>
   <GameOverPage/>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
 
});
