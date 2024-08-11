import { View, StyleSheet } from "react-native";
import { Colors } from "../themes/Colors";

const Card = ({ children }) => {
  return <View style={styles.cardEffect}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  cardEffect: {
    marginVertical: 20,
    padding: 30,
    width: "80%",
    backgroundColor: Colors.white,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 14,
    borderRadius: 10,
  },
});
