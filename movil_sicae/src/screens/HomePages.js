import React, {useState, useEffect} from "react";
import {Button, Text, View, StyleSheet, Image} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import colors from "../utils/colors"

import QRscanner from "../components/home-pages/QRscanner";
import PersonalData from "../components/home-pages/PersonalData";


export default function HomePages(props) {
    return (
        <View style={styles.container}>
            <View>
                <QRscanner/>
            </View>
            <View style={styles.abajo}>
                <View>
                    <Text style={{textAlign: "center", top: 10, fontSize: 22}}>Información Personal</Text>
                    <Image
                        style={[{ width: 100, height: 100, marginBottom: 15, borderRadius: 100}]}
                        source={require("../img/iconoLogin.png")}
                    />
                    <Text>Flores Toledo Victor Noe</Text>
                </View>
                <View>
                    <PersonalData/>
                </View>
                <View>
                    <Image
                        style={{width: 60, height: 60, top: 400, }}
                        source={require("../img/LogoMiniUtez.jpg")}
                    />
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({

      container: {
          flex: 1,
          alignItems: "center",
          backgroundColor: colors.GREEN_UTEZ,
      },
    maintext: {
        fontSize: 16,
        margin: 20,
    },
    abajo: {
          backgroundColor: "#fff",
        width: "100%",
        flex: 1,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    }
});