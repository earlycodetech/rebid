import { ImageBackground,View,Text,StyleSheet } from "react-native";   

export function BgScreen() {
    return (
        <ImageBackground 
        source={{uri:'https://wallpapers.com/images/featured/mobile-58g8gv3r23zg29kw.jpg'}}
        style={styles.bg}>
            <View style={styles.container}>
                <Text style={styles.info}>My Design</Text>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    bg:{
        flex:1,
    },
    container:{
        marginTop:120
    },
    info:{
        color:'oldlace',
        fontSize:42,
        textAlign:'center'
    }
})