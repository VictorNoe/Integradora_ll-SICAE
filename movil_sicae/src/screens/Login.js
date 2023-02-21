import React from "react";
import {Image, StatusBar, StyleSheet, Text, View, TouchableOpacity} from "react-native";
import colors from "../utils/colors";
import Login1 from "../components/login/Login";
export default function Login(props) {
    const {navigation} = props
    return (
        <View>
            <StatusBar style={'light-content'}/>
            <View style={styles.logo}>
                <View style={[styles.container, styles.logo, {height: "45%"}]}>
                    <View style={{alignItems: "center"}}>
                        <Image
                            style={[{ width: 150, height: 150, marginBottom: 15, borderRadius: 100}]}
                            source={require("../img/LogoMiniUtez.jpg")}
                        />
                        <Text style={{fontSize:30, color: "white", fontWeight: 'bold'}}>Bienvenido</Text>
                    </View>
                </View>
                <View style={styles.login}>
                    <Login1/>
                    <View style={{top: 170,alignItems: "center"}}>
                        <TouchableOpacity
                            style={styles.btn}
                            onPress={
                                ()=>navigation.navigate("home1")
                            }
                        >
                            <Text style={styles.textNavi}>Iniciar Sesion</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View>

                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    textNavi: {
        fontSize: 16,
        textAlign: "center",
        fontWeight: "bold",
        color: "white"
    },
    btn: {
        alignItems: "center",
        padding: 15,
        borderRadius: 18,
        width: "80%",
        backgroundColor: colors.GREEN_UTEZ
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    login: {
        backgroundColor: "#fff",
        width: "100%",
        height: "55%",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    },
    logo: {
        backgroundColor: colors.GREEN_UTEZ,
        width: "100%",
        height: "100%"
    },
});