import * as React from 'react';
import {Button, View, Text, Image, RefreshControl, ScrollView, SafeAreaView} from 'react-native';
import {useEffect, useState} from "react";
import {AsyncStorageManager} from "../../Utils/AsyncStorageManager";

export default function ProfileScreen({ navigation }) {

    const [favorites, setFavorites] = useState({});
    const [reload, setReload] = useState(false);
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);

    const removeAll = async () => {
        try {
            await AsyncStorageManager.removeItem('favorites')
            setReload(!reload);
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        async function fetchFavorites() {
            const favorites = await AsyncStorageManager.getItem('favorites');
            setFavorites(favorites);
        }

        fetchFavorites();

    }, [reload]);

    return (
            <ScrollView
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                    <Text>Vos favoris</Text>

                    { favorites !== null && favorites.length > 0 && favorites.map(
                        (f) => <Button key={f.name} title={f.name} onPress={ () => { navigation.navigate('Tab2', { screen: 'Meteo', params: { city: f } }); } } />
                    )}

                    <Button title="Supprimer Tout" onPress={ () => { removeAll(); } } />
                </View>
            </ScrollView>

    );
}

