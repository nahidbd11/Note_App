import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

interface PropTypes {
    value: string;
    placeHolder: string;
    onChangeText: (text: string) => void;
    multiline?: boolean; // optional prop for textarea-like input
    numberOfLines?: number;
    className?: string; // optional prop for custom styling
}

const CustomTextInput = ({
                                      placeHolder,
                                      value,
                                      onChangeText,
                                      multiline = false,
                                      numberOfLines = 4, // default lines for textarea
      className,
                                  }: PropTypes) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <View >
            <TextInput
                value={value}
                onChangeText={onChangeText}
                placeholder={placeHolder}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                multiline={multiline}
                numberOfLines={numberOfLines}
                className={className}
                style={[
                    styles.input,
                    multiline && styles.textArea,
                    { borderColor: isFocused ? '#866390' : '#182625' },
                ]}
                textAlignVertical={multiline ? 'top' : 'center'} // aligns text to top in textarea mode
            />
        </View>
    );
};

const styles = StyleSheet.create({

    input: {
        borderWidth: 1,
        borderRadius: 4,
        height: 50,
        fontSize: 16,
        paddingHorizontal: 12,
        paddingTop: 14,
    },
    textArea: {
        height: 120, // you can customize height as needed
        paddingTop: 12,
        paddingBottom: 12,
    },
});

export default CustomTextInput;
