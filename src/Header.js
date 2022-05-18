import React from 'react'
import {
    View,
    StyleSheet,
    Text,
} from 'react-native'

const Header = (props) => {
    return (
        <View
            style={styles.view}
        >
            <Text
                style={styles.text}
            >
                React Native Tutorial
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        width: '100%',
        height: 70,
        backgroundColor: '#00f',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#ffff',
    }
})

export default Header