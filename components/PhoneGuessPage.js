import { View, StyleSheet } from "react-native";
import Header from "./Header";
import Title from "./Title";
import HigherOrLowerCard from "./HigherorLowerCard";

const PhoneGuessPage = () => {
  return (
    <View style={styles.phoneGuessPage}>
      <Header />

      <View style={styles.pageContent}>
        <View>
          <Title title="Phone's Guess" />
        </View>
        <View style={styles.guessedNumberView}>
          <Title title="95" />
        </View>

        <HigherOrLowerCard />
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
});
