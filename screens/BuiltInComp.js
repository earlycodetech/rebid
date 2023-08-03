import {View, Text, TextInput,Button, TouchableOpacity} from 'react-native'
import {useState} from "react";

export const BuiltInCom =()=> {
    const [user,setUser]=useState('Unknown')
    const [bgColor, setBgColor]=useState('forestgreen')
    return (
        <View style ={{flex:1, backgroundColor:bgColor, paddingVertical:60}}> 

            <Text style={{fontSize:32, color:'white' }}>Hello,  {user}</Text>

            <TextInput 
            placeholder='Enter Your Name'
           // keyboardType='number-pad'
            style={{
                borderWidth:1,
                borderColor:'white'
            }}
            onChangeText={(text) => setUser(text)}
               
            

            
            > </TextInput>

         
            

            
           

            <Button title='Change Color'
            onPress={()=> setBgColor(user)}/>
        <TouchableOpacity 
            
            onPress={()=> console.log('from touchable opacity')}
        >

            <Text> Click for more..</Text>

        </TouchableOpacity>
        </View>
    )
}