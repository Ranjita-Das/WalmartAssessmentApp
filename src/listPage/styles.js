import {StyleSheet, Dimensions} from 'react-native';

const deviceWidth =Dimensions.get('window').width;
const deviceHeight =Dimensions.get('window').height;
const inputSize = deviceWidth * 0.7;

const styles={

  itemRow:{
    height: deviceWidth*0.18,
    justifyContent:'center',
    padding:20,
    borderWidth:0.5,
    borderColor:'gray',
  },
  itemText:{
    fontSize:deviceHeight*0.025,
  },
  itemImage:{
    height:60,
    width:60,
    alignItems:'center',
    justifyContent:'center',
  },
  img:{
    height:45,
    width:45,
  },
  imgCol:{
    justifyContent:'center',
  },
  textCol:{
    justifyContent:'center',
  },
  backButton:{
    padding: 20,
  }
}

export default styles;
