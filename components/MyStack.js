import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Detail from "./Detail";
import Home from "./Home";

const Stack = createStackNavigator();

const MyStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Detail" component={Detail} />
        </Stack.Navigator>
    );
};

export default MyStack;
