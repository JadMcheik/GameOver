import { Text, View, StyleSheet } from "react-native";
import { Colors } from "../../themes/Colors";

const SingleGuess = (props) => {
  return (
    <View style={styles.guessView}>
      <Text style={styles.guessCountText}>#{props.guessCount}</Text>
      <Text style={styles.guessvalueText}>
        Phone's Guess:{props.guessValue}
      </Text>
    </View>
  );
};

export default SingleGuess;

const styles = StyleSheet.create({
  guessView: {
    backgroundColor: Colors.customYellow,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginVertical: 8,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: Colors.mainColor,

    width: "100%",
  },
  guessCountText: {
    color: Colors.white,
  },
});
