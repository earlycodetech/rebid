import { StyleSheet } from "react-native";

const pStyle = StyleSheet.create({
    header:{
        paddingTop:10,
        backgroundColor:'orange',
        width:'100%',
        height:40,
    },
    body:{
        backgroundColor:'rgba(247, 227, 178, 0.5)',
        height:'90%',
        width:'auto',

    },
    footer:{
        backgroundColor:'orange',
        width:'100%',
        height:40,
    },
    div:{
        width:300,
        height:300,
        border:1,
        borderColor:'orange',
    }, 
    hText:{
        fontSize:20,
        textAlign:'center',
        color:'white',
    }, 
    row:{
        marginTop:100,
        flexDirection:'row',
        marginLeft:40,
        width:'80%',
        height:100,
        backgroundColor:'orange',
        borderRadius:20,
        alignItems:'center',
    },
    one:{
        
        flexDirection:'row',
        marginLeft:8,
        width:'30%',
        height:'80%',
        backgroundColor:'white',
        borderRadius:20,
        alignItems:'center',
    },
    divOne:{
        width:'90%',
        height:300,
        // backgroundColor:'orange',
        justifyContent:'center',
        borderRadius:100/2,
        borderWidth:2,
        borderColor:'orange',
        marginLeft:20,
        marginTop:10,
        

        flex:0.3,

       
    }
})
export {pStyle}