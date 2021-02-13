import React, { Component } from 'react'
import { View , Text } from 'react-native'

export default class MainAuth extends Component {

    static navigationOptions = {
        headerShown: false
      };
    


    render() {
        return (
           <View>
               <Text>
                   Main Auth
               </Text>
           </View>
        )
    }
}
