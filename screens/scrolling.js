import { View, Text, StyleSheet, ScrollView, FlatList, Alert, TouchableOpacity, ToastAndroid } from "react-native";
import { demoData } from "../assets/data";

export const Scrolling =()=>{
    ToastAndroid.show('Welcome Home', ToastAndroid.LONG);
    return(
       <View>
        {/* flat list and  scrollView */}
        <ScrollView showsHorizontalScrollIndicator={false} 
        horizontal={true}>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>

        </ScrollView>
        {/* Working with Flat List */}
        <FlatList 
        data={demoData}
        renderItem={({item})=>{
            return(
                <TouchableOpacity onPress={()=> Alert.alert(
                    'Information', 
                    ` product ID ${item.id}`,
                    [
                        {text:'okay'},
                        {
                            text:'Action',
                            onPress:()=>console.log('>>>>>from Alert')
                        }
                    ]
                    )} 
                    style={styles.productBlock}>
                <Text>{item.product}</Text>
                <Text>{item.amount}</Text>
            </TouchableOpacity>
            )
        }}
        key = {({item})=>item.id}
        
        
        
        />
       
       </View>
    )
}
const styles = StyleSheet.create({
    productBlock:{
        padding:16,
        backgroundColor:'gray',
        marginTop:10,
        
      
    },
    box:{
        width:200,
        height:200,
        backgroundColor:'purple',
        margin:20,
    }
})