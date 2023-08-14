import { View, StyleSheet, Text, SafeAreaView, Platform, StatusBar, TouchableOpacity } from "react-native";
import { faCartShopping, faGavel, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { theme } from "../config/theme";


export const Home = () => {
    return (
        <SafeAreaView style={styles.wrapper}>
            <View style={styles.constainer}>
                <View style={styles.header} >
                    <Text style={styles.brandName}>Rebid</Text>

                    <View style={styles.headerControls}>
                        <TouchableOpacity style={styles.sellCTA}>
                            <FontAwesomeIcon icon={faShoppingCart} color={theme.colors.dullRed1} size={40} />
                            <Text style={styles.sellCtaText}>Sell</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.mybidsCTA}>
                            <FontAwesomeIcon icon={faGavel} color={theme.colors.dullRed1} size={40} />
                            <Text style={styles.mybidsCtaText}>My bids</Text>
                        </TouchableOpacity>

                    </View>
                </View>
                <View style={styles.expiringBlock}>

                </View>
                <View style={styles.recentBlock}>

                </View>
                <View style={styles.categoriesBlock}>

                </View>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,

    },
    constainer: {
        flex: 1,
        paddingHorizontal: 8,

    },
    header: {
        flex: 1.5

    },
    brandName: {
        fontSize: 42,
        fontWeight: 'bold',
        color: theme.colors.dullRed1

    },
    headerControls: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    sellCTA: {
        height: 80,
        width: '49%',
        backgroundColor: theme.colors.navy,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 8,
        paddingHorizontal: 8,
    },
    sellCtaText: {
        fontSize: 32,
        color: theme.colors.dullRed1,

    },
    mybidsCtaText: {
        fontSize: 32,
        color: theme.colors.dullRed1,

    },
    mybidsCTA: {

        height: 80,
        width: '49%',
        backgroundColor: theme.colors.navy,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 8,
        paddingHorizontal: 8,
    },
    expiringBlock: {
        flex: 1.5
    },
    recentBlock: {
        flex: 1.5

    },
    categoriesBlock: {
        flex: 1.5

    },
})