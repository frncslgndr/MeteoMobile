import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import TabNavigator from "../Navigator/TabNavigator";

const Stack = createNativeStackNavigator();

export default function Nav() {
    return (
    <NavigationContainer>
        <TabNavigator />
    </NavigationContainer>
)
}