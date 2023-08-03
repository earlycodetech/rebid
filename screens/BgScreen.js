import { ImageBackground, View, Text, StyleSheet } from "react-native";

export function BgScreen(Navigate){
    return(
        <ImageBackground style={styles.bg} source={{uri:'https://images.unsplash.com/photo-1666609343638-7a6b47772d51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80'}} >
            <View style={styles.container}> 
                <Text style={styles.info}>My Design</Text>
            </View>

        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    bg:{
        flex:1,
    },
    container:{
        marginTop:120,
    },
    info:{
        color:'oldlace',
        fontSize:42,
        textAlign:'center',
    }
    
})