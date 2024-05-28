import {useEffect, useState} from 'react';
import {Button, View, Text, Image, Dimensions, ScrollView, SafeAreaView} from 'react-native';
import MeteoStyle from "./MeteoStyle";
import {LineChart} from "react-native-chart-kit";
import {InfoClimatRequest} from "../../Api/InfoClimatRequest";
import CustomMeteoGraph from "./CustomMeteoGraph";


export default function MeteoScreen( { route }) {
    const city = route.params?.city;

    const [weather, setWeather] = useState([]);

    async function fetchWeather() {
        const infoClimat = new InfoClimatRequest(city.lat+','+city.lon);
        await infoClimat.send(setWeather);
    }

    useEffect(() => {
        fetchWeather();
    }, []);



    return (
        <SafeAreaView style={MeteoStyle.container}>
        <ScrollView>


            {/*<-- TEMPERATURES -->*/}
            <Text style={MeteoStyle.tempChart} >Températures</Text>
            { weather.length > 0 &&
            <LineChart
                data={{
                    labels: weather.map(w => w[0]),
                    datasets: [{data: weather.map(w => w[1].temperature['2m']).map(w => w - 273.5)}],
                }}
                height={220}
                width={Dimensions.get("window").width - 20} // from react-native
                //yAxisLabel="$"
                yAxisSuffix="°C"
                yAxisInterval={12} // optional, defaults to 1
                formatXLabel={(value) => {
                    if (/14:00:00$/.test(value)) {
                        const date = new Date(value);
                        const day = String(date.getDate()).padStart(2, '0');
                        const month = String(date.getMonth() + 1).padStart(2, '0');
                        return `${day}/${month}`;
                    }
                    return '';
                    }
                }
                chartConfig={{
                    backgroundColor: "#e26a00",
                    backgroundGradientFrom: "#ffbb67",
                    backgroundGradientTo: "#ea900c",
                    decimalPlaces: 0, // optional, defaults to 2dp
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
            /> }


            {/*<-- PRECIPITATIONS -->*/}
            <Text style={MeteoStyle.pluieChart} >Précipitations</Text>
            { weather.length > 0 &&
            <LineChart
                data={{
                    labels: weather.map(w => w[0]),
                    datasets: [{data: weather.map(w => w[1].pluie) }],
                }}
                height={220}
                width={Dimensions.get("window").width - 20} // from react-native
                //yAxisLabel="$"
                yAxisSuffix="mm"
                yAxisInterval={12} // optional, defaults to 1
                formatXLabel={(value) => {
                    if (/14:00:00$/.test(value)) {
                        const date = new Date(value);
                        const day = String(date.getDate()).padStart(2, '0');
                        const month = String(date.getMonth() + 1).padStart(2, '0');
                        return `${day}/${month}`;
                    }
                    return '';
                }
                }
                chartConfig={{
                    backgroundColor: "#005ae2",
                    backgroundGradientFrom: "#00b8fb",
                    backgroundGradientTo: "#0776d0",
                    decimalPlaces: 1, // optional, defaults to 2dp
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
            /> }

            {/*<-- PRESSION -->*/}
            <Text style={MeteoStyle.pressionChart} >Pression</Text>
            { weather.length > 0 &&
            <LineChart
                data={{
                    labels: weather.map(w => w[0]),
                    datasets: [{
                        data:
                          //  [0,0,1,0,0,0,0]
                          weather.map(w => w[1].pression['niveau_de_la_mer']).map(w => w /100)
                    }],
                }}
                height={220}
                width={Dimensions.get("window").width - 20} // from react-native
                //yAxisLabel="$"
                yAxisSuffix="hPa"
                yAxisInterval={12} // optional, defaults to 1
                formatXLabel={(value) => {
                    if (/14:00:00$/.test(value)) {
                        const date = new Date(value);
                        const day = String(date.getDate()).padStart(2, '0');
                        const month = String(date.getMonth() + 1).padStart(2, '0');
                        return `${day}/${month}`;
                    }
                    return '';
                }
                }
                chartConfig={{
                    backgroundColor: "#00e213",
                    backgroundGradientFrom: "#08fb00",
                    backgroundGradientTo: "#1b9d1d",
                    decimalPlaces: 0, // optional, defaults to 2dp
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
            />}

        </ScrollView>
        </SafeAreaView>
    );
}
