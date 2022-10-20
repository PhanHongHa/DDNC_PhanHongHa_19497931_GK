import React, { useState } from "react";
import { Image, Text, View,TouchableOpacity } from "react-native";

const Detail = ({ navigation, route }) => {
  const { item } = route.params.product;
  const [product, setProduct] = useState(item);

  console.log(product);
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
      setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
      if (quantity > 1) {
          setQuantity(quantity - 1);
      }
  };
  return (
    <View style={{ flex: 1 }}>
      <Image source={product.img} style={{ width: "70%", height: 250 }} />
      <View style={{ borderColor: "#000", borderBottomWidth: 1 }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "500",
          }}
        >
          Price: {product.price}
        </Text>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "500",
            marginBottom: 20,
          }}
        >
          Describe: {product.name} topped with letture, tomato and Shacksource
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          width: 50,
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity onPress={() => handleIncrease(item)}>
          <Text style>+</Text>
        </TouchableOpacity>
        <Text>3

        </Text>
        <TouchableOpacity onPress={() => handleDecrease(item)}>
          <Text>-</Text>
        </TouchableOpacity>
      </View>
      <View>
                <TouchableOpacity style={{flexDirection:'row', margin: 10 ,width:'80%',borderWidth:1,height:50,justifyContent:'center',alignItems: 'center',marginLeft:40,borderRadius:20,marginTop:20}}>
                    <Text >Add to cart</Text>
                    <Text style={{borderWidth:1,marginLeft:20}}> {product.price}</Text>
                    </TouchableOpacity>
            </View>
        </View>
   
  );
};

export default Detail;
