import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import COLORS from '../constants/colors'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const Button = (props) => {
    const filledBgColor = props.color || COLORS.primary;
    const outlinedColor = COLORS.white;
    const bgColor = props.filled ? filledBgColor : outlinedColor;
    const textColor = props.filled ? COLORS.white : COLORS.primary;

    return (
        <TouchableOpacity
            style={{
                ...styles.button,
                ...{ backgroundColor: bgColor },
                ...props.style
            }}
            onPress={props.onPress}
        >
            <Text style={{ fontSize: responsiveFontSize(2), ... { color: textColor } }}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        paddingBottom: responsiveHeight(2.3),
        paddingVertical: responsiveHeight(2),
        borderColor: COLORS.primary,
        borderWidth: responsiveWidth(.1),
        borderRadius: responsiveWidth(5),
        alignItems: 'center',
        justifyContent: 'center'
    }
})
export default Button;