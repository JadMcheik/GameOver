import { StyleSheet, View } from "react-native";
import Header from "./Header";
import Title from "./Title";
import EnterANumberCard from "./EnterANumberCard";
const InitialPage = () => {
  return (
    <View style={styles.initialPage}>
      <Header />
      <View style={styles.pageContent}>
        <Title title="Guess My Number" />
        <EnterANumberCard />
      </View>
    </View>
  );
};

export default InitialPage;
const styles = StyleSheet.create({
  initialPage: {
    flex: 1,
  },

  pageContent: {
    alignItems: "center",

    flex: 1,

    paddingTop: 60,
  },
});
