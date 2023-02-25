import React from "react";
import {View, StyleSheet, TextInput, Text, Button} from "react-native";

export default function Login1(props) {
    console.log(props)
    const { navigation } = props
    return(
        <View style={styles.container}>
            <View>
                <View style={styles.linea}>
                    <Text style={{fontSize: 20}}>Matricula:</Text>
                    <TextInput
                        style={{fontSize: 15}}
                        placeholder="Matriucla"
                        keyboardType="default"
                    />
                </View>
                <View style={[styles.linea, {top: 40,}]}>
                    <Text style={{fontSize: 20}}>Contraseña:</Text>
                    <TextInput
                        style={{fontSize: 15, borderColor: 'black', border:1}}
                        placeholder="Contraseña"
                        keyboardType="default"
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        left: "10%",
        width: "80%",
        top: "20%"
    },
    linea: {
        borderBottomColorColor: "black",
        borderBottomWidth: 1,
    },
    personal: {

    }
});