import { Text, TextInput, View, StyleSheet } from "react-native";
import CustomButton from "../GlobalComponents/CustomButton";
import Card from "../GlobalComponents/Card";
import { Colors } from "../../themes/Colors";

const EnterANumberCard = (props) => {
  return (
    <Card>
      <View style={styles.enterANumberView}>
        <Text style={styles.enterANumberText}>Enter a Number</Text>
      </View>
      <View style={styles.numberInputView}>
        <TextInput
          inputMode="numeric"
          style={styles.numberInput}
          onChangeText={props.setInputValue}
          value={props.inputValue}
        />
        {props.emptyInputAlertShow ? (
          <Text style={styles.emptyTextFieldAlert}>
            please enter a number first!
          </Text>
        ) : null}

        {props.numberLimit ? (
          <Text style={styles.numberLimit}>
            the number must be between 0 and 100!
          </Text>
        ) : null}
      </View>

      <View style={styles.cancelOrConfirmView}>
        <View style={styles.buttonView}>
          <CustomButton buttonValue="Reset" function={props.resetInput} />
        </View>
        <View style={styles.buttonView}>
          <CustomButton buttonValue="Confirm" function={props.confirmInput} />
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
  emptyTextFieldAlert: {
    color: "red",
    fontWeight: "bold",
    fontSize: 13,
  },
  numberLimit: {
    color: "red",
    fontWeight: "bold",
    fontSize: 13,
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
