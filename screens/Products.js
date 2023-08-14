import { View, Text, StyleSheet, TouchableOpacity, ScrollView, ImageBackground, FlatList } from "react-native";
import { theme } from "../config/theme";
import { demoProducts } from "../assets/demo-products";
import { faCartShopping, faGavel, faShoppingCart, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { IconButton, TextInput } from "react-native-paper";
export const Products = () => {
        time = 1692106354000;
        newDate =Date.now();
        difference = newDate - time;
        seconds = difference /1000
        minuites =seconds/60
        hours = minuites/60
        timePast= Math.floor(hours)+'Hrs';
    return ( <ScrollView style={styles.back} >
            <ImageBackground source={require('../assets/header.jpg')}>
                <View style={styles.header}>
                    <View style={styles.search}>
                        <TextInput placeholder="Search Here" />
                    </View>
                </View>
            </ImageBackground>
            <FlatList 
            data={demoProducts}
            renderItem={({item})=>{
                return(
                    <View style={styles.products_holder}>
                    <View>
                    <ImageBackground source={{uri:demoProducts.imageUr}} >
                        <TouchableOpacity style={styles.product}>
                            
                            <FontAwesomeIcon style={styles.like} icon={faHeart} size={20} />
                            
                        </TouchableOpacity >
                        </ImageBackground>
                        <View style={styles.content}>
                            <Text style={styles.text}>{item.title}</Text>
                           <View style={styles.pLower}>
                                <Text id="time">{timePast}</Text>
                                <Text>{item.currentBid}</Text>
                            </View>
                            <TouchableOpacity style={styles.product_btn}>
                                <Text style={{
                                    fontSize: 10,
                                    color: theme.colors.dullRed0,
                                    alignContent: 'center',
                                    padding: 7,
                                }}>View Aution</Text>
                            </TouchableOpacity>
                           </View>
                    </View>
                </View>) }}>           
            </FlatList>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    product_btn: {
        width: 80,
        height: 30,
        fontSize: 10,
        borderRadius: 10,
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: theme.colors.navy,
        color: theme.colors.dullRed1,
        marginTop: 10,

    },
    pLower: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: ''
    },
    like: {
        marginLeft: '80%',
        marginTop: 10,

    },
    search: {
        alignContent: 'center',
        marginLeft: 40,
        marginRight: 40,
        borderRadius: 30,
        marginTop: 50,
    },
    content: {
        width:150,
        alignContent:'center',
        padding:5,
        
    },
    header: {
        width: '100%',
        height: 200,
        backgroundColor: 'rgba(43, 42, 76,0.7)'

    },
    text: {
        color: theme.colors.navy,
        fontWeight: 'bold',

    },
    products_holder: {
        justifyContent: 'space-between',
        padding: 20,
        flexWrap:'wrap',
        flexDirection:'row',
    },
    product: {
        width: 150,
        height: 120,
        borderWidth: 1,
        borderRadius: 10,
   },
    back: {
        flex: 1,
        backgroundColor: theme.colors.dullRed0,
    }
})