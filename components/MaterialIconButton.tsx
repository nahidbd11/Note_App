import {View, Text, PressableProps, Pressable, StyleProp, ViewStyle, TouchableOpacityProps, TouchableOpacity} from 'react-native'
import React from 'react'
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

interface IconButtonProps extends TouchableOpacityProps {
    icon: keyof typeof MaterialIcons.glyphMap; // strictly typed icon names
    size?: number;
    color?: string;
    backgroundColor?: string,
    style?: StyleProp<ViewStyle>; // ✅ This is the fix
}

const MaterialIconButton: React.FC<IconButtonProps> = ({
                                                           icon,
                                                           size = 24,
                                                           color = 'white',
                                                           backgroundColor = 'transparent',
                                                           style,
                                                           ...props
                                                       }) => {
    return (
        <TouchableOpacity
            style={
                style
            }
            {...props}
        >
            <MaterialIcons name={icon} size={size} color={color}/>
        </TouchableOpacity>
    );
};

export default MaterialIconButton
