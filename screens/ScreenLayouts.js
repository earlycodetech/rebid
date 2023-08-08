import { View, Text, StyleSheet, TouchableOpacity } from "react-native"

export const ScreenLayout= ()=>{
    return(
        <>
        <TouchableOpacity style={{
            width:120, 
            height:120, 
            backgroundColor:'skyblue',
            justifyContent:'center',
            alignItems:'center',
            position:'absolute',
            top:150,
            zIndex:1,
            right:0
            }}>
                    <Text style={styles.touchText}>Docs</Text>
                </TouchableOpacity>
        <View style={styles.container}> 
            <View style={styles.header}>
                <Text style={{color:'white', fontSize:32}}>Layouts Using Flex</Text>
            </View>
            <View style={styles.midContents}>
                <TouchableOpacity style={styles.touchItem}>
                    <Text style={styles.touchText}>Docs</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchItem}>
                    <Text style={styles.touchText}>Feeds</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchItem}>
                    <Text style={styles.touchText}>Terms</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchItem}>
                    <Text style={styles.touchText}>Notes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchItem}>
                    <Text style={styles.touchText}>Info</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchItem}>
                    <Text style={styles.touchText}>Rights</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchItem}>
                    <Text style={styles.touchText}>Alerts</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchItem}>
                    <Text style={styles.touchText}>Nerds</Text>
                </TouchableOpacity>
               
             
            </View>
        </View>
        </>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#F8F0E5'

    },
    header:{
        flex:1.5,
        backgroundColor:'#102E57',
        justifyContent:'center',
        alignItems:'center',

    },
    midContents:{
        flex:4.5,
        backgroundColor:'#DAC0A3',
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:"space-evenly",
        gap:10,
        alignContent:'flex-end'

    },
    touchItem:{
        width:120,
        height:120,
        borderRadius:500,
        backgroundColor:'#F8F0E5',
        justifyContent:'center',
        alignItems:'center'

    },
    touchText:{
        fontWeight:'bold',

    }
})