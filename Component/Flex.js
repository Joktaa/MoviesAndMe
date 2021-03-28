import React from 'react'
import { View } from 'react-native'

class Flex extends React.Component {
    render(){
        return (
            // <View style={{flex: 1, backgroundColor: 'yellow', flexDirection: 'row'}}>
            //     <View style={{flex: 1, backgroundColor: 'red'}}></View>
            //     <View style={{flex: 2, backgroundColor: 'green'}}></View>
            // </View>

            // <View style={{flex: 1, backgroundColor: 'yellow', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center'}}>
            //     <View style={{height: 50, width: 50, backgroundColor: 'blue'}}></View>
            //     <View style={{height: 50, width: 50, backgroundColor: 'white'}}></View>
            //     <View style={{height: 50, width: 50, backgroundColor: 'red'}}></View>
            // </View>

            <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{flex: 1, backgroundColor: 'blue'}}></View>
                <View style={{flex: 1, backgroundColor: 'white'}}></View>
                <View style={{flex: 1, backgroundColor: 'red'}}></View>
            </View>

        )}
}

export default Flex;