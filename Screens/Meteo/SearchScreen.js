import {Button, Text, View, TextInput} from "react-native";
import React, { useState, useEffect } from 'react';
import {GeoRequest} from "../../Api/GeoRequest";
import * as Location from 'expo-location';
import {AsyncStorageManager} from "../../Utils/AsyncStorageManager";


export default function SearchScreen({ navigation }) {

    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    const [cityname, setCityname] = useState('');
    const [cities, setCities] = useState([]);

    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        async function fetchFavorites() {
            const favorites = await AsyncStorageManager.getItem('favorites');
            setFavorites(favorites);
        }

        fetchFavorites();

    }, []);


    async function fetchCities() {
        if(cityname.length < 3) {
            return
        }
        const geoRequest = new GeoRequest(cityname, 10);
        await geoRequest.getCities(setCities);
    }

    async function localizeUser() {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
        }
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location)
        navigation.push('Meteo', {'city': {'lat': location["coords"]["latitude"], 'lon': location["coords"]["longitude"]}})
    }

    useEffect(() => {
        fetchCities();
    }, []);

    return (
        <View>
            <TextInput placeholder="Nom de votre ville" value={cityname} onChangeText={setCityname} />

            <Button title="Rechercher" onPress={fetchCities} />

            <View>
                {cities.length === 0 && <Text>Pas de data</Text>}

                {cities.map((item, index) => (
                    // <Text>{item.name}</Text>
                    <Button key={index} title={item.name}
                            onPress={
                                () => { navigation.push('Meteo', {'city': item, 'title': item.name}) }
                            }
                    />
                ))}

                <Text>Favoris</Text>
                { favorites !== null && favorites.length > 0 && favorites.map(
                    (f) => <Button key={f.name} title={f.name} onPress={ () => { navigation.push('Meteo', {'city': f}) } } />
                )}


                <Text>Autre</Text>
                <Button title="Utiliser ma localisation" onPress={localizeUser} />
            </View>

        </View>
    );

}