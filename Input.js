import {Text, TextInput, View, Easing, Button} from "react-native";
import React, {useState} from "react";
import styled from "styled-components/native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {connect} from 'react-redux';
import {mapDispatchToProps, mapStateToProps} from "./Mapping";
import Icon from "./svg/icon";
import MT from "./svg/mt";
import LoginScreen from "./Login";
import * as Progress from 'react-native-progress';

let id_check=0;

function InputScreen(props,{navigation}) {
    const [id, ID] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    let [page,setPage]=useState(1);
    let [pct,setPct]=useState(0);
    if(page==1){
    return (
        <Top>
        <Container>
       <Content>
       <Main_title> 로그인 </Main_title> 
                </Content>
                <Bar></Bar>
                <Temp></Temp>
                <Text_style>
              <TextInput
                style={{height: 50, fontSize:20}}
                placeholder="이름 (실명 입력)"
                onChangeText={(text) => setUserName(text)}
                value={userName}
            /></Text_style>

             <SecondBar></SecondBar>
                <Text_style>
            <TextInput 
            style={{height: 50, fontSize:20}}
                placeholder="아이디 (이메일 주소)"
                onChangeText={(text) => ID(text)}
                value={id}
            />
          
            <CheckBtn>
        
            
            </CheckBtn>
            </Text_style>
            
            <SecondBar></SecondBar>
            <Text_style>
  
            
            <TextInput
                style={{height: 50, fontSize:20}}
                placeholder="비밀번호"
                onChangeText={(text) => setPassword(text)}
                value={password}
            /></Text_style>
            
            <SecondBar></SecondBar>
         
            <Icon_style>
            <Icon/>
            </Icon_style>
            <MainText>
            <MT/>
            </MainText>
            
             <Temp></Temp>
             <Btn 
            style={{top:120, left:45}}><BtnText 
            style={{height: 40,textAlign:'center' }}
            onPress={() =>  {
            props.setID(id);
            props.setName(userName);
            props.setpsw(password);
            setPage(2);
            props.navigation.navigate('HomeScreen');
            }}>시작하기 </BtnText></Btn>
            
        </Container>
        </Top>
    );
        }
        else if(page==2){
            // props.navigation.navigate('HomeScreen');
            return(
            <Prog> 
                <Text>Loading</Text>
            <Progress.Bar progress={0} width={200} /></Prog>
            );   
    }
}
function wait(msecs)
{
    var start = new Date().getTime();
    var cur = start;
    while(cur - start < msecs)
    {
    cur = new Date().getTime();
    }
}
const Top=styled.View`
    flex:1;
    background:white;
`;
const Container = styled.View`
    flex:1;
    top:5%;
    flexDirection: column;
`;
const Text_style = styled.View`
    flexDirection: row;
    left:3%;
`;
const Bar = styled.View`
    background : black;
    flex:0.005;
`;
const SecondBar = styled.View`
    background : black;
    flex:0.002;
    margin-right:10%;
    margin-left:5%;
`;
const Content = styled.View`
    left:10%;
`;
const Temp = styled.View`
    flex:0.05;
`;
const CheckBtn= styled.View`
    padding-left:45%;
    top:5%;   
`;
const Btn = styled.View`
    background : black;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    margin-left:30%;
    margin-top:1%;
    margin-right:50%;
`;
const BtnText = styled.Text`
    color:white;
    font-weight:bold;
    font-style: italic;
    font-size:18px;
    top:15%;
`;
const Main_title=styled.Text`
    font-weight:bold;
    font-style: italic;
    font-size:28px;
`;
const Icon_style = styled.View`
  top:15%;
  left:5%;

`;
const MainText = styled.View`
    top:5%;
    left:45%;
`;
const Prog = styled.View`
    top:45%
    align-items:center;
`;
export default connect(mapStateToProps, mapDispatchToProps)(InputScreen);
