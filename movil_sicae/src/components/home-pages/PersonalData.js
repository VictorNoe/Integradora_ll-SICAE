import React from "react";
import {Text, View, StyleSheet} from "react-native";

export default function PersonalData() {
    return (
        <View style = {styles.columnCenter}>
            <View style = {styles.columnOne}>
                <Text>Matricula</Text>
                <Text>20213tn059</Text>

                <Text>Cuatrimestre</Text>
                <Text>5</Text>
            </View>
            <View style = {styles.columnOne}>
                <Text>Carrera</Text>
                <Text>DSM</Text>

                <Text>Grupo</Text>
                <Text>B</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    columnOne: {
        flexDirection: 'row'
    },
    columnCenter: {
        flex: 1,
        textAlign: 'center'
    }
})