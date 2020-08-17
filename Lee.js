import React from "react";
import {StyleSheet,View, Text, Button} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import { TouchableHighlight, TouchableOpacity } from "react-native-gesture-handler";


export default function LeeScreen({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
            <Text style={styles.titleText}>
             음악 불러오기
            </Text>
            </View>
      
        <View style={styles.content}>

        </View>

            <View style={styles.footer}>
            <TouchableOpacity    
            onPress={() => navigation.navigate('HomeScreen')}
             style= {styles.btnStyle}
             >
            <Text style= {styles.btn_text_Style}>홈으로 돌아가기</Text>
            </TouchableOpacity>
            <TouchableOpacity    
            onPress={() => {}}
            style= {styles.btnStyle}
            >
            <Text style= {styles.btn_text_Style}>음악 선택하기</Text>
            </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        padding:5,
    },
    header:{
        flex:0.7,
        justifyContent:'center',
        alignItems:'center',
    },
    content:{
        flex:10,
        backgroundColor:'#8C8C8C',
    },
    footer:{
        flex:1,
        width:'100%',
        height:'100%',
        flexDirection:'row', 
    },
    titleText:{
        alignSelf:'center',
        fontSize:20,
       fontWeight:'bold',
    },
    btnStyle:{ 
        flex:1,
        width:'100%',
        justifyContent: 'center',
        borderWidth:1,
        backgroundColor: '#D4F4FA',
        borderRadius:4,
        marginTop:10,
        marginBottom:5,
    },
    btn_text_Style:
    {
        fontSize:15,
        fontWeight:'bold',
    }
});
