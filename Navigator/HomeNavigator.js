import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "../Screens/Home/HomeScreen";
import DetailsScreen from "../Screens/Home/DetailsScreen";


const Stack = createNativeStackNavigator();


export default function HomeNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="HomePage"
                component={HomeScreen}
                options={{
                    title: 'Home Sweet home',
                    headerStyle: {
                        backgroundColor: '#f41e1e',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    }}}
            />
            <Stack.Screen
                name="DetailPage"
                component={DetailsScreen}
                options={{
                    title: 'Home Sweet Swwet home',
                    headerStyle: {
                        backgroundColor: '#1e82f4',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    }}}


            />
        </Stack.Navigator>
    )
}