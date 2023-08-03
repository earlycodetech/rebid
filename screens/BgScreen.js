import { ImageBackground,View,Text,StyleSheet } from "react-native";

export function BgScreen(){
    return(
        <ImageBackground source={{ uri:'https://images.pexels.com/photos/1699020/pexels-photo-1699020.jpeg' }} height={768}>
            <View>
                <Text>My Design</Text>
            </View>
        </ImageBackground>
    )
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
