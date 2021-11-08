import React, {useState} from 'react';
import { View,ImageBackground, StyleSheet ,Alert} from 'react-native';
import { Input, Box,Text, Button, Center, NativeBaseProvider } from "native-base"


const image = require('../images/wallpaper.jpg')
 
 
 
  const Home = () => {
  
    const [boy, setBoy] = useState(0);
    const [kilo, setKilo] = useState(0);
    const [gosterGizle, setgosterGizle] = useState(true);
    const [bkindeks , setBkindeks] = useState(0);
    const [durum,setDurum] = useState("")
    const [inputKontrol , setinputKontrol] = useState("")
    const [inputKontrol2 , setinputKontrol2] = useState("")
    const [idealKilo , setidealKilo] = useState(0)
    const [idealKiloYazi , setidealKiloYazi] = useState(false)
    function yazdir()
{
   if(boy==0 || kilo==0)
    {Alert.alert("Boş yerleri doldurun")}
   else setgosterGizle(false)
    let indeks : number;
    let eksikKiloHesapla : number;
     indeks = kilo/((boy/100)*(boy/100))
     setBkindeks(Number(indeks.toPrecision(4)))
    
     if(indeks<18.5) setDurum("Düşük kilolusunuz.")

     if(18.5<indeks&&indeks<25) setDurum("Normal kilolusunuz")

     if(25<indeks&&indeks<30) {
         setDurum("Fazla kilolusunuz")
         setidealKiloYazi(true)
     for (let index = kilo; 0 < index; index--) {
         eksikKiloHesapla = index/((boy/100)*(boy/100))
        if(18.5<eksikKiloHesapla&&eksikKiloHesapla<25)
        {
            setidealKilo(kilo-index)
            break;
        }
        
    }}
     if(30<indeks) {
         setDurum("Obez sınırları içerisindesiniz")
         setidealKiloYazi(true)

     for (let index = kilo; 0 < index; index--) {
        eksikKiloHesapla = index/((boy/100)*(boy/100))
       if(18.5<eksikKiloHesapla&&eksikKiloHesapla<25)
       {
           setidealKilo(kilo-index)
           break;
       }
       
   }
    }

         
    

    
}
function tekrarHesapla () {
   setgosterGizle(true)
   setidealKiloYazi(false)
}

function boyAta (val:string) {
    setBoy(Number(val))
}

function kiloAta(val:string) {
    setKilo(Number(val))
}

  return(
      
      gosterGizle==true?
    <View style = {styles.centered}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text fontWeight="semibold" letterSpacing="5" fontSize="3xl" color="amber.100">Beden Kitle İndeksi</Text>

    <Box w="50%">
 
        <Input color="white"  keyboardType="numeric" onChangeText={boyAta} borderColor ="amber.100" variant="rounded" placeholder="Boyunuzu girin" mt ="10" isRequired/>

        <Input color="white" keyboardType="numeric" onChangeText={kiloAta} borderColor ="amber.100" variant="rounded" placeholder="Kilonuzu girin" mt ="10" isRequired/>

        <Button bg="amber.100" onPress={() =>yazdir()} mt ="10">Hesapla</Button>
    </Box>
         </ImageBackground>
    </View> : <View style = {styles.centered}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text fontWeight="semibold"   fontSize="2xl" color="secondary.200">Beden Kitle İndeksiniz </Text>
        <Text fontWeight="bold"   fontSize="xl" color="amber.100">{bkindeks} </Text>
       
        <Text mt="10" fontWeight="semibold"   fontSize="2xl" color="secondary.200">Durum </Text>
        <Text fontWeight="bold"   fontSize="xl" color="amber.100">{durum} </Text>

{ idealKiloYazi==true?<Text fontWeight="bold" mt="3"  fontSize="xl" color="amber.100"> {idealKilo} kilo vermeniz lazım </Text>
:<Text></Text>
}
        <Button width="200" bg="amber.100" onPress={() =>tekrarHesapla()} mt ="10">Tekrar Hesapla</Button>

    <Box w="50%">
 
        
    </Box>
         </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({

    centered : {
        flex : 1 ,
        alignItems : "center" ,
        justifyContent: 'center',
         
    } ,
    image : {
        flex :1 ,
        justifyContent :"center",
        alignItems : "center" ,
        alignSelf:"stretch"
    }

})

export default Home;

 

 