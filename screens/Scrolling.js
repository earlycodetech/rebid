import { View, Text, StyleSheet, ScrollView, FlatList, Alert, TouchableOpacity, ToastAndroid} from "react-native";
import { demoData } from "../assets/data";

export  function Scrolling(){
    ToastAndroid.show('welcome to rebid',
    ToastAndroid.LONG)
return(
    
    <View>
    
        <ScrollView 
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        >
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
        </ScrollView>

       <FlatList 
       data={demoData}
       renderItem={({item}) =>{
        return(
        <TouchableOpacity 
        style={styles.productBlock}
        onPress={() => Alert.alert(
            'information',
            `Product ID is: ${item.id}`,
            [
                {text:'Okay'},
                {
                    text:'Action',
                    onPress: () => Alert.alert('Warning',
                    'Are You sure You wanna close?'
                    )
                }
            ]
        )}>
            <Text> {item.product}</Text>
        <   Text>{item.amount}</Text>
        </TouchableOpacity>

 ) }}
       key={({item})=> item.id}/>
        

    </View>
)
}
const styles = StyleSheet.create({
    box:{
        width:200,
        height:200,
        backgroundColor:'purple',
        margin:20
    },
    productBlock:{
        padding:16,
        backgroundColor:'gray',
        marginBottom:8
    }
})