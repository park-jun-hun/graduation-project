import {Text, View, Easing, Button} from "react-native";
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
    const firebaseConfig={
        apiKey: "AIzaSyDLMuHBhU91JCg3-JT48cX5RQM1Oasov_Q",
        authDomain: "graduation-4651e.firebaseapp.com",
        databaseURL: "https://graduation-4651e.firebaseio.com",
        projectId: "graduation-4651e",
        storageBucket: "graduation-4651e.appspot.com",
        messagingSenderId: "449238174270",
        appId: "1:449238174270:web:3f2168bb35db1e8c025f6f",
        measurementId: "G-17QJW69D5K"
      };

      
      //firebase.initializeApp(firebaseConfig);

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
            <Image source ={require('../pic/test.jpg')}></Image>
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