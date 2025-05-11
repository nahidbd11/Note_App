import {Text, View} from 'react-native'
import React from 'react'
import {useLocalSearchParams} from "expo-router";
import {useNote} from "@/hooks/useNote";

const Details = () => {

    const {id} = useLocalSearchParams()
    const {getNoteById} = useNote();
    const note = getNoteById(Number(id));

    return (<View className="flex-1 items-stretch mt-16 ml-6">
        <View className="p-2">
            <Text className="text-xl text-primary font-bold">Title</Text>
            <Text className="text-sm mt-2 text-dark-100">{note?.title}</Text>
        </View>
        <View className="p-2">
            <Text className="text-xl text-primary font-bold">Description</Text>
            <Text className="text-sm mt-2 text-dark-100">{note?.description}</Text>
        </View>

    </View>)
}
export default Details
