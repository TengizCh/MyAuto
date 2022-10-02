import { View, Pressable, Text, StyleSheet } from "react-native";
import React, { useState } from "react";

const SellType = () => {
  const [changeColor, setChangeColor] = useState(true);
  const [changeColor1, setChangeColor1] = useState(false);

  const pressHandler = () => {
    setChangeColor(!changeColor);
    setChangeColor1(false);
  };

  const pressHandler1 = () => {
    setChangeColor1(!changeColor1);
    setChangeColor(false);
  };

  return (
    <View
      style={{
        backgroundColor: "#e9ecef",
        alignSelf: "center",
        width: 340,
        height: 32,
        borderRadius: 5,
        justifyContent: "center",
        marginTop: 15,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Pressable
          onPress={pressHandler}
          style={{
            backgroundColor: `${changeColor === true ? "white" : "#e9ecef"}`,
            height: 25,
            width: 160,
            alignItems: "center",
            borderRadius: 5,
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 15, fontWeight: "400", color: "#6c757d" }}>
            იყიდება
          </Text>
        </Pressable>
        <Pressable
          onPress={pressHandler1}
          style={{
            backgroundColor: `${changeColor1 === true ? "white" : "#e9ecef"}`,
            height: 25,
            width: 160,
            alignItems: "center",
            borderRadius: 5,
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 15, fontWeight: "400", color: "#6c757d" }}>
            ქირავდება
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default SellType;
