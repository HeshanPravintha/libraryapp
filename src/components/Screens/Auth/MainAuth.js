import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import { theme } from '../../../../src/style/index';


export default class MainAuth extends Component {

    static navigationOptions = {
        headerShown: false
    };

    state = {
        fontLoaded: false
    }

    componentDidMount() {


    }


    render() {
        return (
            <View style={styles.container}>
                <View style={{
                    display: 'flex', flexDirection: 'column',
                    height: '35%', justifyContent: 'flex-end', alignItems: 'center'
                }}>
                    <Image source={require('../../../../assets/images/Reading.png')} style={{ marginBottom: 40 }} />
                </View>

                <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '65%' }}>
                    <View style={{
                        display: 'flex', flexDirection: 'column', height: '60%',
                        marginLeft: 20, marginRight: 20
                    }}>

                        <Text style={theme.title_header}>
                            Login
                        </Text>

                        <View style={{ marginTop: 40 }}>
                            <View style={{ marginBottom: 15 }}>
                                <TextInput
                                    placeholder="Email"
                                    underlineColorAndroid='transparent'
                                    style={{ height: 52, borderRadius: 5, backgroundColor: '#E8E8E8', padding: 10 }}
                                    // onChangeText={username => this.setState({ username, isError: false, loginFailed: false, isNotFilled: false })}
                                    //  value={this.state.username}
                                    //  editable={!this.state.loading}
                                    autoCapitalize={'none'}
                                    autoCorrect={false}
                                />
                            </View>

                            <View>
                                <TextInput
                                    placeholder="Password"
                                    underlineColorAndroid='transparent'
                                    style={{ height: 52, borderRadius: 5, backgroundColor: '#E8E8E8', padding: 10 }}
                                    // secureTextEntry={true}
                                    // onChangeText={password => this.setState({ password, isError: false, loginFailed: false, isNotFilled: false })}
                                    // value={this.state.password}
                                    editable={!this.state.loading}
                                />

                            </View>

                            <TouchableOpacity onPress={() => {
                                console.log('HELLO');
                                this.props.navigation.navigate('ForgetPassword');
                            }}>
                                <View style={{ marginTop: 15, display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
                                    <Text style={{ color: 'white', fontWeight: '700', color: '#0086F4' }}>
                                        Forget Password?
                            </Text>
                                </View>
                            </TouchableOpacity>

                        </View>

                    </View>
                    <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '40%', marginLeft: 20, marginRight: 20 }}>

                        <TouchableOpacity onPress={() => {
                            console.log('HELLO');
                            this.props.navigation.navigate('Register');
                        }}>
                            <View style={{
                                height: 52, backgroundColor: '#0086F4', borderRadius: 5,
                                justifyContent: 'center',
                            }}>
                                <Text style={{ textAlign: 'center', fontSize: 18, color: 'white', fontWeight: '700' }} >
                                    Login
                            </Text>
                            </View>

                        </TouchableOpacity>

                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
                            <Text style={{ textAlign: 'center', fontSize: 14, color: 'black' }} >
                                Don’t You Have Account?
                            </Text>
                            <Text style={{ color: 'white', fontWeight: '700', color: '#0086F4' }}>
                                Sign Up
                            </Text>
                        </View>


                    </View>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
    },

})
