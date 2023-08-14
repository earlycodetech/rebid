import { View, Text, ImageBackground, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { theme } from "../config/theme";
export const Starter = () => {
    return (
        <ImageBackground
            source={require('../assets/rebid_intro_bg.jpg')}
            style={styles.bg} >
            <View style={styles.container}>
                <View>
                    <Text style={styles.brandName}>Welcome to Rebid</Text>
                    <Text style={styles.subTitle}>Buy auctioned products, and create auctions on a go.</Text>
                </View>

                <Button mode="contained">Continue</Button>

            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    bg: {
        flex: 1,

    },
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'rgba(238,226,222,0.5)'

    },
    subTitle: {
        fontSize: 24,
        color: theme.colors.navy,
        textAlign: 'center',

    },
    brandName: {
        fontSize: 38,
        color: theme.colors.navy,
        fontWeight: 'bold',
        textAlign: 'center',
    }
})