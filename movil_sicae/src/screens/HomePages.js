import React, {useState, useEffect} from "react";
import {Button, Text, View, StyleSheet, Image} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import colors from "../utils/colors"

export default function HomePages() {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [text, setText] = useState('');

    const askForCamarePermission = () => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status == 'granted')
        })()
    }

    useEffect(()=>{
        askForCamarePermission();
    },[]);

    const handleBarCodeScanner = ({type, data}) => {
        setScanned(true);
        setText(data);
        console.log('Type: ' + type + '\nData: ' + data)
    }

    if(hasPermission === null){
        return (
            <View style={styles.container}>
                <Text>Requiere permiso de camara</Text>
            </View>
        )
    }

    if(hasPermission === false){
        return (
            <View style={styles.container}>
                <Text style={{margin: 10}}>No acceso a camara</Text>
                <Button title={'Allo Camare'} onPress={()=>askForCamarePermission()}/>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.barcodebox}>
                <BarCodeScanner
                    onBarCodeScanned={scanned ? undefined : handleBarCodeScanner}
                    style = {{height: 250, width: 250}}
                />
            </View>
            <Text style={styles.maintext}>{text}</Text>
            {scanned && <Button title={'Escaneame puto?'} onPress={() => setScanned(false) } color='tomato'/> }
            <View style={styles.abajo}>
                <Text style={{textAlign: "center", top: 10, fontSize: 22}}>Información Personal</Text>
                <Image
                    style={[{ width: 100, height: 100, marginBottom: 15, borderRadius: 100}]}
                    source={require("../img/iconoLogin.png")}
                />
                <Text>Flores Toledo Victor Noe</Text>
            </View>
            <View>

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
    barcodebox: {
        alignItems: 'center',
        justifyContent: "center",
        height: 300,
        width: 300,
        overflow: 'hidden',
        borderRadius: 18,
        top: 30
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