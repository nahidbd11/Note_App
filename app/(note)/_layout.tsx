import React from 'react'
import {Stack} from "expo-router";
import {View, Text} from "react-native";

const _Layout = () => {
    return (
        <Stack>
            {/* Default behavior: hide headers for all screens */}
            <Stack.Screen name="index" options={{headerShown: false}}/>

            {/* Override for addNote */}
            <Stack.Screen
                name="addNote"
                options={{
                    headerShown: true,
                    title: 'Add Note',
                    headerTitle: () => (
                        <View className="justify-center  ">
                            <Text className="text-primary font-bold text-lg">Add Note</Text>
                            <Text className="text-primary opacity-50  text-sm">Add title and description to your note</Text>
                        </View>
                    ),

                    headerTransparent: true,
                    headerShadowVisible: false,
                }
                }


            />
        </Stack>
    )
}
export default _Layout
