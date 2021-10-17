import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import NotificationTab from '../components/NotificationTab/NotificationTab'

export default function NotificationScreen() {
    const header = () => {
        return (
            <View>
                <Text>aaa</Text>
            </View>
        )
    };


    return (
        // <header />
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Thông báo</Text>
            </View>
            <NotificationTab />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },
    header: {
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    headerText: {
        fontFamily: 'SF-Pro-Display',
        fontSize: 18,
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: 21,
        color: '#111111'
    }
})
