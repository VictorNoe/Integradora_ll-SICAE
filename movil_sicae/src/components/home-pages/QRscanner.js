import React, {useEffect, useState} from "react";
import {Button, Text, View, StyleSheet } from "react-native";
import colors from "../../utils/colors";
import { BarCodeScanner } from "expo-barcode-scanner";

export default function QRscanner(props) {
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
                <Text style={styles.maintext}>{text}</Text>
                {scanned && <Button title={'Escaneame puto?'} onPress={() => setScanned(false) } color='tomato'/> }
            </View>
        )
    }
    return (
        <View>
            <View style={styles.barcodebox}>
                <BarCodeScanner
                    onBarCodeScanned={scanned ? undefined : handleBarCodeScanner}
                    style = {{height: 250, width: 250}}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    barcodebox: {
        alignItems: 'center',
        justifyContent: "center",
        height: 300,
        width: 300,
        overflow: 'hidden',
        borderRadius: 18,

    }
})

