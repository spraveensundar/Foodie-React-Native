import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { featured } from '../constants';
import { useNavigation } from '@react-navigation/native';
import { themeColors } from '../theme';
import * as Icon from "react-native-feather";


const DeliveryScreen = () => {

  const resturant =featured.restaurants[0];
  const navigation = useNavigation();

  return (
    <View className="flex-1">
        <MapView
        initialRegion={{
            latitude:8.866194285377759,
            longitude: 77.49575827586199,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }} 
          className="flex-1"
          mapType="standard"
        >
            <Marker 
                coordinate={{
                    latitude: 8.866194285377759,
                    longitude: 77.49575827586199
                }} 
                title={resturant.name}
                description={resturant.description}
                pinColor={themeColors.bgColor(1)}
            />
        </MapView>

        <View className="rounded-t-3xl -mt-26 bg-white relative">
          <View className="flex-row justify-between items-center px-5 pt-10">

            <View>
              <Text className="font-bold text-gray-700 text-xl">
                Estimated Arrival
              </Text>
              <Text className="text-4xl font-bold text-gray-700 mt-3 mb-2">
                20- 30 Minutes
              </Text>
              <Text className="mt-2 text-gray-700 font-semibold">
                Your order is own its way!
              </Text>
            </View>

            <Image source={require("../assets/images/bikeGuy.png")}  className="w-24 h-24"/>
          </View>

          <TouchableOpacity className=" flex-row justify-between items-center  rounded-full bg-orange-500 p-2 m-1">

           <View className="flex-row items-center">

            <View>
            <Image source={require("../assets/images/testimage.png")} className="w-14 h-14 mr-5 rounded-full"/>
            </View>

           <View>
                   <Text className="text-white text-lg font-bold">Praveen sundar</Text>
                    <Text className="text-white">Your Rider</Text>
           </View>

           </View>

           <View className="flex-row">
              <TouchableOpacity className="bg-white p-2 rounded-full">
                 <Icon.Phone  stroke={1} fill={themeColors.bgColor(1)}/>
              </TouchableOpacity>

              <TouchableOpacity className="bg-white p-2 ml-2 rounded-full" onPress={()=>navigation.navigate("Home")}>
                 <Icon.X  strokeWidth={4} stroke={"red"} fill={themeColors.bgColor(1)}/>
              </TouchableOpacity>
           </View>

          </TouchableOpacity>

        
        </View>
    </View>
  )
}

export default DeliveryScreen;