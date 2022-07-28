import { StatusBar } from 'expo-status-bar';
import { useCallback } from 'react';
import { StyleSheet, Text, View, Image, FlatList, ListRenderItem } from 'react-native';

type imgArrayType = string[]

const imgArray: imgArrayType = ['https://overcoder.net/img/1/2/99/19825.png',
  'http://pngimg.com/uploads/hedgehog/hedgehog_PNG20.png',
  'http://pngimg.com/uploads/hedgehog/hedgehog_PNG20.png',
  'http://pngimg.com/uploads/hedgehog/hedgehog_PNG20.png',
  'http://pngimg.com/uploads/hedgehog/hedgehog_PNG20.png',
  'http://pngimg.com/uploads/hurricane/hurricane_PNG57.png',
  'http://pngimg.com/uploads/hurricane/hurricane_PNG57.png',
  'http://pngimg.com/uploads/hurricane/hurricane_PNG57.png',
  'http://pngimg.com/uploads/hurricane/hurricane_PNG57.png',
  'http://pngimg.com/uploads/hurricane/hurricane_PNG57.png',
  'http://pngimg.com/uploads/hurricane/hurricane_PNG57.png',
  'http://pngimg.com/uploads/mole/mole_PNG11.png',
  'http://pngimg.com/uploads/mole/mole_PNG10.png',
  'http://pngimg.com/uploads/mole/mole_PNG6.png',
  'http://pngimg.com/uploads/shark/shark_PNG96519.png',
  'http://pngimg.com/uploads/shark/shark_PNG96515.png',
  'http://pngimg.com/uploads/shark/shark_PNG96515.png',
  'http://pngimg.com/uploads/shark/shark_PNG96515.png',
  'http://pngimg.com/uploads/shark/shark_PNG96515.png',
  'http://pngimg.com/uploads/shark/shark_PNG96510.png',
  'http://pngimg.com/uploads/shark/shark_PNG18833.png',
  'http://pngimg.com/uploads/orange/orange_PNG813.png',
  'http://pngimg.com/uploads/orange/orange_PNG813.png',
  'http://pngimg.com/uploads/orange/orange_PNG813.png',
  'http://pngimg.com/uploads/orange/orange_PNG813.png',
]


export default function App() {

  const renderItem: ListRenderItem<string> = useCallback(({item}) => (
    <Image source = {{uri: item}}/>
    
  ), [])
console.log();

  const keyExtractor = useCallback(( index) => index + 1, [])




  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Image style={styles.avatar} source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Avatar_poe84it.png'}}/>
        <View style={styles.publication}>
          <Text style={styles.textN}>54</Text>
          <Text style={styles.textN}>100</Text>
          <Text style={styles.textN}>150</Text>
        </View>
      </View>
      <View  style={styles.folowers}>
        <Text style={styles.text}>Publication</Text>
        <Text style={styles.text}>Followers</Text>
        <Text style={styles.text}>Subscriptions</Text>
      </View>
      <View>
        <FlatList
        data={imgArray}
        numColumns={3}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: 'black',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  box:{
    marginTop: 50,
    marginLeft: 10,
    flexDirection:'row',
    alignItems:'center',
    
  },
  publication:{
    justifyContent: 'space-between',
    flexDirection:'row',
    marginLeft: 50,
    
  },
  folowers:{
    justifyContent: 'space-between',
    flexDirection:'row',
    marginLeft: 70,
    marginRight: 20,
    
  },
  textN: {
    marginRight: 30,
    fontSize: 25,
    color: 'white',
    
  },
  text: {
    fontSize: 15,
    color: 'white', 
  }

});
