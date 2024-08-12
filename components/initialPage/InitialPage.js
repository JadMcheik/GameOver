import { StyleSheet, View, Alert } from "react-native";
import Header from "../GlobalComponents/Header";
import EnterANumberCard from "./EnterANumberCard";
import Title from "../GlobalComponents/Title";
import { useState } from "react";

const InitialPage = (props) => {
  const [inputValue, setInputValue] = useState("");
  const [emptyInputAlertShow, setEmptyInputAlertShow] = useState(false);
  const [numberLimit, setNumberLimit] = useState(false);
  function confirmInput() {
    if (inputValue) {
      if (inputValue > 0 && inputValue < 100) {
        Alert.alert("Confirm number?", "press confirm to confirm your number", [
          {
            text: "Cancel",
            style: "cancel",
          },
          {
            text: "confirm",
            onPress: () => {
              props.setUserNumber(inputValue);
            },
          },
        ]);
        setNumberLimit(false);
      } else {
        setNumberLimit(true);
      }

      setEmptyInputAlertShow(false);
    } else {
      setEmptyInputAlertShow(true);
      setNumberLimit(false);
    }
  }

  function resetInput() {
    setInputValue("");
  }

  return (
    <View style={styles.initialPage}>
      <Header />
      <View style={styles.pageContent}>
        <Title title="Guess My Number" />
        <EnterANumberCard
          setInputValue={setInputValue}
          inputValue={inputValue}
          confirmInput={confirmInput}
          resetInput={resetInput}
          emptyInputAlertShow={emptyInputAlertShow}
          numberLimit={numberLimit}
        />
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
