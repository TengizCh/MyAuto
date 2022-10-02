import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";

import { AntDesign } from "@expo/vector-icons";
import { Divider } from "react-native-elements";

// Main Header
const Header = ({ action }) => {
  return (
    <View>
      <View style={styles.mainContainer}>
        <Logo />
        <SearchButton action={action} />
      </View>
      <Divider orientation="horizontal" />
    </View>
  );
};

export default Header;

// Myauto.ge Logo

const Logo = () => (
  <View style={styles.logOuterContainer}>
    <View style={styles.logoContainer}>
      <Text style={styles.innerText}>myauto</Text>
    </View>
    <View style={styles.outerTextContainer}>
      <Text style={styles.outerText}>.ge</Text>
    </View>
  </View>
);

// Search Button and Input
// Works with same function as მოძებნე Button

const SearchButton = ({ action }) => (
  <View style={styles.searchContainer}>
    <View style={{ marginHorizontal: 5 }}>
      <TextInput style={styles.searchInput} placeholder="Search" />
    </View>
    <TouchableOpacity onPress={action}>
      <AntDesign name="search1" size={26} color="gray" />
    </TouchableOpacity>
  </View>
);

// Styles

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 8,
    marginBottom: 15,
  },
  searchContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  searchInput: {
    height: 40,
    width: 180,
    backgroundColor: "white",
    borderRadius: 30,
    padding: 10,
  },
  logOuterContainer: {
    backgroundColor: "#e85d04",
    width: 130,
    height: 40,
    justifyContent: "space-around",
    flexDirection: "row",
    borderRadius: 30,
    marginLeft: 8,
  },
  logoContainer: {
    backgroundColor: "white",
    alignSelf: "center",
    height: 30,
    borderRadius: 30,
    width: 85,
    marginLeft: 3,
  },
  innerText: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: 2,
  },
  outerTextContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  outerText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
    color: "white",
    paddingRight: 5,
  },
});
