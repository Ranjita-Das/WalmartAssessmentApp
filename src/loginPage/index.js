import React,{Component} from 'react'
import {View, Text,TextInput,Button, ScrollView, TouchableOpacity, Alert} from 'react-native'
import styles from './styles.js'

class Login extends Component{

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }


  static navigationOptions = {
    title: "Welcome",
    headerStyle: { backgroundColor: '#2D7BC7' },
    headerTitleStyle: { color: 'white'},


  }

  validateLogin(){
    var password = this.state.password
    if(/^(?=.*[A-Z])(?=.*['@', '$', '#','!','%','&','*','(',')','_','+','=']).{8,}$/.test(password))
      {this.props.navigation.navigate("List")}
    else {
      Alert.alert(
        'Password is invalid.',
        'Password should be more than 8 characters and have atleast 1 upper case letter and 1 special character'
      )
    }
  }

  render(){
    return(
              <View style={styles.wrapper}>
                <TextInput
                  style={styles.textField}
                  onChangeText={(username) => this.setState({username})}
                  placeholder="Username"
                />

                <TextInput
                  style={styles.textField}
                  onChangeText={(password) => this.setState({password})}
                  placeholder="Password"
                  secureTextEntry={true}
                />

                <TouchableOpacity style={styles.button} onPress={()=>this.validateLogin()}>
                  <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
              </View>

    )
  }
}

export default Login;
