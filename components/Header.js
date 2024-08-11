import { Text, View, StyleSheet } from "react-native";
import { Colors } from "../themes/Colors";

const Header = () => {
  return (
    <View style={styles.headerView}>
      <Text style={styles.headerText}>Guess a Number</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerView: {
    paddingTop: 50,
    paddingBottom: 15,
    backgroundColor: Colors.mainColor,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  headerText: {
    fontSize: 20,
    color: Colors.white,
    fontWeight: "bold",
    textAlign: "center",
  },
});
