import React, {Component} from 'react'
import {View, Text, TouchableHighlight, ScrollView, Alert, TouchableOpacity} from 'react-native'
import Swipeout from 'react-native-swipeout';
import { Icon } from 'react-native-elements'
import { Row,Col, Grid } from 'react-native-easy-grid';
import items from '../items'
import styles from './styles'
import ItemImage from './Image'


class List extends Component{
  constructor(props){
    super(props)
    this.state={
      items
    }
  }

  static navigationOptions = ({navigation}) => ({
    title: "List View",
    headerStyle: { backgroundColor: '#2D7BC7' },
    headerTitleStyle: { color: 'white'},
    headerTintColor: 'white',
    headerLeft: <View style={styles.backButton}><Icon name='ios-arrow-back' type='ionicon' color='white' onPress={()=> {navigation.goBack()}}/></View>
  })


  deleteYes(id, items){
    var idToDelete = id;
    this.state.items=items.filter(item=>item.id !=idToDelete)
    this.setState({items:this.state.items})
    console.log("The id deleted is:", id)
    items.map(
      (item,i) =>console.log(item.id)
    )
  }

  delete(id, items){
    Alert.alert(
      'Alert',
      'Are you sure you want to delete?',
      [
        {text:'Yes', onPress: ()=>this.deleteYes(id, items)},
        {text:'Cancel', onPress:()=>console.log("Cancel Pressed")}
      ],
      {cancelable:'true'}
    )
  }


  render(){

    return(
      <View>
        <ScrollView>
        {this.state.items.map(
          (item, i)=>
            <Swipeout right={[{
              text: <View><Icon name='ios-trash' type='ionicon' color='white'/><Text style={{color:'white'}}>DELETE</Text></View>,
              backgroundColor: '#D92E20',
              underlayColor: 'rgba(0, 0, 0, 0.6)',
              onPress: ()=>this.delete(item.id, this.state.items)
            }]}
              autoClose='true'
              backgroundColor= 'transparent'>
              <TouchableHighlight
                underlayColor='rgba(192,192,192,0.6)'>
                <Grid style={styles.itemRow}>
                  <Col size={1.1} style={styles.imgCol}>
                    <ItemImage />
                  </Col>
                  <Col size={3.9} style={styles.textCol}>
                    <Text style={styles.itemText}>{item.title}</Text>
                  </Col>
                </Grid>
              </TouchableHighlight>
            </Swipeout>
          )}
          </ScrollView>
      </View>
    )
  }
}

export default List;
