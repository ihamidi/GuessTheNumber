import React, { useState } from "react";
import { Button, Text, View, TextInput, StyleSheet } from "react-native";

const Cat = (props) => {
  const [isHungry, setIsRight] = useState(true);



  return (
    <View>
      <Text style={styles.baseText}>
      Number is between 1-1000
      </Text>
      <TextInput
          style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1
          }}
          placeholder="Type your guess"
        />
      <Button
        onPress={() => {
          setIsHungry(false);
        }}
        disabled={!isHungry}
        title={isHungry ? "Submit" : "Try Again"}
      />
    </View>
  );
}

const Cafe = () => {
  return (
    <>
    <View style={styles.container}>
    <Text style={styles.baseText}>
      Guess the Number!
    </Text>

      <Cat name="Munkustrap" />
      </View>
      </>

);
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  padding: 24,
  backgroundColor: "#eaeaea"
},
title: {
  marginTop: 16,
  paddingVertical: 8,
  borderWidth: 4,
  borderColor: "#20232a",
  borderRadius: 6,
  backgroundColor: "#61dafb",
  color: "#20232a",
  textAlign: "center",
  fontSize: 30,
  fontWeight: "bold"
},
  baseText: {
    fontFamily: "Cochin"
  },
  titleText: {
    fontSize: 30,
    fontWeight: "bold"
  }
});


export default Cafe;
