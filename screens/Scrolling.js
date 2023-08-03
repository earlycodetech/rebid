import { View,Text,StyleSheet,ScrollView,FlatList } from "react-native";
import { demoData } from "../assets/data";

export function Scrolling() {
    return (
        <View>
            <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal={true}>
                <View style={styles.box}></View>
                <View style={styles.box}></View>
                <View style={styles.box}></View>
                <View style={styles.box}></View>
                <View style={styles.box}></View>
            </ScrollView>

           <FlatList
           data={demoData}
           renderItem={({item}) => {
            return (
                <View style={styles.productBlock}>
                    <Text>{item.product}</Text>
                    <Text>{item.amount}</Text>
                </View>
            )
           }}
           key={({item}) => item.id}/>
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