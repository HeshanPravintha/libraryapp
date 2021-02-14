import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity , KeyboardAvoidingView  , Keyboard} from 'react-native'
import { theme } from '../../../../src/style/index';

export default class Register extends Component {


    static navigationOptions = {
        headerShown: false
    };

    state = {
        isKeyboardOpen: false
    }


    componentDidMount(){
        if(Platform.OS == 'ios'){
            this.ListenerWillShow = Keyboard.addListener('keyboardWillShow', () => {
              //console.log('keyboardopen');
              this.setState({
                isKeyboardOpen: true
              })
            })
            this.ListenerWillHide = Keyboard.addListener('keyboardWillHide', () => {
              //console.log('closed');
              this.setState({
                isKeyboardOpen: false
              })
            })
          }else{
            this.ListenerWillShow = Keyboard.addListener('keyboardDidShow', () => {
              //console.log('keyboardopen');
              this.setState({
                isKeyboardOpen: true
              })
            })
            this.ListenerWillHide = Keyboard.addListener('keyboardDidHide', () => {
              //console.log('closed');
              this.setState({
                isKeyboardOpen: false
              })
            })
          }
      
    }


    render() {
        console.log(this.state.isKeyboardOpen);
        return (
            <KeyboardAvoidingView
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
            style={styles.container}>
    
            <View style={styles.container}>
         
                <View style={{
                    display: 'flex', flexDirection: 'column',
                    height: !this.state.isKeyboardOpen ? '35%' : '10%', justifyContent: 'flex-end', alignItems: 'center'
                }}>
                    { !this.state.isKeyboardOpen ? 
                    <Image source={require('../../../../assets/images/standing.png')} style={{ marginBottom: 40 }} />
                    : null
                }
                    
                </View>

              

                <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height:!this.state.isKeyboardOpen ?  '65%' : '90%' ,}}>
                    <View style={{
                        display: 'flex', flexDirection: 'column', height: '60%',
                        marginLeft: 20, marginRight: 20
                    }}>

                        <Text style={theme.title_header}>
                            Register
                        </Text>

                        <View style={{ display: 'flex', marginTop: 40 ,  marginBottom : 100 }}>
                            <View style={{ marginBottom: 15 }}>
                                <TextInput
                                    placeholder="Name"
                                    underlineColorAndroid='transparent'
                                    style={{ height: 52, borderRadius: 5, backgroundColor: '#E8E8E8', padding: 10 }}
                                    // onChangeText={username => this.setState({ username, isError: false, loginFailed: false, isNotFilled: false })}
                                    //  value={this.state.username}
                                    //  editable={!this.state.loading}
                                    autoCapitalize={'none'}
                                    autoCorrect={false}
                                />
                            </View>

                            <View style={{ marginBottom: 15 }}>
                                <TextInput
                                    keyboardType = 'numeric'
                                    placeholder="Contact No"
                                    underlineColorAndroid='transparent'
                                    style={{ height: 52, borderRadius: 5, backgroundColor: '#E8E8E8', padding: 10 }}
                                    // secureTextEntry={true}
                                    // onChangeText={password => this.setState({ password, isError: false, loginFailed: false, isNotFilled: false })}
                                    // value={this.state.password}
                                    //editable={!this.state.loading}
                                />

                            </View>

                            <View style={{ marginBottom: 15 }}>
                                <TextInput
                                    placeholder="Email"
                                    underlineColorAndroid='transparent'
                                    style={{ height: 52, borderRadius: 5, backgroundColor: '#E8E8E8', padding: 10 }}
                                    // secureTextEntry={true}
                                    // onChangeText={password => this.setState({ password, isError: false, loginFailed: false, isNotFilled: false })}
                                    // value={this.state.password}
                                    //editable={!this.state.loading}
                                />

                            </View>

                            <View style={{ marginBottom: 15 }}>
                                <TextInput
                                    placeholder="Password"
                                    underlineColorAndroid='transparent'
                                    style={{ height: 52, borderRadius: 5, backgroundColor: '#E8E8E8', padding: 10 }}
                                    // secureTextEntry={true}
                                    // onChangeText={password => this.setState({ password, isError: false, loginFailed: false, isNotFilled: false })}
                                    // value={this.state.password}
                                    //editable={!this.state.loading}
                                />

                            </View>


                        </View>

                    </View>
                    <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '40%', marginLeft: 20, marginRight: 20 }}>

                        <TouchableOpacity onPress={()=>{
                            console.log('HELLO');
                            this.props.navigation.navigate('Register');
                        }}>
                            <View style={{
                                height: 52, backgroundColor: '#0086F4', borderRadius: 5,
                                justifyContent: 'center',
                            }}>
                                <Text style={{ textAlign: 'center', fontSize: 18, color: 'white', fontWeight: '700' }} >
                                    Register
                            </Text>
                            </View>

                        </TouchableOpacity>

                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
                            <Text style={{ textAlign: 'center', fontSize: 14, color: 'black' }} >
                                Don’t You Have Account?
                            </Text>
                            <Text style={{ color: 'white', fontWeight: '700', color: '#0086F4' }}>
                                Sign In
                            </Text>
                        </View>


                    </View>
                </View>

            </View>
        </KeyboardAvoidingView>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
    },

})