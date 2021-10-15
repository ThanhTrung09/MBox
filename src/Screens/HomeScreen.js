import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

export default function HomeScreen() {
    return (
        <View>
            <Text style={styles.container}>Lương đã ứng trong tháng</Text>
            <Icon name="rocket" size={40} color="#900" />
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
