import { TextInput, TextInputProps, StyleSheet, View, Pressable } from "react-native"
import { useState } from "react"
import { EyeOpenedSVG } from "../../components/svg/eye-opened"
import { EyeClosedSVG } from "../../components/svg/eye-closedy"
import {IInputProps} from "./types"
import { Colors } from "../../constants/colors"

export const Input = (props: TextInputProps & IInputProps) => {
    const [isShowPassword, setIsShowPassword] = useState(false);
    
    return (
        <View style={styles.container}>
            <TextInput secureTextEntry={props.isPassword && !isShowPassword} placeholderTextColor={Colors.placeholder} style={styles.input} {...props}></TextInput> 
            {props.isPassword && 
                <Pressable onPress={() => setIsShowPassword(!isShowPassword)} style={styles.eye}>
                    {isShowPassword ? <EyeOpenedSVG /> : <EyeClosedSVG />}
                </Pressable>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'relative'
    },
    input: {
        color: Colors.white,
        height: 60,
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: Colors.white,
        borderRadius: 5,
        paddingHorizontal: 20,
        fontSize: 18
    },
    eye: {
        position: 'absolute',
        top: 0,
        right: 0,
        paddingHorizontal: 20,
        paddingVertical: 18,
    }
})