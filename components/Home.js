import { Button } from "@react-native-material/core";
import React, { useEffect, useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import IMG1 from "../assets/images/a.png";
import IMGTym from "../assets/images/vh.png";

const Home = ({ navigation }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData([
      {
        id: 1,
        img: IMG1,
        name: "Peter Luger",
        price: 44,
      },
      {
        id: 2,
        img: IMG1,
        name: "Angus bugger",
        price: 22,
      },
      {
        id: 3,
        img: IMG1,
        name: "Peter Luger",
        price: 43,
      },
      {
        id: 4,
        img: IMG1,
        name: "Angus bugger",
        price: 12,
      },
    ]);
  }, []);
  console.log(data);

  const handleClickItem = (item) => {
    navigation.navigate("Detail", { product: { item } });
  };

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          padding: 20,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Image source={require("../assets/images/v.png")}></Image>
        <Text>Home</Text>
        <Image source={require("../assets/images/dn.png")} />
      </View>
      <Text style={{textAlign:"center", fontSize: 20, marginBottom:10}}>Find Best Nurger in Your city</Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TextInput style={styles.input} placeholder="Search..." />
        <TouchableOpacity>
          <Image source={require("../assets/images/s.png")} />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap" }}>
        {data.map((item, index) => (
          <TouchableOpacity
            onPress={() => handleClickItem(item)}
            style={{
              width: "43%",
              paddingHorizontal: 5,
              marginBottom: 10,
              marginHorizontal: 10,
              borderRadius: 20,
              backgroundColor: "silver",
            }}
            key={item.id}
          >
            <View>
              <Image source={item.img} style={{ width: "100%", height: 150 }} />
              <View>
                <Text style={{ fontSize: 20, fontWeight: "700" }}>
                  {item.name}
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: "500",
                    }}
                  >
                    ${item.price}.00
                  </Text>

                  <Image
                    source={IMGTym}
                    style={{
                      width: 30,
                      height: 30,
                    }}
                  />
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 200,
    borderRadius: 20,
  },
});
