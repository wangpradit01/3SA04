import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import Forecast from './Forecast';

const apiKey = 'YOUR_API_KEY'

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: 'main',
        description: 'description',
        temp: 0,
    });

    useEffect(() => {
        // console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {

            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&unitsmetric&appid=6cecb9dd2e369d7e9b5d62bc682150d4`)
                .then((response) => response.json())
                .then((json) => {
                    // important
                    setForecastInfo({
                        main: json.weather[0].main,
                        description: json.weather[0].description,
                        temp: json.main.temp
                    });

                })
            .catch((error) => {
                console.warn(error);
            });
        }
    }, [props.zipCode])

    return (
        <View >
            <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
                <View style={styles.bg}>
                    <Text style={styles.small}>Zip Code {props.zipCode}</Text>
                    <Forecast {...forecastInfo} />
                </View>
            </ImageBackground>
        </View>
    );
}
const styles = StyleSheet.create({
    backdrop: {
        alignItems: 'center',
        width: '100%',
        height: '100%',

    },
    bg: {
        backgroundColor: 'black',
        width: '100%',
        opacity: 0.5,
        alignItems: 'center',
        paddingVertical: 40,
    },
    small: {
        color: 'white',
        fontSize: 15,
        marginBottom: 20
    },
    big: {
        color: 'white',
        fontSize: 32
    }
});