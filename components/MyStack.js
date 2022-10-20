import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import Home from "./Home";

const Stack = createStackNavigator();

const MyStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            
        </Stack.Navigator>
    );
};

export default MyStack;
