import * as React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeNavigator from "./HomeNavigator";
import MeteoNavigator from "./MeteoNavigator"
import { Ionicons } from '@expo/vector-icons';
import ProfileNavigator from "./ProfileNavigator";
import TodoNavigator from "./TodoNavigator";


const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return(
        <Tab.Navigator>
            <Tab.Screen
                name="Tab1"
                component={HomeNavigator}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home" color={color} size={size} />
                    ),
                    title: 'HOME',
                    headerShown : false,
                    // headerStyle: {
                    //     backgroundColor: '#000000',
                    // },
                    // headerTintColor: '#fff',
                    // headerTitleStyle: {
                    //     fontWeight: 'bold',
                    // }
                }}
            />
            <Tab.Screen
                name="Tab2"
                component={MeteoNavigator}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="cloudy-night-outline" color={color} size={size} />
                    ),
                    title: 'METEO',
                    headerShown : false,
                    // headerStyle: {
                    //     backgroundColor: '#000000',
                    // },
                    // headerTintColor: '#fff',
                    // headerTitleStyle: {
                    //     fontWeight: 'bold',
                    // }
                }}
            />
            <Tab.Screen
                name="Tab3"
                component={ProfileNavigator}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="star" color={color} size={size} />
                    ),
                    title: 'PROFIL',
                    headerShown : false,
                    // headerStyle: {
                    //     backgroundColor: '#000000',
                    // },
                    // headerTintColor: '#fff',
                    // headerTitleStyle: {
                    //     fontWeight: 'bold',
                    // }
            }}
            />
            <Tab.Screen
                name="Tab4"
                component={TodoNavigator}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name="heart" color={color} size={size}/>
                    ),
                    title: 'Todo',
                    headerShown: false,
                    // headerStyle: {
                    //     backgroundColor: '#000000',
                    // },
                    // headerTintColor: '#fff',
                    // headerTitleStyle: {
                    //     fontWeight: 'bold',
                    // }
                }}
            />
        </Tab.Navigator>
    )
}