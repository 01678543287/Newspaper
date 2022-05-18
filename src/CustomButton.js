import React from 'react'
import {
    Pressable,
    Text,
    StyleSheet,
} from 'react-native'

const SubmitButton = (props) => {
    return (
        <Pressable
            onPress={props.onPressFunction}
            hitSlop={{ top: 10, right: 10, left: 10 }}
            android_ripple={{ color: '#ff0' }}
            style={({ pressed }) =>
                [
                    { backgroundColor: pressed ? '#000fff' : props.color },
                    styles.button,
                    {...props.style}
                ]}>

            <Text style={styles.text}>
                {props.title}
            </Text>

        </Pressable>
    )
}

const styles = StyleSheet.create({
    text: {
        color: '#000000',
        fontSize: 20,
        fontStyle: 'italic',
        margin: 10,
        textAlign: 'center',
    },
    button: {
        marginBottom: 5,
        width: 150,
        height: 50,
        borderColor: '#000',
        alignItems: 'center',
        borderRadius: 5,
    },
})

export default SubmitButton