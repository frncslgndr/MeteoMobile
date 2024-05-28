import {useEffect, useState} from 'react';
import {Button, View, Text, Image, Dimensions, ScrollView, SafeAreaView} from 'react-native';
import MeteoStyle from "./MeteoStyle";
import {LineChart} from "react-native-chart-kit";
import {InfoClimatRequest} from "../../Api/InfoClimatRequest";


export default function MeteoScreen( { route }) {
    const city = route.params?.city;

    const [weather, setWeather] = useState([0]);
    const [times, setTimes] = useState([0]);
    const [temperatures, setTemperatures] = useState([]);

    async function fetchWeather() {
        const infoClimat = new InfoClimatRequest();
        await infoClimat.send(setWeather);
    }

    const updateTimes = () => {
        const _times = weather.map(w => w[0])
        setTimes(_times);
    }

    const updateTemperatures = () => {
        const temps = weather.map(w => w[1].temperature['2m'])
        setTemperatures(temps);
    }

    useEffect(() => {
        fetchWeather();
        updateTimes();
        updateTemperatures();
    }, []);

    return (
        <SafeAreaView style={MeteoStyle.container}>
        <ScrollView style={MeteoStyle.vue}>

            {/*<-- TEMPERATURES -->*/}
            <Text style={MeteoStyle.temp} >Températures</Text>
            <LineChart
                data={{
                    labels: times,
                    datasets: [{data: temperatures}],
                }}
                height={220}
                width={Dimensions.get("window").width - 20} // from react-native
                yAxisLabel="$"
                yAxisSuffix="k"
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                    backgroundColor: "#e26a00",
                    backgroundGradientFrom: "#ffbb67",
                    backgroundGradientTo: "#ea900c",
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    style: {
                        borderRadius: 16
                    },
                    propsForDots: {
                        r: "5",
                        strokeWidth: "2",
                        stroke: "#ffa726"
                    }
                }}
                bezier
                style={{
                    marginVertical: 4,
                    marginBottom: 12,
                    borderRadius: 16
                }}
            />


            {/*<-- PRECIPITATIONS -->*/}
            <Text style={MeteoStyle.pluie} >Précipitations</Text>
            <LineChart
                data={{
                    labels: ["January", "February", "March", "April", "May", "June"],
                    datasets: [
                        {
                            data: [
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100
                            ]
                        }
                    ]
                }}
                height={220}
                width={Dimensions.get("window").width - 20} // from react-native
                yAxisLabel="$"
                yAxisSuffix="k"
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                    backgroundColor: "#005ae2",
                    backgroundGradientFrom: "#00b8fb",
                    backgroundGradientTo: "#0776d0",
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    style: {
                        borderRadius: 16
                    },
                    propsForDots: {
                        r: "5",
                        strokeWidth: "2",
                        stroke: "#00b8fb"
                    }
                }}
                bezier
                style={{
                    marginVertical: 4,
                    marginBottom: 12,
                    borderRadius: 16
                }}
            />

            {/*<-- PRESSION -->*/}
            <Text style={MeteoStyle.pression} >Pression</Text>
            <LineChart
                data={{
                    labels: ["January", "February", "March", "April", "May", "June"],
                    datasets: [
                        {
                            data: [
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100
                            ]
                        }
                    ]
                }}
                height={220}
                width={Dimensions.get("window").width - 20} // from react-native
                yAxisLabel="$"
                yAxisSuffix="k"
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                    backgroundColor: "#00e213",
                    backgroundGradientFrom: "#08fb00",
                    backgroundGradientTo: "#1b9d1d",
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    style: {
                        borderRadius: 16
                    },
                    propsForDots: {
                        r: "5",
                        strokeWidth: "2",
                        stroke: "#00e213"
                    }
                }}
                bezier
                style={{
                    marginVertical: 4,
                    marginBottom: 12,
                    borderRadius: 16
                }}
            />

        </ScrollView>
        </SafeAreaView>
    );
}
