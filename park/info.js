import {Text, View, Easing, Button} from "react-native";
import React from "react";
import styled from "styled-components/native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {connect} from 'react-redux';
import {mapDispatchToProps, mapStateToProps} from "../Mapping";

let userName='';
let userId='';
let password='';


function InfoScreen(props,{navigation}) {
    userName=props.name;
    userId=props.id;
    password=props.psw;
 
    
    return (
        <Container>
            <Content>
    <Text>이름 : {userName}</Text>
            <Text>아이디: {userId}</Text>
            <Text>비밀번호 : {password}</Text>
       
            </Content>
           
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
export default connect(mapStateToProps, mapDispatchToProps)( InfoScreen);
