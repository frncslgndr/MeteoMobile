import {Button, Text, View, TextInput} from "react-native";
import React, { useState, useEffect } from 'react';
import {GeoRequest} from "../../Api/GeoRequest";


export default function SearchScreen({ navigation }) {

    const [cityname, setCityname] = useState('');
    const [cities, setCities] = useState([]);

    async function fetchCities() {
        if(cityname.length < 3) {
            return
        }
        const geoRequest = new GeoRequest(cityname, 10);
        await geoRequest.getCities(setCities);
    }

    useEffect(() => {
        fetchCities();
    }, []);

    return (
        <View>
            <TextInput placeholder="Nom de votre ville" value={cityname} onChangeText={setCityname} />

            <Button title="Rechercher" onPress={fetchCities}
            />

            <View>
                {cities.length === 0 && <Text>Pas de data</Text>}

                {cities.map((item, index) => (
                    // <Text>{item.name}</Text>
                    <Button key={index} title={item.name}
                            onPress={
                                () => { navigation.push('Meteo', {'city': item.name, 'title': item.name}) }
                            }
                    />
                ))}
            </View>

        </View>
    );

}