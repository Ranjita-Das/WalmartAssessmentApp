import {StyleSheet, Dimensions} from 'react-native';

const deviceWidth =Dimensions.get('window').width;
const deviceHeight =Dimensions.get('window').height;
const inputSize = deviceWidth * 0.7;

const styles={
  wrapper :{
    alignItems: 'center',
    marginTop: deviceHeight*0.1,
  },
  textField: {
    width: inputSize,
    height: 40,
    borderBottomWidth: 1,
    margin: 20,
    fontSize:deviceHeight*0.028,
    color:'black'
  },
  button:{
    backgroundColor: '#2D7BC7',
    width: inputSize,
    marginTop: deviceHeight*0.05,
    height: 50,
    alignItems:'center',
    justifyContent:'center'

  },
  buttonText:{
    color:'white',
    fontSize:deviceHeight*0.026
  }
}

export default styles;
