import {FlatList, Text, ToastAndroid, TouchableOpacity, View} from "react-native";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialIconButton from "@/components/MaterialIconButton";
import {useRouter} from "expo-router";
import {useNote} from "@/hooks/useNote";
import {NoteModel} from "@/Models/NoteModel";
import {useEffect} from "react";


function NoteActionComponent(props: { onEditPress: () => void, onDeletePress: () => void }) {


    return <>
        <MaterialIconButton
            icon="edit-note"
            color="#182625"
            backgroundColor="transparent"
            onPress={props.onEditPress}
        />
        <MaterialIconButton
            icon="delete-outline"
            color="#a369a0"
            backgroundColor="transparent"
            onPress={props.onDeletePress}
        />
    </>;
}

class Note {
    id: string;
    title: string;
    content: string;
    createdAt?: Date;
    updatedAt?: Date;

    constructor(id: string, title: string, content: string, createdAt?: Date, updatedAt?: Date) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}

const FlatItem = ({item}: { item: NoteModel }) => {
    const router = useRouter();
    const {deleteNote} = useNote();

    function onDelete() {
        deleteNote(item.id);
        ToastAndroid.showWithGravity("Deleted successfully !!", ToastAndroid.SHORT, ToastAndroid.BOTTOM)
    }

    return <View className="bg-light-200 rounded-2xl p-4 mt-2 ">
        <TouchableOpacity onPress={() => router.push({
            pathname: '/(note)/[id]',
            params: { id: item.id }
        })}>
            <View className="flex-row   justify-between space-x-6">
                <Text className="text-primary flex-1 w-1/2  text-xl  " numberOfLines={1}>
                    {item.title}
                </Text>
                <View className="flex-row ml-6 gap-x-2">
                    <NoteActionComponent
                        onEditPress={() => router.navigate({
                            pathname:'/editNote',
                            params: {
                                note:JSON.stringify(item)
                            }
                        })}
                        onDeletePress={onDelete}
                    />
                </View>

            </View>

            <Text className="text-primary opacity-50 text-sm mt-1" numberOfLines={1}>{item.description}</Text>
        </TouchableOpacity>

    </View>;
}


export default function Index() {
    const router = useRouter();
    const {notes, deleteNote, updateNote, refreshNotes} = useNote();
    useEffect(() => {
        refreshNotes()
    }, []);


    return (<View className="flex-1  bg-light-300   w-full">
        <View className="flex-1 items-stretch mt-10 ml-6">
            <View className="flex-row items-center mt-10 ">
                <Text className="text-3xl text-primary font-bold ">My Notes</Text>
                <MaterialIcons name="sticky-note-2" size={24} color="text-primary" className="ml-2"/>
            </View>
            <Text className="text-primary text-sm">Keep your notes offline and
                manage your task easily</Text>
            <View className="mt-14 flex-row items-center justify-between">
                <Text className="text-primary  font-bold text-lg  mr-6">All Notes</Text>


            </View>

            <FlatList
                keyExtractor={(item) => item.id.toString()}
                showsVerticalScrollIndicator={false}
                data={notes}
                renderItem={({item}) => <FlatItem item={item}/>}

                ListEmptyComponent={() =>

                    <View className="flex-1 items-center justify-center h-[300px]">
                        <Text className="text-gray-500 text-center text-lg">
                            You have no notes yet.please add a note
                        </Text>
                    </View>


                }
                className="mt-2 mr-6 mb-5"

            />


        </View>
        <TouchableOpacity
            onPress={() => {
                router.navigate("/(note)/addNote")
            }}
            className="flex-row items-center bg-accent rounded-full p-4 mr-6 absolute bottom-20 right-0 z-10 elevation-lg "
        >
            <MaterialIcons name={"add"} size={24} color="white"/>

        </TouchableOpacity>

    </View>);
}
