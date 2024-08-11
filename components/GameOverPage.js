import { View, Image, StyleSheet, Text } from "react-native";
import Title from "./Title";
import GameOverImage from "../Images/GameOverImage.png";
import Header from "./Header";
import CustomButton from "./CustomButton";
import { Colors } from "../themes/Colors";

const GameOverPage = () => {
  return (
    <View style={styles.gameOverPage}>
      <Header />

      <View style={styles.pageContent}>
        <View style={styles.gameOverTitleView}>
          <Title title="GAME OVER!" />
        </View>
        <View style={styles.gameOverImageView}>
          <Image source={GameOverImage} style={styles.gameOverImage} />
        </View>
        <View style={styles.resultView}>
          <Text style={styles.resultText}>
            Your phone needed 2 rounds to guess the number 12
          </Text>
        </View>

        <View style={styles.startNewGameView}>
          <CustomButton buttonValue="Start New Game" />
        </View>
      </View>
    </View>
  );
};

export default GameOverPage;
const styles = StyleSheet.create({
  gameOverPage: {
    flex: 1,
  },

  pageContent: {
    paddingTop: 40,
    paddingHorizontal: 40,
    alignItems: "center",
    rowGap: 40,
    flex: 1,
  },
  gameOverTitleView: {
    width: "100%",
    paddingHorizontal: 30,
  },
  gameOverImageView: {
    width: 300,
    height: 300,
    borderRadius: 150,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: Colors.mainColor,
  },
  gameOverImage: {
    width: "100%",
    height: "100%",
  },
  resultView: {
    alignItems: "center",
    justifyContent: "center",
  },

  resultText: {
    fontSize: 20,
    textAlign: "center",
  },

  startNewGameView: {
    width: "100%",
    paddingHorizontal: 60,
  },
});
