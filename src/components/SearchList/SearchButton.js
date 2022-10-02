import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";

import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const WIDTH = Dimensions.get("window").width;

export const SearchButton = ({ action }) => {
  return (
    <View style={styles.btnContainer}>
      <TouchableOpacity style={styles.btnInnerContainer} onPress={action}>
        <AntDesign
          name="search1"
          size={24}
          color="white"
          style={{ marginLeft: 25 }}
        />
        <Text style={styles.btnText}>მოძებნე</Text>
        <MaterialIcons
          name="navigate-next"
          size={24}
          color="white"
          style={{ marginRight: 10 }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SearchButton;

const styles = StyleSheet.create({
  btnContainer: {
    alignItems: "center",
    marginTop: 80,
    elevation: 8, // for android
    shadowColor: "black", // for IOS
    shadowOffset: { width: 4, height: 4 },
    shadowRadius: 10,
    shadowOpacity: 0.4,
  },
  btnInnerContainer: {
    backgroundColor: "#001233",
    width: WIDTH * 0.88,
    height: 50,
    justifyContent: "space-between",
    borderRadius: 15,
    alignItems: "center",
    flexDirection: "row",
  },
  btnText: {
    fontSize: 15,
    alignSelf: "center",
    color: "white",
    fontWeight: "500",
    marginRight: 150,
  },
});
