import {ActivityIndicator, SafeAreaView, Text, TouchableOpacity, View} from 'react-native'
import React, {useState} from 'react'
import CustomTextInput from "@/components/FloatingInputField";
import {useLocalSearchParams, useRouter} from "expo-router";
import {useNote} from "@/hooks/useNote";


const EditNote = () => {
    const {note} = useLocalSearchParams();
    const noteData = JSON.parse(note as string);
    const [notee, setNote] = useState(noteData);
    const [title, setTitle] = useState(noteData.title);
    const [description, setDescription] = useState(noteData.description);
    const {updateNote} = useNote();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const router = useRouter();
    const onChangeTitle = (title: string) => {
        setTitle(title);
        setNote({...notee, title});

    }
    const onChangeDescription = (description: string) => {
        setDescription(description);
        setNote({...notee, description});
    }

    const onPressUpdateBtn = async () => {
        setIsLoading(true)
        updateNote(notee);

        await new Promise((resolve) => setTimeout(resolve, 500));
        setIsLoading(false)

        router.navigate("/")
    }
    return (<SafeAreaView className="flex-1 bg-light-300 ">
        <View className="flex-1  ml-6 mt-24 mr-6">

            <Text className={inputLabelStyle}>Title</Text>
            <CustomTextInput
                placeHolder="edit title"
                value={title}
                onChangeText={onChangeTitle}
                numberOfLines={2}
                className="mt-4"
            />
            <Text className={`${inputLabelStyle} mt-10`}>Description</Text>
            <CustomTextInput
                placeHolder="edit description"
                value={description}
                onChangeText={onChangeDescription}
                numberOfLines={6}
                multiline={true}
                className="mt-4"
            />
            {isLoading ? <ActivityIndicator size={"large"} className="mt-10"/> :
                <TouchableOpacity className="bg-accent rounded-lg p-4  mt-10" onPress={onPressUpdateBtn}>
                    <Text className="text-light-200 text-center text-xl font-bold">Update Note</Text>
                </TouchableOpacity>}


        </View>
    </SafeAreaView>)
}


const inputLabelStyle = "text-lg font-bold text-primary"
export default EditNote

