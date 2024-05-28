import * as React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screens/HomeScreen";
import DetailsScreen from "../Screens/DetailsScreen";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return(
        <Tab.Navigator>
            <Tab.Screen name="Tab1" component={HomeScreen} />
            <Tab.Screen name="Tab2" component={DetailsScreen} />
        </Tab.Navigator>
    )
}