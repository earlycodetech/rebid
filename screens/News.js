import { View, Text, StyleSheet, ScrollView, FlatList, Image, Alert, TouchableOpacity, ToastAndroid, ImageBackground } from "react-native";
import { getPost } from "../assets/newsData";
export const News = ()=>{
    ToastAndroid.show('Iambest Networks', ToastAndroid.LONG);
    
    return(
        <View style={Styles.bg}>
           
            <View>
                <Text> iambestnetworks </Text>
            </View>
                <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={true}>

                <FlatList 
                    data={getPost}
                    renderItem={({item})=>{
                        
                            return(
                                <TouchableOpacity>
                                   
                                     <ImageBackground source={{uri:`${item.jetpack_featured_media_url}`}}>

                                        
                                        {/* <Text numberOfLines={2} style={{marginEnd:'30%', marginTop:'30%'}}>{item.title.rendered}</Text> */}
                                        
                                    </ImageBackground>
                          
                                    <View>
                                       
                                      
                                    </View>

                                    <View style={{borderRadius:20, flexDirection:'row'}}>
                                    <Text style={{width:'70%', fontWeight:'bold'}}>
                                            {item.title.rendered}
                                        </Text>
                                        <Image width={'30%'} height={60} source={{uri:`${item.jetpack_featured_media_url}`}} />
                                        
                                   </View>
                                   <Text style={{fontSize:12, borderBottomWidth:1, marginBottom:10}}>Posted: {item.date}</Text>

                                  </TouchableOpacity>)
                        }
                       
                    }
            
                />
            </ScrollView>
        </View>
    )

}
const Styles= StyleSheet.create({
    bg:{

        width:'90%',
        backgroundColor:'white',
        margin:20,
        paddingLeft:10,
        paddingRight:10,
        paddingTop:20,
        paddingBottom:20,
        flex:1,
    },
    headingText:{
        color:'#011536',
        fontWeight:'bold',
        marginTop:10,

    }

})