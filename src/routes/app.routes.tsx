import React from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import { Dashboard } from "../pages/Dashboard";

const {Navigator, Screen} = createBottomTabNavigator();

export function AppRoutes(){
    return(
        <Navigator>
            <Screen 
                name="Dashboard"
                component = {Dashboard}
            />
        </Navigator>
    )
}