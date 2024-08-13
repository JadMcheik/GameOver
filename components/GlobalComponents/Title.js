import { Text, View, StyleSheet } from "react-native";
import { Colors } from "../../themes/Colors";

const Title = (props) => {
  return (
    <View style={styles.titleView}>
      <Text style={styles.titleText}>{props.title}</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  titleView: {
    borderWidth: 3,
    borderColor: Colors.customYellow,
    padding: 25,
    alignItems: "center",
    justifyContent: "center",
  },

  titleText: {
    color: Colors.customYellow,
    fontWeight: "bold",
    fontSize: 22,
    textAlign: "center",
  },
});
