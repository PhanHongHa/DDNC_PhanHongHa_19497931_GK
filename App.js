import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { createContext, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import MyStack from "./components/MyStack";

export const CartContext = createContext();

export default function App() {
    const [cart, setCart] = useState([]);

    const value = {
        cart,
        setCart,
    };

    return (
        <CartContext.Provider value={value}>
            <View style={styles.container}>
                <NavigationContainer>
                    <MyStack />
                </NavigationContainer>
            </View>
        </CartContext.Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
});
