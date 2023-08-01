import { useState } from "react";
import { View,Text,TextInput,Button,TouchableOpacity } from "react-native";

export const BuiltInCom = () => {
    const [user,setUser] = useState('unknown');
    const [bgColor,setBgColor] = useState('forestgreen');

    return (
        <View 
        style={{
            flex:1,
            backgroundColor:bgColor,
            paddingVertical:60
            }}
        >
            <Text style={{fontSize:32,color:'white'}}>Hello, {user}</Text>
            
            <TextInput 
            placeholder="enter your name"
            keyboardType="number-pad"
            style={{
                borderWidth:1,
                borderColor:'white'    
            }}
            onChangeText={(text) => setUser(text)}
            />

            <Button 
            title="Change Color"
            onPress={() => setBgColor(user)}
            />

            <TouchableOpacity 
            onPress={() => console.log('from TouchableOpacity')}>
                <Text>Click for more</Text>
            </TouchableOpacity>
        </View>
    )
}