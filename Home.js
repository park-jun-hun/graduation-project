import {Text, View, Easing, Button} from "react-native";
import React from "react";
import styled from "styled-components/native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Plus from "./svg/plus";
import C1 from "./svg/c1";
import C2 from "./svg/c2";
import C3 from "./svg/c3";
import P1 from "./svg/p1";
import P2 from "./svg/p2";
import P3 from "./svg/p3";
import T1 from "./svg/t1";
import T2 from "./svg/t2";
import T3 from "./svg/t3";
import MT from "./svg/mt";
import Icon from "./svg/icon";
import {
  Dimensions
} from 'react-native';
const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;



export default function HomeScreen({navigation}) {
    return (
        <Container>
        <Main>
          <IconStyle>
          <Icon/>
          </IconStyle>
          <MainText>
       <MT/>
       </MainText>
        </Main>

            <Part1 onPress={() => navigation.navigate('LeeScreen')}>
              <Circle>
              <C1/>
              </Circle>
              <Pic>
              <P1/>
              </Pic>
              <TEXT>
              <T1/>
              </TEXT>
              <PlusStyle>
              <Plus onPress={() => navigation.navigate('LeeScreen')}/>
              </PlusStyle>
             </Part1>

            <Part2>
            <Circle>
              <C2/>
              </Circle>
              <Pic>
              <P2/>
              </Pic>
              <TEXT>
              <T2/>
              </TEXT>
            <PlusStyle>
              <Plus onPress={() => navigation.navigate('ChoiScreen')}/>
              </PlusStyle>
            </Part2>
            <Part3>
            <Circle>
              <C3/>
              </Circle>
              <Pic>
              <P3/>
              </Pic>
              <TEXT>
              <T3/>
              </TEXT>
            <PlusStyle>
              <Plus onPress={() => navigation.navigate('ParkScreen')}/>
              </PlusStyle>
            </Part3>
             
        </Container>
    );
}

const Container = styled.View`
  flex:1;
  background : white;
`;
const Main =styled.View`
  flex:0.4;
`;
const Icon_style = styled.View`
  align-items:center;

`;
const Part1 = styled.View`
flex:0.2;
background : #FFDECB;
`;
const Part2 = styled.View`
  flex:0.2;
  background-color:#A5FEDF;
`;
const Part3 = styled.View`
  flex:0.2;
  background-color:#77AF9C;
`;
const PlusStyle =styled.View`
  position:absolute;
  top:25%;
  left:80%;
`;
const Circle = styled.View`
  position:absolute;
  top:10%;
  left:2%;
`;
const Pic = styled.View`
  position:absolute;
  top:19%;
  left:5%;
`;
const TEXT =styled.View`
  position:absolute;
  top:40%;
  left:35%;
`;
const MainText = styled.View`
  position:absolute;
  top:45%;
  left:45%;
`;
const IconStyle =styled.View`
  position:absolute;
  top:30%;
  left:5%;
`;
