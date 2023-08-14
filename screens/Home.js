import { 
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Platform,
    StatusBar,
    TouchableOpacity
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCartShopping,faGavel, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import {theme} from '../config/theme'

export function Home() {
    console.log(Platform.OS)

    return (
        <SafeAreaView style={styles.wrapper}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.brandName}>Rebid</Text>
                    <View>
                        <TouchableOpacity style={styles.headerOption}>
                            <FontAwesomeIcon 
                            icon={faShoppingCart} 
                            size={40}
                            color={theme.colors.dullRed1}/>
                            <Text style={styles.headerOptionText}>Sell</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.headerOption}>
                        <FontAwesomeIcon icon={faGavel} size={40}/>
                            <Text style={styles.headerOptionText}>My Bids</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.expiringBlock}>

                </View>

                <View style={styles.recentBlock}>

                </View>

                <View style={categoriesBlock}></View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        flex:1,
        marginTop:StatusBar.currentHeight
    },
    container:{
        flex:1,
        paddingHorizontal:8,

    },
    header:{
        flex:1.5
    },
    brandName:{
        fontSize:42,
        fontWeight:'bold',
        color:theme.colors.dullRed1
    },
    headerControls:{
       flexDirection:"row",
       justifyContent:'space-between',
    },
    headerOption:{
       height:80,
       width:'49%',
       flexDirection:'row',
       justifyContent:"space-between",
       alignItems:"center",
       backgroundColor:theme.colors.dullRed0 ,
       borderRadius:12,
       paddingHorizontal:8,
    
    },
   
    headerOptionText:{
       fontSize:32,
       color:theme.colors.dullRed1 
    },
    
    expiringBlock:{
        flex:1.5
    },
    recentBlock:{
        flex:1.5
    },
    categoriesBlock:{
        
        flex:1.5
    },
})