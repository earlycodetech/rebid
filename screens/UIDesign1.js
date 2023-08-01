import { View,Text,StyleSheet,Image } from 'react-native';
import { demoStyles } from '../uistyles/demo-style';

export function UIDesign () {
    return (
        <View>
            <Text style={{color:'orange',fontSize:24}}>Using StyleSheet</Text>

            <View style={styles.block}>
                <Text>Inline StyleSheet</Text>
                <Text>Demo content</Text>
            </View>

            <View style={demoStyles.middle}>
                <Text>Internal StyleSheet</Text>
                <Text>Demo content</Text>
            </View>

            <View style={demoStyles.bottom}>
                <Text>External StyleSheet</Text>
                <Text>Demo content</Text>
            </View>

            {/* <Image 
            width={200} 
            height={200} 
            source={{uri:'https://cdn.britannica.com/25/160325-050-EB1C8FB7/image-instruments-Earth-satellite-NASA-Suomi-National-2012.jpg?w=300'}}/> */}

            <Image 
            source={require('../assets/sphere-with-trees.jpg')}
            width={400}
            height={400}/>
        </View>
    )
}

const styles = StyleSheet.create({
    block:{
        width:'75%',
        height:400,
        backgroundColor:'oldlace',
        paddingHorizontal:40,
        borderWidth:2,
        borderColor:'orange'
    }
})