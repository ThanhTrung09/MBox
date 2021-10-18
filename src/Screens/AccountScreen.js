import React from 'react'
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, Dimensions, TouchableOpacity } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from '../../assets/config.json';
const Icon = createIconSetFromFontello(fontelloConfig);

import Circle from '../Images/Circle.svg'
import Circle2 from '../Images/Circle-2.svg'
import { useIsFocused } from '@react-navigation/core';

export default function AccountScreen() {
    const { width, height } = Dimensions.get('window');

    const Header = () => {
        return (
            <View style={styles.header}>
                <Image
                    style={styles.Image}
                    source={require('../Images/userColor.png')}
                />
                <View style={styles.headerTitle}>
                    <Text style={styles.headerText1}>Hoàng Văn Nhất</Text>
                    <Text style={styles.headerText2}>03515658425</Text>
                    <Text style={styles.headerText2}>Chưa xác thực thông tin các nhân</Text>
                </View>
                <FontAwesome name="angle-right" size={25} color='#333333' />
            </View>
        )
    }

    return (
        <SafeAreaView style={{ height: height - 65 }}>
            <Header />
            <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
                <View style={styles.upperBox}>
                    <View style={styles.upperTitle}>
                        <Text style={styles.upperText}>Bạn muốn tăng hạn mức ứng trước lương?</Text>
                    </View>
                    <View style={styles.upperBoxIcon}>
                        <Icon name='card-id' size={24} color='#02A04D' />
                        <Icon name='check-face' size={24} color='#9DC9E7' />
                        <Icon name='protect' size={24} color='#9DC9E7' />
                    </View>
                    <View>
                        <View style={{ backgroundColor: '#ECF7FB', height: 4, marginHorizontal: 29, position: 'relative' }}></View>
                        <View style={styles.iconCircle1}>
                            <Circle width="19" height="19" />
                        </View>
                        <View style={styles.iconCircle2}>
                            <Circle2 width="19" height="19" />
                        </View>
                        <View style={styles.iconCircle3}>
                            <Circle2 width="19" height="19" />
                        </View>
                    </View>
                    <View style={styles.upperBoxTitle}>
                        <Text style={styles.upperBoxText}>Chụp hình CMND</Text>
                        <Text style={styles.upperBoxText}>Xác thực khuôn mặt</Text>
                        <Text style={styles.upperBoxText}>Bảo mật tối đa</Text>
                    </View>
                    <TouchableOpacity style={styles.upperBoxBtn}>
                        <Text style={styles.upperBtnText}>Xác thực thông tin ngay</Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.BoxTitle}>Thông tin chung</Text>
                <View style={styles.boxInfo}>
                    <View style={styles.boxInfoTitle}>
                        <Text style={styles.boxText}>Thông tin các nhân</Text>
                        <FontAwesome name="angle-right" size={25} color='#333333' />
                    </View>
                    <View style={styles.crossBar}></View>
                    <View style={styles.boxInfoTitle}>
                        <Text style={styles.boxText}>Thông tin công ty</Text>
                        <FontAwesome name="angle-right" size={25} color='#333333' />
                    </View>
                </View>

                <Text style={styles.BoxTitle}>Bảo mật tài khoản</Text>
                <View style={styles.boxSecure}>
                    <View style={styles.boxSecureTitle}>
                        <Text style={styles.boxText}>Đổi mật khẩu</Text>
                        <FontAwesome name="angle-right" size={25} color='#333333' />
                    </View>
                    <View style={styles.crossBar}></View>
                    <View style={styles.boxSecureTitle}>
                        <Text style={styles.boxText}>Xác thực vân tay</Text>
                        <TouchableOpacity style={styles.swipeFocus}>
                            <View style={styles.swipeBtnFocus}></View>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.boxText2}>Lưu ý: Tất cả các vân tay đã được đăng ký trong thiết bị đều có thể xác thực</Text>
                </View>

                <Text style={styles.BoxTitle}>Thông tin khác</Text>
                <View style={styles.boxOtherInfo}>
                    <View style={styles.boxSecureTitle}>
                        <Text style={styles.boxText}>Chính sác bảo mật</Text>
                        <FontAwesome name="angle-right" size={25} color='#333333' />
                    </View>
                    <View style={styles.crossBar}></View>
                    <View style={styles.boxSecureTitle}>
                        <Text style={styles.boxText}>Điều khoản sử dụng</Text>
                        <FontAwesome name="angle-right" size={25} color='#333333' />
                    </View>
                    <View style={styles.crossBar}></View>
                    <View style={styles.boxSecureTitle}>
                        <Text style={styles.boxText}>Chuyển công ty</Text>
                        <FontAwesome name="angle-right" size={25} color='#333333' />
                    </View>
                    <View style={styles.crossBar}></View>
                    <View style={styles.boxSecureTitle}>
                        <Text style={styles.boxText}>Đăng xuất</Text>
                        <FontAwesome name="angle-right" size={25} color='#333333' />
                    </View>
                </View>

                <View style={styles.footer}>
                    <Text style={styles.footerText}>Phiên bản ứng dụng: 1.0.0</Text>
                </View>
            </ScrollView>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 21,
        marginHorizontal: 19,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 87,
        backgroundColor: '#fff',
        paddingHorizontal: 19
    },
    Image: {
        // height: 62,
        // width: 62,
        marginRight: 18
    },
    headerTitle: {
        flex: 1,
        height: '100%',
        justifyContent: 'space-evenly'
    },
    headerText1: {
        fontFamily: 'SF-Pro-Display',
        fontSize: 20,
        lineHeight: 20,
        fontWeight: '600',
        color: '#111',
        paddingTop: 6,
    },
    headerText2: {
        fontFamily: 'SF-Pro-Display',
        fontSize: 14,
        lineHeight: 14,
        fontWeight: '500',
        color: '#717E95',
    },
    upperBox: {
        height: 244,
        backgroundColor: '#ffffff',
        borderRadius: 8,
        justifyContent: 'space-evenly',
    },
    upperBoxIcon: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 24
    },
    iconCircle1: {
        position: 'absolute',
        left: 26,
        top: -8,
    },
    iconCircle2: {
        position: 'absolute',
        left: 168,
        top: -8,
    },
    iconCircle3: {
        position: 'absolute',
        right: 26,
        top: -8,
    },
    upperBoxTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    upperBoxText: {
        fontFamily: 'SF-Pro-Display',
        fontSize: 11,
        lineHeight: 13.13,
        color: '#828282',
    },
    upperBoxBtn: {
        height: 44,
        backgroundColor: '#0276C4',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 15
    },
    upperBtnText: {
        fontFamily: 'SF-Pro-Display',
        fontSize: 16,
        lineHeight: 19,
        color: '#fff',
    },
    upperTitle: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    upperText: {
        fontFamily: 'SF-Pro-Display',
        fontSize: 16,
        lineHeight: 19,
        color: '#000',
    },

    boxInfo: {
        height: 88,
        backgroundColor: '#fff',
        borderRadius: 8,
        justifyContent: 'space-evenly',
    },
    boxInfoTitle: {
        flexDirection: 'row',
        paddingLeft: 12,
        paddingRight: 17,
        justifyContent: 'center',
        alignItems: 'center'
    },
    boxText: {
        flex: 1,
        fontFamily: 'SF-Pro-Display',
        fontSize: 16,
        lineHeight: 19,
        fontWeight: 'normal',
        color: '#000000',
    },
    crossBar: {
        height: 1,
        backgroundColor: '#EEF2F8'
    },
    BoxTitle: {
        marginTop: 27,
        marginBottom: 13,
        marginLeft: 8,
        fontFamily: 'SF-Pro-Display',
        fontSize: 18,
        lineHeight: 21,
        fontWeight: 'bold',
        color: '#000000',
    },

    boxSecure: {
        height: 140,
        backgroundColor: '#fff',
        borderRadius: 8,
        justifyContent: 'space-evenly',
    },
    boxSecureTitle: {
        flexDirection: 'row',
        paddingLeft: 12,
        paddingRight: 17,
        justifyContent: 'center',
        alignItems: 'center'
    },
    boxText2: {
        fontFamily: 'SF-Pro-Display',
        fontSize: 12,
        lineHeight: 16,
        fontWeight: 'normal',
        color: '#4F4F4F',
        paddingLeft: 12,
        paddingRight: 17
    },

    boxOtherInfo: {
        height: 176,
        backgroundColor: '#fff',
        borderRadius: 8,
        justifyContent: 'space-evenly',
    },

    footer: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footerText: {
        fontFamily: 'SF-Pro-Display',
        fontSize: 12,
        lineHeight: 14,
        fontWeight: 'normal',
        color: '#4F4F4F',
    },
    swipeFocus: {
        height: 31,
        width: 51,
        backgroundColor: '#3FA1EA',
        borderTopEndRadius: 15,
        borderTopStartRadius: 15,
        borderBottomStartRadius: 15,
        borderBottomEndRadius: 15
    },
    // swipe: {
    //     height: 31,
    //     width: 51,
    //     backgroundColor: '#e5e5e5',
    //     borderTopEndRadius: 15,
    //     borderTopStartRadius: 15,
    //     borderBottomStartRadius: 15,
    //     borderBottomEndRadius: 15
    // },
    swipeBtnFocus: {
        height: 27,
        width: 27,
        backgroundColor: '#fff',
        borderRadius: 27 / 2,
        position: 'absolute',
        right: 3,
        top: 2
    },
    // swipeBtn: {
    //     height: 27,
    //     width: 27,
    //     backgroundColor: '#fff',
    //     borderRadius: 27 / 2,
    //     position: 'absolute',
    //     left: 3,
    //     top: 2
    // }
})
