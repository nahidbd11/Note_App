import {View, Text, StyleSheet, SafeAreaView} from 'react-native'
import React from 'react'


const AddNote = () => {
    return (
        <View className="flex-1 bg-light-300 ">
            <View className="flex-1  ml-6 mt-24">
                <Text className="text-dark-100">Add title and description to your note</Text>
            </View>
        </View>
    )
}


export default AddNote

