import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function HomeScreen() {
    return (
        <View>
            <Text style={styles.container}>Lương đã ứng trong tháng</Text>
            <Text style={{ fontSize: 18, fontStyle: 'normal', fontFamily: 'SF-Pro-Display-Black' }}>Lương đã ứng trong tháng</Text>
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
