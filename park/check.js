import {Text, Image,View, Easing, Button} from "react-native";
import React from "react";
import styled from "styled-components/native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import * as firebase from 'firebase';
import "firebase/database";
import {
  Dimensions
} from 'react-native';

const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;



export default function CheckScreen({navigation}) {
  
      
    //  firebase.initializeApp(firebaseConfig);

      //덮어쓰기
    const usersRef=firebase.database().ref('Score/').set({
    Score1:20,
    Score2:30,
    Score3:40,
    });
    

    //console.log(usersRef.key);
   /*  let message;
    //읽어오기
    const m = firebase.database().ref('Score').on('value',function(snapshot){
     message =snapshot.val();
     console.log(message);
    });   */

    return (
        <Container>
            <Content>
            <Image 
            style={{width:500,height:300}}
            resizeMode="contain"
            source ={require('./image/test.jpg')}></Image>
            </Content>
            <Start>
                <Text onPress={() => navigation.navigate('HomeScreen')}>
                    시작하기
                </Text>
            </Start>

        </Container>
    );
}

const Container = styled.View`
  flex:1;
`;
const Content = styled.View`
    align-items:center;
    top:50%
`;
const Start = styled.View`
    top:90%;
    left:80%;
`;
