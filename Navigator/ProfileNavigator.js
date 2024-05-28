import {createNativeStackNavigator} from "@react-navigation/native-stack";

import ProfileScreen from "../Screens/Profile/ProfileScreen";


const Stack = createNativeStackNavigator();


export default function ProfileNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Mon Profil"
                component={ProfileScreen}
                options={{
                    title: 'Profile',
                    headerStyle: {
                        backgroundColor: '#adf41e',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    }}}
            />
        </Stack.Navigator>
    )
}