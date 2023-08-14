import { 
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Platform,
    StatusBar,
    TouchableOpacity,
    Image,
    FlatList
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faShoppingCart,faGavel } from "@fortawesome/free-solid-svg-icons";
import { theme } from '../config/theme';
import { demoProducts } from '../assets/demo-products';

export function Home() {

    return (
        <SafeAreaView style={styles.wrapper}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.brandName}>Rebid</Text>
                    <View style={styles.headerControls}>
                        <TouchableOpacity style={styles.headerOption}>
                            <FontAwesomeIcon 
                            icon={faShoppingCart} 
                            size={40}
                            color={theme.colors.dullRed1}/>
                            <Text style={styles.headerOptionText}>Sell</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.headerOption}>
                            <FontAwesomeIcon 
                            icon={faGavel} 
                            size={40}
                            color={theme.colors.dullRed1}/>
                            <Text style={styles.headerOptionText}>My bids</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.expiringBlock}>
                    <Text style={styles.expSoonText}>Expiring soon</Text>
                    
                    <View style={styles.expItemsBlk}>
                        <FlatList
                        data={demoProducts}
                        renderItem={({item}) => (
                            <TouchableOpacity style={styles.expItem}>
                                <Image
                                style={styles.productImg}
                                source={{uri:item.imageUr}}/>
                                <View style={styles.expItemsDetailsBlk}>
                                    <Text style={{}}>Ending in 1d 5hrs 32min 44secs</Text>
                                    <Text style={{}}>{item.title}</Text>
                                    <Text style={{}}>Current bid: NGN{item.currentBid}</Text>
                                </View>
                            </TouchableOpacity>
                        )}
                        key={({item}) => item.id}/>
                    </View>
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
    wrapper:{
        flex:1,
        marginTop:Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    container:{
        flex:1,
        paddingHorizontal:8,
    },
    header:{
        flex:1.5,
    },
    // new begings
    brandName:{
        fontSize:42,
        fontWeight:'bold',
        color:theme.colors.dullRed1
    },
    headerControls:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    headerOption:{
        height:80,
        width:'49%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:theme.colors.navy,
        borderRadius:12,
        paddingHorizontal:8,
    },
    headerOptionText:{
        fontSize:32,
        color:theme.colors.dullRed1
    },
    //new ends
    expiringBlock:{
        flex:1.5,
        flexDirection:'column',
        gap:6,
    },
    expSoonText:{
        fontSize:20,
        fontWeight:'200'
    },
    expItemsBlk:{

    },
    expItem:{

    },
    productImg:{
        width:160,
        height:360
    },
    expItemsDetailsBlk:{

    },
    recentBlock:{
        flex:1.5,
    },
    categoriesBlock:{
        flex:1.5,
    }
})