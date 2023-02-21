import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from "../screens/Login";
import HomePages from "../screens/HomePages";
import Login1 from "../components/login/Login";

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                component={Login}
                name = 'login'
                option={{title:'Login'}}
            />
            <Stack.Screen
                component={HomePages}
                name = 'home1'
                option={{title:'Home'}}
            />
            <Stack.Screen
                component={Login1}
                name = 'login1'
                option={{title:'Login1'}}
            />
        </Stack.Navigator>
    )
}