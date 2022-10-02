import {
  View,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Dimensions,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";

import { TransportType } from "../components/SearchList/TransportType";
import Header from "../components/SearchList/Header";
import SellType from "../components/SearchList/SellType";
import SearchButton from "../components/SearchList/SearchButton";

import axios from "axios";
import SelectList from "react-native-dropdown-select-list";

// Price max range hardcoded data
const dummy_price_data = [
  { value: 10000 },
  { value: 20000 },
  { value: 30000 },
  { value: 40000 },
  { value: 50000 },
  { value: 100000 },
];

const WIDTH = Dimensions.get("window").width;

const HomeScreen = ({ navigation }) => {
  const [year, setYear] = useState("");
  const [results, setResulst] = useState([]);
  const [selected, setSelected] = useState("");

  const API_URL = "https://api2.myauto.ge/ka/products?";

  // Fetching Data from backend
  const fetchApi = async () => {
    try {
      const response = await axios.get(`${API_URL}`);
      console.log(response?.data?.data.items[0]);
      setResulst(
        response?.data?.data?.items.filter((item) => {
          return item.prod_year >= year && item.price_value <= selected;
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  // Navigation and rendering results
  useEffect(() => {
    if (results.length !== 0) {
      navigation.navigate("Results", {
        results: results,
      });
    }
  }, [results]);

  // Searching button handler
  function pressHandler() {
    fetchApi();
  }

  return (
    <SafeAreaView>
      <Header action={pressHandler} />
      <View>
        <TransportType />
        <SellType />
        <View style={styles.brandInputContainer}>
          <TextInput style={styles.brandInput} placeholder="მწარმოებელი" />
        </View>
        <View style={styles.yearContainer}>
          <TextInput
            value={year}
            onChangeText={(text) => setYear(text)}
            style={styles.yearInput}
            placeholder="წელი  - დან"
          />
        </View>
        <View style={styles.selectListContainer}>
          <SelectList
            data={dummy_price_data}
            setSelected={(value) => setSelected(value)}
            boxStyles={{ backgroundColor: "#e9ecef", borderColor: "#e9ecef" }}
            dropdownStyles={{ borderColor: "#e9ecef" }}
            dropdownTextStyles={{ color: "gray" }}
            placeholder="Max Price Range GEL"
          />
        </View>
        <SearchButton action={pressHandler} />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  brandInputContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  brandInput: {
    height: 50,
    width: WIDTH * 0.88,
    borderWidth: 1.5,
    borderColor: "#e9ecef",
    paddingLeft: 20,
    borderRadius: 15,
  },
  yearContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  yearInput: {
    height: 50,
    width: WIDTH * 0.88,
    borderWidth: 1.5,
    borderColor: "#e9ecef",
    paddingLeft: 20,
    borderRadius: 15,
  },
  selectListContainer: {
    marginHorizontal: 24,
    marginTop: 20,
  },
});
