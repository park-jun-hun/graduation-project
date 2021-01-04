import {Text, View, Easing, Button} from "react-native";
import React from "react";
import styled from "styled-components/native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {
  Dimensions
} from 'react-native';
const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;

// import {DocumentPicker} from "expo";
// DocumentPicker.getDocumentAsunc({
//     type:"audio/*",
//     copyToCacheDirectory: true  // Expo.FileSystme.CacheDirectory
// })

import * as RNFS from 'react-native-fs'
RNFS.readFile(filePath,'ascii').then(res => {

})
.catch(err => {
    console.log(err.message, err.code);
});

export default function RecordScreen({navigation}) {
    return (
        <Container>
            <Content>
            <Text>음악 가져오기 </Text>
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