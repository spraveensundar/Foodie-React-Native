import { View, Text, TouchableWithoutFeedback, Image } from 'react-native';
import React from 'react';
import * as Icon from "react-native-feather";
import { useNavigation } from '@react-navigation/native';

const RestaurantCard = ({item}) => {

  const navigation = useNavigation();


  return (
  <TouchableWithoutFeedback
    onPress={()=>navigation.navigate("Restaurant",{...item})}>
     <View style={{
        shadowColor:"rgba(251, 146, 60, 0.5)",
        shadowRadius:7}}>
      <View className="mr-5 rounded-3xl bg-white shadow-lg mb-2">
        <Image className="w-60 h-36 rounded-t-3xl" source={item.image}/>

        <View className="px-3 mt-1">
            <Text className="text-lg text-black font-bold">{item.name}</Text>
            <View className="flex-row items-center space-x-1 mb-2">
                <Image source={require("../assets/images/fullStar.png")} className="w-4 h-4"/>
                <Text className="text-sm text-black">
                    <Text>{item.stars}</Text>
                    <Text> ({item.reviews} reviews) ‧ <Text className="font-bold">{item.category}</Text></Text>
                </Text>
            </View>

            <View className="flex-row items-center  mb-2">
                <Icon.MapPin color="gray" width="15" height="15" className="text-neutral-900"/>
                <Text className="text-neutral-900">  Nearly  ‧ {item.address}</Text>
            </View>

        </View>

      </View>
    </View>
  </TouchableWithoutFeedback>
  )
}

export default RestaurantCard;