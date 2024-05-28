import {createNativeStackNavigator} from "@react-navigation/native-stack";
import DetailsScreen from "../Screens/Home/DetailsScreen";
import ProfileScreen from "../Screens/Profile/ProfileScreen";

const Stack = createNativeStackNavigator();


export default function ProfileNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Mon Profile"
                component={ProfileScreen}
                options={{
                    title: 'Profile',
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