import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Dimensions } from 'react-native'
import { createIconSetFromFontello } from 'react-native-vector-icons';
import fontelloConfig from '../../../assets/config.json';
const Icon = createIconSetFromFontello(fontelloConfig);


export default function AllScreen() {
    const { width, height } = Dimensions.get('window');
    return (
        <SafeAreaView style={{ height: height - 160 }}>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
                <View style={styles.box}>
                    <View style={styles.boxMain}>
                        <View style={styles.boxMainTitle}>
                            <View style={styles.customIcon1}>
                                <Icon name='dollar-1' size={16} color='white' />
                            </View>
                            <Text style={styles.boxMainText1}>Giao dịch</Text>
                            <Text style={styles.boxMainText2}>27/08</Text>
                        </View>
                        <View style={styles.crossBar}></View>
                        <Text style={styles.boxMainText3}>Ứng lương thành công</Text>
                        <Text style={styles.boxMainText4}>Giao dịch ứng 1.000.000đ của bạn đã được giải ngân thành công đến tài khoản ngân hàng của bạn.</Text>
                    </View>
                </View>

                <View style={styles.box}>
                    <View style={styles.boxMain}>
                        <View style={styles.boxMainTitle}>
                            <View style={styles.customIcon2}>
                                <Icon name='loading' size={16} color='white' />
                            </View>
                            <Text style={styles.boxMainText1}>Cập nhật ứng dụng</Text>
                            <Text style={styles.boxMainText2}>26/08</Text>
                        </View>
                        <View style={styles.crossBar}></View>
                        <Text style={styles.boxMainText3}>Đã có phiên bản mới 1.0.1</Text>
                        <Text style={styles.boxMainText4}>Hãy cập nhật phiên bản mới ngay để có thể trải nghiệm đầy đủ các tính năng của Mbox nhé.</Text>
                    </View>
                </View>

                <View style={styles.box}>
                    <View style={styles.boxMain}>
                        <View style={styles.boxMainTitle}>
                            <View style={styles.customIcon1}>
                                <Icon name='dollar-1' size={16} color='white' />
                            </View>
                            <Text style={styles.boxMainText1}>Giao dịch</Text>
                            <Text style={styles.boxMainText2}>27/08</Text>
                        </View>
                        <View style={styles.crossBar}></View>
                        <Text style={styles.boxMainText3}>Ứng trước kỳ hạn lương thành công</Text>
                        <Text style={styles.boxMainText4}>Giao dịch ứng trước kỳ hạn 10.000.000đ của bạn đã được giải ngân thành công đến tài khoản ngân hàng của bạn.</Text>
                    </View>
                </View>

                <View style={styles.box}>
                    <View style={styles.boxMain}>
                        <View style={styles.boxMainTitle}>
                            <View style={styles.customIcon3}>
                                <Icon name='settings' size={16} color='white' />
                            </View>
                            <Text style={styles.boxMainText1}>Hệ thống</Text>
                            <Text style={styles.boxMainText2}>20/08</Text>
                        </View>
                        <View style={styles.crossBar}></View>
                        <Text style={styles.boxMainText3}>Xác thực thông tin ngay</Text>
                        <Text style={styles.boxMainText4}>Bạn muốn tăng hạn mức nhận trước lương của mình? Hãy tiến hành xác thực thông tin cá nhân để được tăng tủ lệ ứng trước lương nhé</Text>
                    </View>
                </View>

                <View style={styles.box}>
                    <View style={styles.boxMain}>
                        <View style={styles.boxMainTitle}>
                            <View style={styles.customIcon1}>
                                <Icon name='dollar-1' size={16} color='white' />
                            </View>
                            <Text style={styles.boxMainText1}>Giao dịch</Text>
                            <Text style={styles.boxMainText2}>27/08</Text>
                        </View>
                        <View style={styles.crossBar}></View>
                        <Text style={styles.boxMainText3}>Ứng lương thành công</Text>
                        <Text style={styles.boxMainText4}>Giao dịch ứng 1.000.000đ của bạn đã được giải ngân thành công đến tài khoản ngân hàng của bạn.</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    box: {
        backgroundColor: '#ffffff',
        paddingHorizontal: 15,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#e9e9e9',
        marginBottom: 10,
        paddingBottom: 13
    },
    boxMainTitle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 9
    },
    customIcon1: {
        height: 24,
        width: 24,
        backgroundColor: '#0276C4',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    customIcon2: {
        height: 24,
        width: 24,
        backgroundColor: '#02A04D',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    customIcon3: {
        height: 24,
        width: 24,
        backgroundColor: '#FCB503',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },

    boxMainText1: {
        flex: 1,
        fontFamily: 'SF-Pro-Display',
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: 'normal',
        lineHeight: 17,
        color: '#000000',
        marginLeft: 9,
    },
    boxMainText2: {
        fontFamily: 'SF-Pro-Display',
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: 'normal',
        lineHeight: 17,
        color: '#828282',
    },
    crossBar: {
        height: 1,
        backgroundColor: '#EEF2F8',
        marginBottom: 9
    },
    boxMainText3: {
        fontFamily: 'SF-Pro-Display',
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: 19,
        color: '#000000',
        marginBottom: 6
    },
    boxMainText4: {
        fontFamily: 'SF-Pro-Display',
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: 'normal',
        lineHeight: 17,
        color: '#000000',
    }
})
