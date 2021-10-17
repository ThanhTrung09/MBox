import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Dimensions } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from '../../assets/config.json';
const Icon = createIconSetFromFontello(fontelloConfig);

export default function HistoryScreen() {
    const { width, height } = Dimensions.get('window');

    return (
        <SafeAreaView style={{ backgroundColor: '#ffffff' }}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Lịch sử ứng lương</Text>
                </View>
                <ScrollView showsVerticalScrollIndicator={false} style={{ height: height - 80 }}>
                    {/* Chưa làm ra */}
                    <View style={{ backgroundColor: '#02A04D', height: 99, width: '100%', borderRadius: 20, marginBottom: 17, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.headerText1}>Đã ứng trong kỳ</Text>
                        <Text style={styles.headerText2}>5.000.000 đ</Text>
                    </View>
                    {/* ... */}

                    <View style={styles.body}>
                        <Text style={styles.bodyTitle}>08/2021</Text>
                        <View style={styles.bodyMain}>
                            <View style={styles.bodyBox}>
                                <View style={styles.boxIcon1}>
                                    <Icon name='coin' size={20} color='white' />
                                </View>
                                <View style={styles.bodyBoxText}>
                                    <Text style={styles.bodyBoxText1}>Ứng 1.000.000 đ</Text>
                                    <Text style={styles.bodyBoxText2}>Đã giải ngân - 10:56 27/08/2021</Text>
                                </View>
                                <FontAwesome name="angle-right" size={25} />
                            </View>
                            <View style={{ backgroundColor: '#eef2f8', height: 1 }}></View>

                            <View style={styles.bodyBox}>
                                <View style={styles.boxIcon2}>
                                    <Icon name='coin' size={20} color='white' />
                                </View>
                                <View style={styles.bodyBoxText}>
                                    <Text style={styles.bodyBoxText1}>Ứng 1.000.000 đ</Text>
                                    <Text style={styles.bodyBoxText2}>Đã giải ngân - 10:56 27/08/2021</Text>
                                </View>
                                <FontAwesome name="angle-right" size={25} />
                            </View>
                            <View style={{ backgroundColor: '#eef2f8', height: 1 }}></View>

                            <View style={styles.bodyBox}>
                                <View style={styles.boxIcon3}>
                                    <Icon name='coin' size={20} color='white' />
                                </View>
                                <View style={styles.bodyBoxText}>
                                    <Text style={styles.bodyBoxText1}>Ứng trước kỳ hạn 2.000.000 đ</Text>
                                    <Text style={styles.bodyBoxText2}>Đã giải ngân - 10:56 27/08/2021</Text>
                                </View>
                                <FontAwesome name="angle-right" size={25} />
                            </View>
                            <View style={{ backgroundColor: '#eef2f8', height: 1 }}></View>

                            <View style={styles.bodyBox}>
                                <View style={styles.boxIcon4}>
                                    <Icon name='coin' size={20} color='white' />
                                </View>
                                <View style={styles.bodyBoxText}>
                                    <Text style={styles.bodyBoxText1}>Ứng trước kỳ hạn 2.000.000 đ</Text>
                                    <Text style={styles.bodyBoxText2}>Đã giải ngân - 10:56 27/08/2021</Text>
                                </View>
                                <FontAwesome name="angle-right" size={25} />
                            </View>
                            <View style={{ backgroundColor: '#eef2f8', height: 1 }}></View>
                        </View>

                        <Text style={styles.bodyTitle}>07/2021</Text>

                        <View style={styles.bodyMain}>
                            <View style={styles.bodyBox}>
                                <View style={styles.boxIcon1}>
                                    <Icon name='coin' size={20} color='white' />
                                </View>
                                <View style={styles.bodyBoxText}>
                                    <Text style={styles.bodyBoxText1}>Ứng 1.000.000 đ</Text>
                                    <Text style={styles.bodyBoxText2}>Đã giải ngân - 10:56 27/08/2021</Text>
                                </View>
                                <FontAwesome name="angle-right" size={25} />
                            </View>
                            <View style={{ backgroundColor: '#eef2f8', height: 1 }}></View>

                            <View style={styles.bodyBox}>
                                <View style={styles.boxIcon2}>
                                    <Icon name='coin' size={20} color='white' />
                                </View>
                                <View style={styles.bodyBoxText}>
                                    <Text style={styles.bodyBoxText1}>Ứng 1.000.000 đ</Text>
                                    <Text style={styles.bodyBoxText2}>Đã giải ngân - 10:56 27/08/2021</Text>
                                </View>
                                <FontAwesome name="angle-right" size={25} />
                            </View>
                            <View style={{ backgroundColor: '#eef2f8', height: 1 }}></View>

                            <View style={styles.bodyBox}>
                                <View style={styles.boxIcon3}>
                                    <Icon name='coin' size={20} color='white' />
                                </View>
                                <View style={styles.bodyBoxText}>
                                    <Text style={styles.bodyBoxText1}>Ứng trước kỳ hạn 2.000.000 đ</Text>
                                    <Text style={styles.bodyBoxText2}>Đã giải ngân - 10:56 27/08/2021</Text>
                                </View>
                                <FontAwesome name="angle-right" size={25} />
                            </View>
                            <View style={{ backgroundColor: '#eef2f8', height: 1 }}></View>

                            <View style={styles.bodyBox}>
                                <View style={styles.boxIcon4}>
                                    <Icon name='coin' size={20} color='white' />
                                </View>
                                <View style={styles.bodyBoxText}>
                                    <Text style={styles.bodyBoxText1}>Ứng trước kỳ hạn 2.000.000 đ</Text>
                                    <Text style={styles.bodyBoxText2}>Đã giải ngân - 10:56 27/08/2021</Text>
                                </View>
                                <FontAwesome name="angle-right" size={25} />
                            </View>
                            <View style={{ backgroundColor: '#eef2f8', height: 1 }}></View>
                        </View>

                    </View>
                </ScrollView>
            </View>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 19
    },
    header: {
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5
    },
    headerTitle: {
        fontFamily: 'SF-Pro-Display',
        fontSize: 18,
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: 21.48,
        color: '#111111'
    },
    headerText1: {
        fontFamily: 'SF-Pro-Display',
        fontSize: 14,
        lineHeight: 17,
        fontStyle: 'normal',
        fontWeight: 'normal',
        color: '#ffffff',
        marginBottom: 7
    },
    headerText2: {
        fontFamily: 'SF-Pro-Display',
        fontSize: 25,
        lineHeight: 29,
        fontStyle: 'normal',
        fontWeight: '600',
        color: '#ffffff',
    },
    bodyBox: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    boxIcon1: {
        height: 44,
        width: 44,
        backgroundColor: '#E61226',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
    },
    boxIcon2: {
        height: 44,
        width: 44,
        backgroundColor: '#02A04D',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
    },
    boxIcon3: {
        height: 44,
        width: 44,
        backgroundColor: '#0276C4',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
    },
    boxIcon4: {
        height: 44,
        width: 44,
        backgroundColor: '#FCB503',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
    },
    bodyBoxText: {
        flex: 1,
    },
    bodyBoxText1: {
        fontFamily: 'SF-Pro-Display',
        fontSize: 16,
        fontWeight: 'normal',
        lineHeight: 19,
        color: 'black'
    },
    bodyBoxText2: {
        marginTop: 4,
        fontFamily: 'SF-Pro-Display',
        fontSize: 14,
        fontWeight: 'normal',
        lineHeight: 17,
        color: '#717E95'
    },
    bodyMain: {
        paddingVertical: 20,
        height: 356,
        justifyContent: 'space-between',
    },
    bodyTitle: {
        fontFamily: 'SF-Pro-Display',
        fontSize: 16,
        fontStyle: 'normal',
        lineHeight: 19.09,
        color: '#717E95'
    }
})
