import React from "react";
import { createDrawerNavigator} from "@react-navigation/drawer";

import Login from "../screens/Login";
import Login1 from "../components/login/Login";
import HomePages from "../screens/HomePages";


const Drawn = createDrawerNavigator();

export default function DrawnNavigation() {
    return (
        <Drawn.Navigator>
            <Drawn.Screen
                component={Login}
                name = 'loginOut'
                option={{title:'Deslogeo'}}
            />
            <Drawn.Navigator
                component={HomePages}
                name = 'homeOut'
                option={{title:'Deslogeo'}}
            />
        </Drawn.Navigator>
    )
}