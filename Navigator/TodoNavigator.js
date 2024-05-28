import {createNativeStackNavigator} from "@react-navigation/native-stack";
import DetailsScreen from "../Screens/Home/DetailsScreen";
import ProfileScreen from "../Screens/Profile/ProfileScreen";
import TodoScreen from "../Screens/Todo/TodoScreen";

const Stack = createNativeStackNavigator();


export default function TodoNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="list"
                component={TodoScreen}
                options={{
                    title: 'La liste',
                    headerStyle: {
                        backgroundColor: '#8d1ef4',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    }}}
            />
        </Stack.Navigator>
    )
}