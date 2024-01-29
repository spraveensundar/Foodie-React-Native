import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { themeColors } from '../theme';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectCardItem, selectCartTotal } from '../slice/cardSlice';
import { selectRestaurant} from '../slice/restaurantSlice';


const CardIcon = () => {

  const navigation = useNavigation();

  //const cartItes= useSelector(selectCardItem);

  //const cartTotal = useSelector(selectCartTotal);

  //Sif(!cartItes.length) return;

  return (
    <View className="absolute bottom-5 w-full z-50">
        <TouchableOpacity
          onPress={()=>navigation.navigate("Card")}
          className="mx-5 p-2 rounded-full items-center flex-row justify-between" style={{backgroundColor:themeColors.bgColor(1)}}>

            <View className="rounded-full p-2 px-4" style={{backgroundColor:"rgba(255,255,255,0.4)"}}>
                <Text className="text-xl text-white font-extrabold">10</Text>
            </View>

            <View>
                <Text className=" text-xl text-white font-extrabold">View Card</Text>
            </View>

            <View>
                <Text className="text-xl text-white font-extrabold mr-2">$30</Text>
            </View>
        </TouchableOpacity>
    </View>
  )
}

export default CardIcon;