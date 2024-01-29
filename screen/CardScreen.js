import { View, Text, StyleSheet,TouchableOpacity, Image, ScrollView} from 'react-native'
import React from 'react'
import * as Icon from "react-native-feather";
import { themeColors } from '../theme';
import { useNavigation } from '@react-navigation/native';
import { featured } from '../constants';


const CardScreen = () => {

  const restaurant=featured.restaurants[0]

  const navigation = useNavigation();
  return (

     <>
    <View className="flex-1 bg-white">

      <View className="flex-row relative justify-between mb-5 mt-14">

      <View>
      <TouchableOpacity   
         onPress={()=>navigation.goBack()}
            className="absolute ml-4 bg-white p-2 shadow rounded-full" style={{backgroundColor:themeColors.text}}>
                <Icon.ArrowLeft strokeWidth={3} width={20} height={20} color={"white"}/>
       </TouchableOpacity>
      </View>

       <View>
          <Text className="text-2xl text-black font-bold">Your Card</Text>
          <Text className="text-center">{restaurant.name}</Text>
       </View>

       <View>

       </View>

      </View>


      {/*--Items--*/}
      <View style={{backgroundColor:themeColors.bgColor(0.2)}} className="flex-row items-center justify-between px-3">
        <Image source={require("../assets/images/bikeGuy.png")} className="w-28 h-28"/>
        <Text className="text-neutral-900">Deliver in 20-30 minutes</Text>
        <Text className="font-bold text-orange-600 text-md">Change</Text>
      </View>

        {/*--Dish--*/}

        <ScrollView
         showsVerticalScrollIndicator={false}
         contentContainerStyle={{
          paddingBottom:50,
         }}>

          {
            restaurant.dishes.map((dish,index)=>{
              return(
                <View key={index}
                className="flex-row items-center mx-4 my-4 shadow-3xl p-2 rounded-full">
                  <Text className="font-bold text-orange-600 text-md">2 x</Text>
                  <Image source={dish.image} className="w-20 h-20 rounded-full ml-2"/>
                  <Text className="flex-1 text-gray-700 font-bold text-xl ml-4">{dish.name}</Text>
                  <Text className="font-bold text-black text-xl mr-2">${dish.price}</Text>
                  <TouchableOpacity
                      className="p-1 rounded-full"
                      style={{backgroundColor:themeColors.bgColor(1)}}>
                      <Icon.Minus width={20} height={20} stroke={"white"}/>
                    </TouchableOpacity>
                </View>
              )
            })
          }
        </ScrollView>

            <View style={{backgroundColor:themeColors.bgColor(0.2)}} className="flex p-6 px-8 rounded-t-3xl">

              <View className="flex-row justify-between">
                <Text className="text-lg text-black mb-3">Subtotal</Text>
                <Text className="text-lg text-black mb-3">$20</Text>
              </View>

              <View className="flex-row justify-between">
                <Text className="text-lg text-black mb-3">Deilvery Fee</Text>
                <Text className="text-lg text-black mb-3">$20</Text>
              </View>

              <View className="flex-row justify-between">
                <Text className="text-lg text-black mb-3 font-bold">Order Total</Text>
                <Text className="text-lg text-black mb-3 font-bold">$20</Text>
              </View>

              <TouchableOpacity onPress={()=>navigation.navigate("Order")} className="p-4 rounded-full" style={{backgroundColor:themeColors.bgColor(2)}}>
                  <Text className="text-center text-xl font-bold text-white">Place Order</Text>
              </TouchableOpacity>
            </View>
    </View> 

    </>

  )
}

export default CardScreen;