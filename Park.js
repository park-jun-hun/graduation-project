import {Text, View, Easing, Button} from "react-native";
import React from "react";
import styled from "styled-components/native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import P1 from "./svg/park1";
import P2 from "./svg/park2";
import P3 from "./svg/park3";
import P4 from "./svg/park4";
import {connect} from 'react-redux';
import {mapDispatchToProps, mapStateToProps} from "./Mapping";

let user_name="";
function ParkScreen(props,{navigation}) {
    user_name=props.name;
    return (
        <Container>
        <Main>
          <IconStyle>
              <Text>사진</Text>
          </IconStyle>
          <MainText>
              {user_name}님 환영합니다.
       </MainText>
        <MainText2>
              {user_name}님 정보를 확인하세요.
       </MainText2>
       
        </Main>

             <Bottom>
                 <Btn1>
                     <P1 style={{position:'absolute'}}
                     onPress={() => props.navigation.navigate('RecordScreen')}/>
             <Text_style>기록다시듣기 </Text_style>
                 </Btn1>
                 <Btn2>
                 <P2 style={{position:'absolute', top:13}}
                     onPress={() => props.navigation.navigate('ScoreScreen')}/>
                 <Text_style>점수확인하기 </Text_style>
        </Btn2>
        <Btn3>
        <P3 style={{position:'absolute', top:13}}
                     onPress={() => props.navigation.navigate('CheckScreen')}/>

        <Text_style>유사도 확인 </Text_style>
        </Btn3>
        <Btn4>
        <P4 style={{position:'absolute', top:13}}
                     onPress={() => props.navigation.navigate('InfoScreen')}/>

        <Text_style>내정보 확인 </Text_style>
        </Btn4>
             </Bottom>
        </Container>
    );
}

const Container = styled.View`
  flex:1;
  background-color:#77AF9C;
`;
const Main =styled.View`
  flex:0.4;
`;

const Bottom = styled.View`
    flex: 0.6;
`;
const MainText = styled.Text`
  font-size:25px;
  font-style: italic;
  top:45%;
  left:35%;
`;
const MainText2 = styled.Text`
  font-size:18px;
  font-style: italic;
  top:45%;
  left:35%;
`;
const IconStyle =styled.View`
  position:absolute;
  top:30%;
  left:5%;
`;
const Btn1= styled.View`
    position:absolute;
    align-items:center;
    background : white;
    top:3%;
    left:3%;
    padding-right:45%;
    padding-top:45%;
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
`;
const Btn2= styled.View`
    position:absolute;
    flex:0.2;
    align-items:center;
    background : white;
    top:3%;
    right:3%;
    padding-right:45%;
    padding-top:45%;
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
`;
const Btn3= styled.View`
    position:absolute;
    flex:0.2;
    align-items:center;
    background : white;
    bottom:3%;
    left:3%;
    padding-right:45%;
    padding-top:45%;
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
`;
const Btn4= styled.View`
    position:absolute;
    flex:0.2;
    align-items:center;
    background : white;
    bottom:3%;
    right:3%;
    padding-right:45%;
    padding-top:45%;
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
`;
const Text_style=styled.Text`
    position:absolute;
    font-size:18px;
    top: 145%
    color:#222222;
    font-weight:bold;
    font-style: italic;
    
`;

export default connect(mapStateToProps, mapDispatchToProps)(ParkScreen);
