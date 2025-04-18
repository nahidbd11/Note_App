import {ActivityIndicator, SafeAreaView, Text, TouchableOpacity, View} from 'react-native'
import React, {useState} from 'react'
import CustomTextInput from "@/components/FloatingInputField";
import {NoteModel} from "@/Models/NoteModel";
import {useNote} from "@/hooks/useNote";
import {useRouter} from "expo-router";


const AddNote = () => {
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const {addNote} = useNote();
    const router = useRouter();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const onClickSave = async () => {
        setIsLoading(true)
        const note: NoteModel = {
            id: Math.floor(Math.random() * 1000000), title, description, createdAt: new Date(), updatedAt: new Date()
        }
        addNote(note)
        //show loader
        await new Promise((resolve) => setTimeout(resolve, 500));
        setIsLoading(false)
        router.navigate("/")

    }

    return (<SafeAreaView className="flex-1 bg-light-300 ">
        <View className="flex-1  ml-6 mt-24 mr-6">

            <Text className={inputLabelStyle}>Title</Text>
            <CustomTextInput
                placeHolder="enter title"
                value={title}
                onChangeText={(text) => {
                    setTitle(text)
                }}
                numberOfLines={2}
                className="mt-4"
            />
            <Text className={`${inputLabelStyle} mt-10`}>Description</Text>
            <CustomTextInput
                placeHolder="your description"
                value={description}
                onChangeText={(text) => {
                    setDescription(text)
                }}
                numberOfLines={6}
                multiline={true}
                className="mt-4"
            />
            {isLoading ? <ActivityIndicator  size={"large"} className="mt-10"/> :
                <TouchableOpacity className="bg-accent rounded-lg p-4  mt-10" onPress={() => onClickSave()}>
                    <Text className="text-light-200 text-center text-xl font-bold">Save</Text>
                </TouchableOpacity>}


        </View>
    </SafeAreaView>)
}


const inputLabelStyle = "text-lg font-bold text-primary"
export default AddNote

