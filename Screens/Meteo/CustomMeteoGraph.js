import * as React from 'react';
import {Button, View, Text, Image, Dimensions} from 'react-native';
import MeteoStyle from "./MeteoStyle";
import {LineChart} from "react-native-chart-kit";

export default function CustomMeteoGraph({ weather }) {
    return (
        <>
        <Text style={MeteoStyle.tempChart} >Températures</Text>
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
        />
        </>
    );
}