import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { Colors } from "../../themes/Colors";

const CustomButton = (props) => {
  return (
    <TouchableOpacity style={styles.ButtonView} onPress={props.function}>
      <Text style={styles.ButtonText}>{props.buttonValue}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
const styles = StyleSheet.create({
  ButtonView: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    width: "100%",
    backgroundColor: Colors.mainColor,
    borderRadius: 30,
  },

  ButtonText: {
    textAlign: "center",
    color: Colors.white,
    fontSize: 18,
  },
});
