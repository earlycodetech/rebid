import { 
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Platform,
    StatusBar
} from "react-native";

export function Home() {
    console.log(Platform.OS)

    return (
        <SafeAreaView style={styles.wrapper}>
            <View>
                <Text style={{fontSize:38}}>Home Screen</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        marginTop:StatusBar.currentHeight
    }
})