import { View, Text, StyleSheet, Image } from "react-native";
import { demoStyles } from "../uistyles/demo-styles";

export function UIDesign(){
    return(
       <View>
        <Text style={{color:"orange", fontSize:24}}> Using StyleSheet</Text>

        <View style={styles.block}> 

            <Text> Inline </Text>
            <Text> Demo</Text>
         </View>
        <View style={demoStyles.middle}> 

            <Text> Internal StyleSheet</Text>
            <Text> Demo Content</Text>
         </View>
        <View style={demoStyles.bottom}> 

            <Text> External StyleSheet</Text>
            <Text> Demo Content</Text>
         </View>

         <Image 
         source={require('../assets/noname.png')} with={400} height={700}/>
       </View>

      
    )
}
const styles =StyleSheet.create({
    block:{
        width: '75%',
        height:400,
        backgroundColor:'oldlace',
        padding:40,
        borderWidth:2,
        borderColor:"navy"
    }
})