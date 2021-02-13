import React, { Component  } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, RefreshControl, FlatList, Image, Dimensions } from 'react-native';

export default class Home extends Component {

    constructor(props) {
        super();
    
        this.state = {
          loading: true,
          
        }
    
      }
    

    render() {
        return (
            <View>
  <Text>
                Hello
            </Text>
            </View>
          
        )
    }
}
