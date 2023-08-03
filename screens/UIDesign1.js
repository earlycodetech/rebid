import { View, Text, StyleSheet, Image} from "react-native";
import { demoStyles } from "../uistyles/demo-style";

export function UIDesign(){
    return(
        <View >
            <Text style={{color:'dodgerblue', fontSize:24,}}>Using Stylesheet </Text>
            <View style={style.block}>
                <Text>Inline Stylesheet</Text>
                <Text>Demo Content</Text>
            </View>

            <View style={demoStyles.middle}>
                <Text >Internal Stylesheet</Text>
                <Text>Demo Content</Text>
            </View>
            <View style={demoStyles.bottom}>
                <Text >External Stylesheet</Text>
                <Text>Demo Content</Text>
            </View>
            {/* <Image width ={500} height={500} source={{uri:'https://media.istockphoto.com/id/1327688087/photo/sunset-over-lagos-island.jpg?s=612x612&w=0&k=20&c=MDBYuvCYr1OWiHSC1xWPzPlqaur_EbEUBgYLiJhNJp4='}} /> */}
            {/* <Image width={400} height={400} source={require("../assets/shirt.PNG")} /> */}
        </View>
    )
}
const style =StyleSheet.create({
    block:{
        width:'75%',
        height:100,
        backgroundColor:'oldlace',
        padding:42,
        borderWidth:2,
        borderColor:'orange',
    }
})