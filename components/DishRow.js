import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import * as Icon from "react-native-feather";
import { themeColors } from '../theme';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeCard, selectCartItemById } from '../slice/cardSlice';



const DishRow = ({item}) => {

  //const dispatch = useDispatch();
  //const totalItems =useSelector(state =>selectCartItemById(state,item.id))

  //const handleIncrease =()=>{
   // dispatch(addToCart({...item}))
  //}


  //const handelDecrease =()=>{
    //dispatch(removeCard({id:item.id}))
 // }

  return (
    <View className="flex-row items-center bg-slate-100 rounded-xl shadow-2xl mb-4 mt-3 p-2">
        <Image className="rounded-xl" style={{height:120,width:150}} source={item.image}/>

        <View className="flex flex-1 space-y-4">

             <View className="pl-3">
                 <Text className="text-2xl font-bold text-neutral-950">{item.name}</Text>
                 <Text className="text-neutral-950">{item.description}</Text>
             </View>


             <View className="flex-row justify-between items-center pl-3">
                  <Text className="text-neutral-950 font-bold text-xl">${item.price}</Text>
                  <View className="flex-row items-center">

                    <TouchableOpacity
                      //onPress={handleIncrease}
                       className="p-1 rounded-full"
                       style={{backgroundColor:themeColors.bgColor(1)}}>
                      <Icon.Plus width={20} height={20} stroke={"white"}/>
                    </TouchableOpacity>
                    <Text className="mx-2 text-neutral-950">
                      10
                    </Text>
                    <TouchableOpacity
                      //onPress={handelDecrease}
                     //disabled={!totalItems.length}
                      className="p-1 rounded-full"
                      style={{backgroundColor:themeColors.bgColor(1)}}>
                      <Icon.Minus width={20} height={20} stroke={"white"}/>
                    </TouchableOpacity>

                  </View>
             </View>

        </View>
    </View>
  )
}

export default DishRow;