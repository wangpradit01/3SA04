import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Forecast(props) {
    return (
        <View style={styles.center}>
            <Text style={styles.big}>{props.main}</Text>
            <Text style={styles.small}>{props.description}</Text>
            <View style={styles.big}>
                <Text style={styles.big}>{props.temp} <Text style={styles.small}>°C</Text></Text>
            </View>
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
        alignItems: 'center',
        fontSize: 15,
        marginBottom: 20
    },
    big: {
        color: 'white',
        alignItems: 'center',
        fontSize: 32,
        marginBottom: 20
    },
    center: {
        alignItems: 'center'
    }
});