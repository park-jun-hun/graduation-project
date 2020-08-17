import {Text, TextInput, View, Easing, Button} from "react-native";
import React, {useState} from "react";
import styled from "styled-components/native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from "./svg/icon";
import MT from "./svg/mt";

let id_check=0;

export default function IntroScreen() {
    const [id, ID] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [checkPSW, setCheckpsw] = useState("");
    return (
        <Top>
        <Container>
       <Content>
       <Main_title> 회원가입 </Main_title> 

                </Content>
                <Temp></Temp>
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
            <Btn  style={{left:13}}
            ><BtnText  style={{height: 40,textAlign:'center' }}
             onPress={() =>  {
            check(id);
            id_check=1;
    }}> 중복확인  </BtnText></Btn>
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
            <Text_style>
              <TextInput
                style={{height: 50, fontSize:20}}
                placeholder="비밀번호 확인"
                onChangeText={(text) => setCheckpsw(text)}
                value={checkPSW}
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
            style={{top:80, left:45}}><BtnText 
            style={{height: 40,textAlign:'center' }}
            onPress={() =>  {
            Login(id_check,id,userName,password,checkPSW);
    }}>회원가입</BtnText></Btn>
            
        </Container>
        </Top>
    );
}
function check(id){
    if(id==''){
        alert("아이디를 입력해 주세요");
    }
    else{
    alert("사용가능한 아이디 입니다.");
}
}

function Login(id_check,id,userName,password,checkPSW){
   if(userName==''){
        alert("이름을 입력하세요");
    }
    else if(id==''){
        alert("아이디를 입력하세요");
    }
    else if (password==''){
        alert("비밀번호를 입력하세요");
    }
    else if(password !=checkPSW){
        alert("비밀번호를 확인해주세요");
    }
    else if(id_check==0){
        alert("아이디 중복확인을 해주세요")
    }
    
    else if(password==checkPSW){
        alert("회원가입이 완료되었습니다!")
       
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
    flex:0.1;
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
  top:10%;
  left:5%;

`;
const MainText = styled.View`
    left:45%;
`;
