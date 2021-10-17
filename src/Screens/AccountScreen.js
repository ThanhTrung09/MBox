import React from 'react'
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, Dimensions } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

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
                    {/* Chua Lam */}
                </View>

                <Text style={styles.upperBoxTitle}>Thông tin chung</Text>
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

                <Text style={styles.upperBoxTitle}>Bảo mật tài khoản</Text>
                <View style={styles.boxSecure}>
                    <View style={styles.boxSecureTitle}>
                        <Text style={styles.boxText}>Đổi mật khẩu</Text>
                        <FontAwesome name="angle-right" size={25} color='#333333' />
                    </View>
                    <View style={styles.crossBar}></View>
                    <View style={styles.boxSecureTitle}>
                        <Text style={styles.boxText}>Xác thực vân tay</Text>
                        <FontAwesome name="angle-right" size={25} color='#333333' />
                    </View>
                    <Text style={styles.boxText2}>Lưu ý: Tất cả các vân tay đã được đăng ký trong thiết bị đều có thể xác thực</Text>
                </View>

                <Text style={styles.upperBoxTitle}>Thông tin khác</Text>
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
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 21,
        marginHorizontal: 19,
        // height: height - 180,
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
        borderRadius: 8
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
    upperBoxTitle: {
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
    }
})
