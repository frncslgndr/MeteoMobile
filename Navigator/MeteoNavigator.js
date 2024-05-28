import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "../Screens/Home/HomeScreen";
import DetailsScreen from "../Screens/Home/DetailsScreen";
import ProfileScreen from "../Screens/Profile/ProfileScreen";
import MeteoScreen from "../Screens/Meteo/MeteoScreen";
import SearchScreen from "../Screens/Meteo/SearchScreen";

const Stack = createNativeStackNavigator();


export default function HomeNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Search Meteo"
                component={SearchScreen}
                options={{
                    title: 'My Meteo',
                    headerStyle: {
                        backgroundColor: '#043850',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    }}}
            />

            <Stack.Screen
                name="Meteo"
                component={MeteoScreen}
                options={{
                    title: 'My Meteo',
                    headerStyle: {
                        backgroundColor: '#043850',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    }}}
            />

        </Stack.Navigator>
    )
}