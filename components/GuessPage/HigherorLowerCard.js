import { Text, View, StyleSheet } from "react-native";
import Card from "../GlobalComponents/Card";
import CustomButton from "../GlobalComponents/CustomButton";
import { Colors } from "../../themes/Colors";

const HigherOrLowerCard = (props) => {
  return (
    <Card>
      <View style={styles.higherOrLowerView}>
        <Text style={styles.higherOrLowerText}>Higher or lower?</Text>
      </View>

      <View style={styles.minusOrPlusView}>
        <View style={styles.buttonView}>
          <CustomButton buttonValue="-" function={props.lower} />
        </View>
        <View style={styles.buttonView}>
          <CustomButton buttonValue="+" function={props.higher} />
        </View>
      </View>
    </Card>
  );
};

export default HigherOrLowerCard;

const styles = StyleSheet.create({
  higherOrLowerView: {
    alignItems: "center",
    justifyContent: "center",
  },
  higherOrLowerText: {
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
  minusOrPlusView: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
    paddingTop: 30,
  },
  buttonView: {
    width: 110,
  },
});
