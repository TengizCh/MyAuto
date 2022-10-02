import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  FlatList,
  ScrollView,
} from "react-native";
import React from "react";
import { Divider } from "react-native-elements";

// Dummy data of Brand, Model and Image
const dummy_data = [
  {
    name: "Brand",
    model: "Model",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/BMW_M4_%28G82%29_IMG_4183.jpg/1200px-BMW_M4_%28G82%29_IMG_4183.jpg",
  },
];

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const ResultScreen = ({ route }) => {
  return (
    <View style={styles.container}>
      <FlatList
        renderItem={render}
        data={route.params.results}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const render = ({ item }) => {
  return (
    <View style={styles.resultsContainer}>
      <View style={styles.innerResultsContainer}>
        <View style={styles.badgeContainer}>
          <Text style={styles.badgeText}>S-VIP</Text>
        </View>
        <Text style={[styles.infoText, { marginLeft: 10 }]}>
          {dummy_data[0].name}
        </Text>
        <Text style={[styles.infoText, { marginLeft: 10 }]}>
          {dummy_data[0].model}
        </Text>
        <Text style={[styles.infoText, { marginLeft: 10 }]}>
          {item.prod_year}
        </Text>
      </View>
      <Text style={styles.priceText}>
        {item.price_value.toLocaleString("eu")} GEL
      </Text>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
        <Image source={{ uri: dummy_data[0].image }} style={styles.img} />
        <Image source={{ uri: dummy_data[0].image }} style={styles.img} />
      </ScrollView>
      <View style={styles.descTextContainer}>
        <Text style={[styles.descText, { marginTop: 15 }]}>
          გარბენი: {item.car_run} კმ
        </Text>
        <Text style={[styles.descText, { marginTop: 15, fontWeight: "500" }]}>
          ტელ: +{item.client_phone}
        </Text>
      </View>
      <View style={styles.descTextContainer}>
        <Text style={styles.descText}>
          ძრავის მოსულობა: {item.engine_volume}
        </Text>
        <Text style={[styles.descText, { marginTop: 15, fontWeight: "500" }]}>
          VIN: {item.vin}
        </Text>
      </View>
      <Text style={styles.descText}>ცილინდრი: V{item.cylinders} </Text>
      <Divider />
      <Text style={styles.viewText}>{item.views} ნახვა</Text>
    </View>
  );
};

export default ResultScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e9ecef",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  resultsContainer: {
    width: WIDTH * 1,
    height: HEIGHT * 0.6,
    backgroundColor: "white",
    borderRadius: 30,
    marginTop: 30,
    marginBottom: 15,
  },
  innerResultsContainer: {
    alignItems: "center",
    flexDirection: "row",
    marginTop: 20,
  },
  img: {
    width: WIDTH * 0.95,
    height: HEIGHT * 0.3,
    borderRadius: 30,
    marginTop: 20,
    alignSelf: "center",
    marginHorizontal: 5,
  },
  infoText: {
    fontSize: 18,
    fontWeight: "500",
  },
  priceText: {
    fontSize: 18,
    fontWeight: "700",
    marginLeft: 20,
    marginTop: 20,
  },
  badgeContainer: {
    marginLeft: 20,
    backgroundColor: "#e85d04",
    height: 25,
    width: 45,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 7,
  },
  badgeText: {
    fontWeight: "700",
    fontSize: 13,
    color: "white",
  },
  descTextContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  descText: {
    fontSize: 12,
    fontWeight: "400",
    marginHorizontal: 12,
    marginVertical: 8,
    color: "gray",
  },
  viewText: {
    fontSize: 13,
    fontWeight: "700",
    marginHorizontal: 35,
    marginVertical: 15,
    color: "gray",
  },
});
