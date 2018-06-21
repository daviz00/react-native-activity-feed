import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';



const PostControl = ({num, icon}) => {
  return (
    <View style={styles.container}>
      <Image source={icon} style={styles.controlImage} />
      <Text style={styles.text}>{num}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 12,
    marginBottom: 12,
    marginRight: 40,
  },
  controlImage: {
    height: 24,
    width: 24,
  },
  text: {
    marginTop: 4,
    marginLeft: 4,
    fontWeight: '300',
    opacity: 0.8,
    fontSize: 14
  }
})

export default PostControl;
