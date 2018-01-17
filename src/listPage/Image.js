
import React from 'react';
import { Image, View } from 'react-native';
import itemImage from './alpha.png'
import styles from './styles'


const ItemImage = () => (
  <View style={styles.itemImage}>
    <Image source={itemImage} style={styles.img}/>
  </View>
)

export default ItemImage;
