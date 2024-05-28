import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "../Screens/HomeScreen";
import DetailsScreen from "../Screens/DetailsScreen";
import ProfileScreen from "../Screens/ProfileScreen";

const Stack = createNativeStackNavigator();


export default function StackNavigator() {
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
            <Stack.Screen
                name="ProfilePage"
                component={ProfileScreen}
                options={{
                    title: 'Profil',
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