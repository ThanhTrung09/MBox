import React from 'react'
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from '../../assets/config.json';
const Icon = createIconSetFromFontello(fontelloConfig);

export default function HomeScreen() {

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.main}>
                    <View style={styles.header}>
                        <View style={styles.headerContent}>
                            <Text style={styles.headerText1}>Xin chào</Text>
                            <Text style={styles.headerText2}>Hoàng Văn Nhất</Text>
                        </View>
                        <Image
                            style={styles.userIamge}
                            source={require('../Images/user.jpg')}
                        />
                    </View>
                    <View style={styles.body}>
                        <View style={styles.bodyBox}>
                            <View style={styles.bodyBoxTop}>
                                <View style={styles.boxTopText}>
                                    <Text style={styles.boxTopText1}>Ngày công tích lũy</Text>
                                    <Icon name='question-mark' size={14} color='#3FA1EA' />
                                </View>
                                <Text style={styles.boxTopText2}>15.0/22.5</Text>
                            </View>
                            <View style={styles.crossBar1}></View>
                            <View style={styles.crossBar2}></View>

                            <View style={styles.bodyBoxBetween}>
                                <View style={styles.boxBetweenTitle1}>
                                    <View style={styles.boxBetweenContent}>
                                        <Text style={styles.boxBetweenText}>Thu nhập ước tính</Text>
                                        <Icon name='eye-hide' size={14} color='#3FA1EA' />
                                    </View>
                                    <Text style={styles.boxBetweenNumber}>15.000.000</Text>
                                </View>
                                <View style={styles.boxBetweenTitle2}>
                                    <View style={styles.boxBetweenContent}>
                                        <Text style={styles.boxBetweenText}> Có thể ứng trước</Text>
                                        <Icon name='question-mark' size={14} color='#3FA1EA' />
                                    </View>
                                    <Text style={styles.boxBetweenNumber}>5.000.000</Text>
                                </View>
                            </View>

                            <TouchableOpacity style={styles.bodyBoxDown}>
                                <Text style={styles.boxDownText}>Ứng lương ngay</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.bodyBox2}>
                            <TouchableOpacity style={styles.box2Title1}>
                                <Icon name='briefcase' size={32} color='white' />
                                <Text style={styles.box2Text}>Chấm công</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.box2Title2}>
                                <Icon name='calendar' size={32} color='white' />
                                <Text style={styles.box2Text}>Bảng công</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.box2Title3}>
                                <Icon name='dollar' size={32} color='white' />
                                <Text style={styles.box2Text}>Ước tính {"\n"} kỳ hạn</Text>
                            </TouchableOpacity>
                        </View>

                    </View>

                    <View style={styles.end}>
                        <Text style={styles.endText}>Lương đã ứng trong tháng</Text>
                        <View style={styles.endBox}>
                            <View style={styles.endBoxTitle}>
                                <View style={styles.boxIcon1}>
                                    <Icon name='coin' size={20} color='white' />
                                </View>
                                <View style={styles.endBoxText}>
                                    <Text style={styles.endBoxText1}>Ứng 1.000.000 đ</Text>
                                    <Text style={styles.endBoxText2}>Đã giải ngân - 10:56 27/08/2021</Text>
                                </View>
                                <FontAwesome name="angle-right" size={25} />
                            </View>
                            <View style={{ backgroundColor: '#eef2f8', height: 1 }}></View>
                            <View style={styles.endBoxTitle}>
                                <View style={styles.boxIcon2}>
                                    <Icon name='coin' size={20} color='white' />
                                </View>
                                <View style={styles.endBoxText}>
                                    <Text style={styles.endBoxText1}>Ứng trước kỳ hạn 2.000.000 đ</Text>
                                    <Text style={styles.endBoxText2}>Đã giải ngân - 10:56 27/08/2021</Text>
                                </View>
                                <FontAwesome name="angle-right" size={25} />
                            </View>
                        </View>
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        fontFamily: 'SF-Pro-Display',
        backgroundColor: '#ffffff',
    },
    main: {
        margin: 18
    },
    header: {
        flexDirection: 'row',
    },
    headerContent: {
        flex: 1
    },
    headerText1: {
        color: 'black',
        fontFamily: 'SF-Pro-Display',
        fontSize: 16
    },
    headerText2: {
        color: 'black',
        fontFamily: 'SF-Pro-Display',
        fontSize: 22,
        fontWeight: 'bold',
    },
    bodyBoxTop: {
        flexDirection: 'row',
        paddingBottom: 14,
        borderBottomWidth: 10,
        borderBottomColor: "#ECF7FB",
        borderBottomEndRadius: 5,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        borderBottomStartRadius: 5
    },
    boxTopText: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',

    },
    boxTopText1: {
        fontFamily: 'SF-Pro-Display',
        fontSize: 12,
        color: 'black',
        marginRight: 4
    },
    boxTopText2: {
        fontFamily: 'SF-Pro-Display',
        fontSize: 16,
        color: 'black',
        fontWeight: '600',
    },
    crossBar1: {
        backgroundColor: '#0276C4',
        height: 10,
        width: 198,
        borderRadius: 5,
        position: 'absolute',
        top: 60,
        left: 16
    },
    crossBar2: {
        marginTop: 22,
        backgroundColor: '#e5e5e5',
        width: '100%',
        height: 2,
        borderRadius: 1.5
    },
    boxBetweenContent: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    bodyBoxBetween: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginVertical: 19
    },
    boxBetweenTitle1: {
        marginRight: 41,
    },
    boxBetweenText: {
        fontFamily: 'SF-Pro-Display',
        fontSize: 11,
        fontWeight: '400',
        lineHeight: 13,
        color: 'black',
        marginRight: 8
    },
    boxBetweenNumber: {
        fontFamily: 'SF-Pro-Display',
        fontSize: 24,
        fontWeight: 'bold',
        lineHeight: 29,
        color: 'black',
        marginTop: 8
    },
    boxDownText: {
        fontFamily: 'SF-Pro-Display',
        fontSize: 16,
        fontWeight: '600',
        lineHeight: 19,
        color: 'white',
    },
    bodyBoxDown: {
        height: 44,
        backgroundColor: '#0276c4',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bodyBox: {
        height: 260,
        padding: 16,
        marginTop: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    bodyBox2: {
        flexDirection: 'row',
        marginTop: 23,
        justifyContent: 'space-around',
    },
    box2Title1: {
        height: 114,
        width: 107,
        backgroundColor: '#E61226',
        borderRadius: 20,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    box2Title2: {
        height: 114,
        width: 107,
        backgroundColor: '#02A04D',
        borderRadius: 20,
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    box2Title3: {
        height: 114,
        width: 107,
        backgroundColor: '#FCB503',
        borderRadius: 20,
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    box2Text: {
        color: 'white',
        fontFamily: 'SF-Pro-Display',
        fontWeight: 'bold',
        lineHeight: 19,
        fontSize: 16,
    },
    end: {
        marginTop: 23
    },
    endBox: {
        marginTop: 7,
        padding: 20,
        height: 168,
        borderWidth: 1,
        borderColor: '#e9e9e9',
        borderRadius: 16,
        justifyContent: 'space-between',
    },
    endBoxTitle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    boxIcon1: {
        height: 44,
        width: 44,
        backgroundColor: '#0276C4',
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
    endText: {
        fontFamily: 'SF-Pro-Display',
        fontSize: 18,
        fontWeight: 'bold',
        lineHeight: 21,
        color: '#1C1939'
    },
    endBoxText: {
        flex: 1
    },
    endBoxText1: {
        fontFamily: 'SF-Pro-Display',
        fontSize: 16,
        fontWeight: 'normal',
        lineHeight: 19,
        color: 'black'
    },
    endBoxText2: {
        marginTop: 4,
        fontFamily: 'SF-Pro-Display',
        fontSize: 14,
        fontWeight: 'normal',
        lineHeight: 17,
        color: '#717E95'
    }


})
