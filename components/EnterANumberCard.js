import { Text, TextInput, View, StyleSheet } from "react-native";
import CustomButton from "./CustomButton";
import Card from "./Card";
import { Colors } from "../themes/Colors";

const EnterANumberCard = () => {
  return (
    <Card>
      <View style={styles.enterANumberView}>
        <Text style={styles.enterANumberText}>Enter a Number</Text>
      </View>
      <View style={styles.numberInputView}>
        <TextInput style={styles.numberInput} />
      </View>

      <View style={styles.cancelOrConfirmView}>
        <View style={styles.buttonView}>
          <CustomButton buttonValue="Reset" />
        </View>
        <View style={styles.buttonView}>
          <CustomButton buttonValue="Confirm" />
        </View>
      </View>
    </Card>
  );
};

export default EnterANumberCard;

const styles = StyleSheet.create({
  enterANumberView: {
    alignItems: "center",
    justifyContent: "center",
  },
  enterANumberText: {
    textAlign: "center",
    fontSize: 20,
    color: Colors.customYellow,
  },
  numberInputView: {
    alignItems: "center",
    justifyContent: "center",
    height: 80,
    paddingTop: 20,
    paddingBottom: 20,
  },
  numberInput: {
    width: "100%",
    height: "100%",
    textAlign: "center",
    fontSize: 20,
  },
  cancelOrConfirmView: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
  },
  buttonView: {
    width: 110,
  },
});
