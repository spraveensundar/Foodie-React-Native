import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'


const OrderPrepairingScreen = () => {

  const navigation = useNavigation();

  useEffect(()=>{
    setTimeout(()=>{
        navigation.navigate("Delivery")
    },3000)
  },[])
  return (
    <View className="flex-1 bg-white justify-center items-center">
      <Image source={require("../assets/images/bikeGuy2.gif")} className="w-80 h-80"/>
    </View>
  )
}

export default OrderPrepairingScreen;