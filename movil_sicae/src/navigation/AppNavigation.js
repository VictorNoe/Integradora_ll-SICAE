import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from "../screens/Login";
import HomePages from "../screens/HomePages";
import Login1 from "../components/login/Login";
import DrawnNavigation from "./DrawnNavigation";

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown:false,
        }}>
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
                component={DrawnNavigation}
                name = 'home'
                option={{title:'Home'}}
            />
        </Stack.Navigator>
    )
}