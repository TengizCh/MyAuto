import { View, TouchableOpacity } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";

export const TransportType = () => {
  const [changeColor, setChangeColor] = useState(true);
  const [changeColor1, setChangeColor1] = useState(false);
  const [changeColor2, setChangeColor2] = useState(false);

  const pressHandler = () => {
    setChangeColor(!changeColor);
    setChangeColor1(false);
    setChangeColor2(false);
  };

  const pressHandler1 = () => {
    setChangeColor1(!changeColor1);
    setChangeColor(false);
    setChangeColor2(false);
  };

  const pressHandler2 = () => {
    setChangeColor2(!changeColor2);
    setChangeColor(false);
    setChangeColor1(false);
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
        marginTop: 20,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: `${changeColor === true ? "white" : "#e9ecef"}`,
            height: 25,
            width: 105,
            alignItems: "center",
            borderRadius: 5,
          }}
          onPress={pressHandler}
        >
          <Ionicons name="ios-car-sport-outline" size={24} color="#6c757d" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: `${changeColor1 === true ? "white" : "#e9ecef"}`,
            height: 25,
            width: 105,
            alignItems: "center",
            borderRadius: 5,
          }}
          onPress={pressHandler1}
        >
          <MaterialCommunityIcons name="tractor" size={24} color="#6c757d" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: `${changeColor2 === true ? "white" : "#e9ecef"}`,
            height: 25,
            width: 105,
            alignItems: "center",
            borderRadius: 5,
          }}
          onPress={pressHandler2}
        >
          <MaterialIcons name="pedal-bike" size={24} color="#6c757d" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
