import React, { Component } from 'react';
import { StyleSheet, Image , Dimensions , Text} from 'react-native';
const { height } = Dimensions.get('window');

export default class IconComponent extends Component {


    render() {

        switch (this.props.name) {
            
            case 'Home':
                if (this.props.focused) {
                    return <Text>Home</Text>
                } else {
                    return <Text>Home</Text>
                }


            case 'History':
                if (this.props.focused) {
                    return <Text>Home</Text>
                } else {
                    return  <Text>Home</Text>
                }


            case 'Profile':
                if (this.props.focused) {
                    return <Text>Home</Text>
                } else {
                    return  <Text>Home</Text>
                }
        }
    }
}
