import { TextInput, View, Text, Button,TouchableOpacity } from "react-native";
import { useState } from "react";
const Ustate = '';
export const BuildInCom=()=>{
    // Setting a use state
    const [user,SetUser] = useState('');
    const[bgColor,SetBgColor] = useState('forestgreen');
    return (
        <View style={{backgroundColor:bgColor, flex:1, paddingVertical:60, padding:20,}}>
            <Text style={{color:'white', fontSize:32,}}>Hello, {user}</Text>
            <TextInput style={{ borderWidth:1, borderColor:'white', color:'white', textAlign:'center'}}
            onChangeText={(text) =>{
               SetUser(text)
            }} 
            placeholder="Enter Username"/>
            <Button onPress={()=>SetBgColor(user)} title="Change Color"/>

        <TouchableOpacity 
        onLongPress={()=> {console.log('from Touchables ')}}>
                <Text>Click for more</Text>
            </TouchableOpacity>
        </View>
    )
}