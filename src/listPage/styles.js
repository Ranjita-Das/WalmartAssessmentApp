import {StyleSheet, Dimensions} from 'react-native';

const deviceWidth =Dimensions.get('window').width;
const deviceHeight =Dimensions.get('window').height;


const styles={

  itemRow:{
    height: deviceWidth*0.18,
    justifyContent:'center',
    padding:deviceHeight*0.025,
    borderWidth:deviceHeight*0.0010,
    borderColor:'#B0B0B0',
  },
  itemText:{
    fontSize:deviceHeight*0.025,
  },
  itemImage:{
    height:deviceWidth*0.15,
    width:deviceWidth*0.15,
    alignItems:'center',
    justifyContent:'center',
  },
  img:{
    height:deviceWidth*0.13,
    width:deviceWidth*0.13,
  },
  imgCol:{
    justifyContent:'center',
  },
  textCol:{
    justifyContent:'center',
  },
  backButton:{
    padding: deviceWidth * 0.05,
  }
}

export default styles;
