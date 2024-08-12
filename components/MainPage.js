import { StyleSheet, View } from "react-native";
import GameOverPage from "./GameOverPage/GameOverPage";
import PhoneGuessPage from "./GuessPage/PhoneGuessPage";
import InitialPage from "./initialPage/InitialPage";
import { useState } from "react";

const MainPage = () => {
  const [userNumber, setUserNumber] = useState(0);
  const [roundsNumber, setRoundsNumber] = useState(0);

  return (
    <View style={styles.mainPage}>
      {userNumber ? (
        roundsNumber ? (
          <GameOverPage
            userNumber={userNumber}
            setUserNumber={setUserNumber}
            roundsNumber={roundsNumber}
            setRoundsNumber={setRoundsNumber}
          />
        ) : (
          <PhoneGuessPage
            userNumber={userNumber}
            setRoundsNumber={setRoundsNumber}
          />
        )
      ) : (
        <InitialPage setUserNumber={setUserNumber} />
      )}
    </View>
  );
};

export default MainPage;
const styles = StyleSheet.create({
  mainPage: {
    flex: 1,
  },
});
