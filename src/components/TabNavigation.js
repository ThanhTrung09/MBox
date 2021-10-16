import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../Screens/HomeScreen';
import HistoryScreen from '../Screens/HistoryScreen';
import NotificationScreen from '../Screens/NotificationScreen';
import AccountScreen from '../Screens/AccountScreen';

import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from '../../assets/config.json';
const Icon = createIconSetFromFontello(fontelloConfig);

function MyTabBar({ state, descriptors, navigation }) {

    const itemIcons = () => {
        if (label === "Home") {
            return <Icon name="home" size={18} />
        }
        else if (label === "History") {
            return <Icon name="list" size={18} />
        }
        else if (label === "Notification") {
            return <Icon name="bell" size={18} />
        }
        else if (label === "Account") {
            return <Icon name="user" size={18} />
        }
    }

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
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        // The `merge: true` option makes sure that the params inside the tab screen are preserved
                        navigation.navigate({ name: route.name, merge: true });
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
                        style={isFocused ? styles.btnFocus : styles.btn}
                    >
                        <Icon name='home' size={20} color={isFocused ? '#479FDD' : 'black'} />
                        {/* <itemIcons /> */}
                        {isFocused && <Text style={styles.text}>
                            {label}
                        </Text>}
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
                <Tab.Screen name="Mbox" component={HomeScreen} />
                <Tab.Screen name="Lịch sử" component={HistoryScreen} />
                <Tab.Screen name="Thông báo" component={NotificationScreen} />
                <Tab.Screen name="Tài khoản" component={AccountScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        height: 64,
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 19
    },
    btn: {
        alignContent: 'center',
        padding: 5
    },
    btnFocus: {
        alignContent: 'center',
        padding: 5,
        backgroundColor: '#E8F7FB',
        flexDirection: 'row',
        borderRadius: 30,
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 6,
        paddingHorizontal: 15,
    },
    text: {
        fontFamily: 'SF-Pro-Family',
        fontSize: 15,
        fontStyle: 'normal',
        fontWeight: '500',
        color: '#479FDD',
        marginLeft: 8

    }
})
