import React, {useEffect} from 'react';
import {View, Text,} from 'react-native';
import io from 'socket.io-client';


const App =()=>{

    useEffect(()=>{
       const socket = io("http://192.168.1.103:3000");

    },[]);

    return(
        <View>
            <Text>SOCKET IO</Text>
        </View>
    )
}

export  default App;
