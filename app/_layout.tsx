import {Stack} from "expo-router";
import '../global.css'
import {StatusBar} from "react-native";


export default function RootLayout() {
    return <>
        <StatusBar
            hidden={false}
            backgroundColor="#f1f0f5"
        />
        <Stack>

            <Stack.Screen
                name="(note)"
                options={
                    {
                        headerShown: false,
                    }
                }
            />

        </Stack>
    </>

}
