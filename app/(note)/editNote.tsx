import {SafeAreaView, StyleSheet, TextInput, View, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import CustomTextInput from "@/components/FloatingInputField";


const AddNote = () => {
    return (
        <SafeAreaView className="flex-1 bg-light-300 ">
            <View className="flex-1  ml-6 mt-24 mr-6">

                <Text className={inputLabelStyle}>Title</Text>
                <CustomTextInput
                    placeHolder="Label"
                    value="sdaf"
                    onChangeText={() => {
                    }}
                    numberOfLines={2}
                    className="mt-4"
                />
                <Text className={`${inputLabelStyle} mt-10` }>Description</Text>
                <CustomTextInput
                    placeHolder="Label"
                    value="sdaf"
                    onChangeText={() => {
                    }}
                    numberOfLines={6}
                    multiline={true}
                    className="mt-4"
                />

                <TouchableOpacity className="bg-accent rounded-lg p-4  mt-10">
                    <Text className="text-light-200 text-center text-xl font-bold">Update Note</Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    )
}



const inputLabelStyle = "text-lg font-bold text-primary"
export default AddNote

