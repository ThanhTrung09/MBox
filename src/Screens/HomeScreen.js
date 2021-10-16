import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from '../../assets/config.json';
const Icon = createIconSetFromFontello(fontelloConfig);

export default function HomeScreen() {

    return (
        <View>
            <Text style={styles.container}>Lương đã ứng trong tháng</Text>
            <Icon name="eye-hide" size={40} color="#3FA1EA" />
            <Icon name="briefcase" size={40} color="#0276C4" />
            <Icon name="user" size={40} color="#0276C4" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        fontFamily: 'SF-Pro-Display',
        fontSize: 18,
        fontStyle: 'normal',
        lineHeight: 21,
        color: 'black'
    }
})
