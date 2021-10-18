import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import AllScreen from './AllScreen'
import OtherScreen from './OtherScreen'
import TransactionScreen from './TransactionScreen'
import SystemScreen from './SystemScreen'

function MyTabBar({ state, descriptors, navigation, position }) {
    return (
        <View style={styles.container}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacity
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={styles.btn}
                    >
                        <Text style={isFocused ? styles.textFocus : styles.text}>{label}</Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

export default function NotificationTab() {
    const Tab = createMaterialTopTabNavigator();
    return (
        <NavigationContainer independent={true}>
            <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
                <Tab.Screen name="Tất cả" component={AllScreen} />
                <Tab.Screen name="Giao dịch" component={TransactionScreen} />
                <Tab.Screen name="Hệ thống" component={SystemScreen} />
                <Tab.Screen name="Khác" component={OtherScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    btn: {
        paddingHorizontal: 21,
        // height: 43,
        justifyContent: 'center',
    },
    text: {
        fontFamily: 'SF-Pro-Display',
        fontStyle: 'normal',
        fontWeight: "normal",
        fontSize: 16,
        lineHeight: 19,
        color: '#666666',
        height: 43,
    },
    textFocus: {
        fontFamily: 'SF-Pro-Display',
        fontStyle: 'normal',
        fontWeight: "500",
        fontSize: 16,
        lineHeight: 19,
        color: '#000000',
        height: 43,
        borderBottomWidth: 5,
        borderBottomColor: '#E61226'

    }
})

