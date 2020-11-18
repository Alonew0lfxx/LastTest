import React from 'react';
import {StyleSheet, Text, View, FlatList, SafeAreaView, TouchableNativeFeedback} from 'react-native';

import data from "./src/data/exampleData"

class App extends React.Component {
    renderListItem = ({item, index}) => {
        return(
           <TouchableNativeFeedback>
               <View
                   style={{
                       backgroundColor: 'rgba(255,255,255,0.5)',
                       marginBottom: 10,
                       marginRight: 7,
                       borderRadius: 5,
                       flex: 1,
                       flexDirection: 'row',
                       marginLeft: 7,
                   }}>

                   <View style={{
                       width:36,
                       height:36,
                       margin: 5,
                       justifySelf: 'center',
                       alignSelf: 'center',
                       justifyContent: 'center',
                       alignItems:'center',
                       backgroundColor: 'rgba(0,0,0,0.3)',
                       borderRadius: 50,
                   }}>
                       <Text style={{fontSize:24,color:'#fff'}}>{item.name.charAt(0)}</Text>
                   </View>


                   <View style={{flexDirection:'column', margin:5}}>

                       <Text style={{fontSize:16,}}>{item.name}</Text>
                       <Text>{item.age}</Text>
                       <Text>{item.city}</Text>
                   </View>

               </View>

           </TouchableNativeFeedback>
        );
    };

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <FlatList
                    renderItem={this.renderListItem}
                    keyExtractor={(item,index) => index.toString()}
                    data={data}
                />
            </SafeAreaView>);
    }
}

export default App;

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#6b65ee',
    },
});
