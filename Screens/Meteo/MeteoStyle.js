import React from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';

const MeteoStyle = StyleSheet.create({
    container : {
        alignItems: 'center',
        flex: 1,
        paddingTop: 5,
    },

    temp : {
        textAlign: 'center',
        color: 'white',
        padding: 2,
        borderRadius: 16,
        backgroundColor: "#ff994e",
        marginTop: 2,
    },

    pluie : {
        textAlign: 'center',
        color: 'white',
        padding: 2,
        borderRadius: 16,
        backgroundColor: "#00b8fb",
        marginTop: 2,
    },

    pression : {
        textAlign: 'center',
        color: 'white',
        padding: 2,
        borderRadius: 16,
        backgroundColor: "#00e213",
        marginTop: 2,
    },

});

export default MeteoStyle;