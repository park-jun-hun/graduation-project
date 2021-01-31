import React, { Component} from 'react';
import { WebView ,Text} from 'react-native-webview';

export default function RecordScreen({navigation}) {
    return (
        
           
        <WebView
        automaticallyAdjustContentInsets={false}
          source={{uri: 'https://graduation-project-fzvhk.run.goorm.io/graduation_project/index.html'}}
            style={{marginTop:30, marginLeft:0, width:"250%",marginLeft:-5}}
        />
       
      );
}
