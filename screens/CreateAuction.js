import { View,Text,TouchableOpacity,StyleSheet,TextInput ,StatusBar, ImageBackground} from "react-native";
import { Button } from "react-native-paper";
import { useState,useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { theme } from "../config/theme";
import { faUpload } from "@fortawesome/free-solid-svg-icons";

export function CreateAuction(){
    const [title, setTitle] = useState('');
    const [bid, setstartBid] = useState('');
    const[desc,setDesc] = useState('');

    return(
        <ImageBackground source={require('../assets/auction.jpg')}
        style={styles.bg}>
            <View style={styles.container}>
                <View  style={styles.uploadBox}>
                    <View style={styles.info}>
                        <Button 
                        style={styles.uploadImageBtn} 
                        icon="arrow-down-drop-circle-outline" 
                        mode="contained" 
                        onPress={() => console.log('Pressed')}>
                                Upload Image
                        </Button>

                        {/* <TextInput
                        style={styles.title} 
                        onChangeText={newtitle => setTitle(newtitle)} 
                        placeholder="Type in your Title"/>

                        <View>
                            <TextInput 
                            style={styles.startingBid} 
                            onChangeText={newstartingBid => setstartBid(newstartingBid)} 
                            placeholder="starting bid" 
                            keyboardType="numeric" />
                        </View>
                        <View>
                            <TextInput 
                            style={styles.bidTime} 
                            placeholder="dd/mm/yy" 
                            keyboardType="numeric"/>
                        </View>
                        <View>
                            <TextInput 
                            style={styles.desc} 
                            onChangeText={newdesc => setDesc(newdesc)} 
                            multiline={true} 
                            placeholder="Type in your Description"/>  
                        </View> */}
                    </View> {/*info*/}
                    
                </View> {/*uploadBox*/}
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    bg:{
        flex:1,
    },
    container:{
        flex:1,
        backgroundColor:"rgba(238,226,222,0.1)"
       
    },
    uploadBox:{
       flex:1,
        justifyContent:"space-around",
        alignItems:"center",
        justifyContent:"center",  
    },
    uploadtext:{
        fontSize:20,
        color:'white',
    },
    uploadButton:{
        color:theme.colors.navy,
        justifyContent:"center",
        alignItems:'center',
        width:120,
        fontSize:10,
        height:40,
        backgroundColor:theme.colors.navy,
        borderRadius:10,
        position:"absolute",
        right:30,
        top:80,  
    },
    uploadImageBtn:{
        backgroundColor:theme.colors.navy,
        width:200,
    },
    textBox:{
        flex:1,
        backgroundColor:'white',
        width:'100%',   
    },
    info:{
        width:'90%',
        display:"flex",
        marginTop:100,
        marginBottom:StatusBar.currentHeight,
        borderRadius:20,
        flexDirection:'column',
        gap:10,   
    },
    title:{
        width:300,
        backgroundColor:theme.colors.dullRed0,
        borderRadius:20,
    },
    startingBid:{ 
        width:100,
        backgroundColor:theme.colors.dullRed0,
        borderRadius:5
    },
    desc:{
        backgroundColor:theme.colors.dullRed0,
        borderRadius:20,
        height:60
    },
    bidTime:{
        width:100,
        backgroundColor:theme.colors.dullRed0,
        borderRadius:5,
        
    },
    categorytext:{
        fontSize:20,
        color:theme.colors.dullRed0
    },
    CategoriesBlock:{
        padding:10,
       
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
        gap:10,
        overflow:"hidden"

        
    },
    categoriesbtn:{
        backgroundColor:theme.colors.dullRed1,
        marginHorizontal:5,
        overflow:"hidden"
    }
})