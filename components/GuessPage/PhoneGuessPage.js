import { View, StyleSheet, Alert, FlatList } from "react-native";
import Header from "../GlobalComponents/Header";
import Title from "../GlobalComponents/Title";
import HigherOrLowerCard from "./HigherorLowerCard";
import { useState, useEffect } from "react";
import SingleGuess from "./SingleGuess";
const PhoneGuessPage = (props) => {
  const [guesses, setGuesses] = useState([]);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(100);
  const [guessedNumber, setGuessedNumber] = useState(
    generateRandomNumber(0, 100)
  );
  const [guessesCount, setGuessesCount] = useState(0);

  if (guessedNumber == props.userNumber) {
    const timer = setTimeout(() => {
      props.setRoundsNumber(guessesCount);
    }, 500);
  }

  useEffect(() => {
    if (min < max) {
      if (guessesCount) {
        const singleGuess = {
          guessCount: guessesCount.toString(),
          guessValue: guessedNumber,
        };
        setGuesses([...guesses, singleGuess]);
      }

      setGuessesCount(guessesCount + 1);

      setGuessedNumber(generateRandomNumber(min, max));
    }
  }, [min, max]);

  function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  function higher() {
    if (guessedNumber < props.userNumber) {
      if (guessedNumber + 1 !== max) {
        setMin(guessedNumber + 1);
      } else {
        setGuessedNumber(guessedNumber + 1);
      }
    } else {
      Alert.alert("Attention", "please don't cheat!");
    }
  }

  function lower() {
    if (guessedNumber > props.userNumber) {
      setMax(guessedNumber);
    } else {
      Alert.alert("Attention", "please don't cheat!");
    }
  }

  return (
    <View style={styles.phoneGuessPage}>
      <Header />

      <View style={styles.pageContent}>
        <View>
          <Title title="Phone's Guess" />
        </View>
        <View style={styles.guessedNumberView}>
          <Title title={guessedNumber} />
        </View>

        <HigherOrLowerCard higher={higher} lower={lower} />

        {guessesCount ? (
          <FlatList
            style={styles.guessesFlatlist}
            data={guesses}
            renderItem={({ item }) => (
              <SingleGuess
                guessCount={item.guessCount}
                guessValue={item.guessValue}
              />
            )}
            keyExtractor={(item) => item.guessCount}
          />
        ) : null}
      </View>
    </View>
  );
};

export default PhoneGuessPage;

const styles = StyleSheet.create({
  phoneGuessPage: {
    flex: 1,
  },
  guessedNumberView: {
    padding: 30,
  },
  pageContent: {
    alignItems: "center",

    flex: 1,
    paddingTop: 40,
  },

  guessesFlatlist: {
    width: "90%",
    paddingHorizontal: 10,
  },
});
