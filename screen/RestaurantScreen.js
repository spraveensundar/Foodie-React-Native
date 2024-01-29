import { View, Text, ScrollView, Image, StatusBar, TouchableOpacity} from 'react-native';
import React, { useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import * as Icon from "react-native-feather";
import { themeColors } from '../theme';
import { useNavigation } from '@react-navigation/native';
import DishRow from '../components/DishRow';
import CardIcon from '../components/CardIcon';
import { useDispatch } from 'react-redux';
import { setRestaurant } from '../slice/restaurantSlice';
const RestaurantScreen = () => {

  const{params}=useRoute();

  const navigation = useNavigation();

  const dispatch = useDispatch();
  
  
  let item = params;

  /*---useEffect(()=>{
    if(item && item.id){
      dispatch(setRestaurant({...item}))
    }
  },[])---*/

  return (
    
    <View>
      <CardIcon/>
      <StatusBar translucent={true} backgroundColor={"transparent"} barStyle={"light-content"}/>
       <ScrollView>
          <View className="relative">
             <Image className="w-full h-72" source={item.image}/>
             <TouchableOpacity
              onPress={()=>navigation.goBack()}
             className="absolute top-12 left-5 bg-white p-2 shadow rounded-full">
                <Icon.ArrowLeft strokeWidth={3} width={20} height={20} color={themeColors.text}/>
             </TouchableOpacity>

          </View>

          <View style={{borderTopRightRadius:40,borderTopLeftRadius:40}} className="bg-white -mt-12 pt-6">
            <View>
               <Text className="px-5 text-3xl text-black font-bold">{item.name}</Text>
            </View>
          

          <View className="px-3 mt-1 flex-row">
            <View className="flex-row items-center space-x-1 mb-2">
                <Image source={require("../assets/images/fullStar.png")} className="w-4 h-4"/>
                <Text className="text-sm text-black">
                    <Text>{item.stars}</Text>
                    <Text> ({item.reviews} reviews) ‧ <Text className="font-bold"> {item.category} </Text></Text>
                </Text>
            </View>

            <View className="flex-row items-center  mb-2">
                <Icon.MapPin color="gray" width="15" height="15" className="text-neutral-900"/>
                <Text className="text-neutral-900">  Nearly  ‧ {item.address}</Text>
            </View>

        </View>

        <View className="px-5">
          <Text className="text-lg  text-black mb-3">{item.description}</Text>
        </View>

        </View>


        <View className="pb-32 bg-white px-5">
           <Text className="text-2xl text-neutral-900 font-bold">Menu</Text>
           {
                item.dishes.map((dish, index)=>{
                  return(
                      <DishRow item={{...dish}} key={index}/>
                  )
                })
           }
        </View>

      </ScrollView>

    </View>
  )
}

export default RestaurantScreen;