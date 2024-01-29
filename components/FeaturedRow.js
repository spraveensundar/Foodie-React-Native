import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { themeColors } from '../theme';
import RestaurantCard from './RestaurantCard';

const FeaturedRow = ({title,restaurant,description}) => {
  return (
    <View>
      <View className="flex-row justify-between items-center px-4">
        <View>
            <Text className="font-bold text-lg text-black">{title}</Text>
            <Text className="text-gray-500 text-xs">
                {description}
            </Text>
        </View>

        <TouchableOpacity>
           <Text className="font-semibold" style={{color: themeColors.text}}>See All</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal:20
      }}
      className="overflow-visible py-5">
        {
            restaurant.map((restaurant, index)=>{
                return(
                    <RestaurantCard
                    item={restaurant}
                    key={index}/>
                )
            })
        }
      </ScrollView>
    </View>
  )
}

export default FeaturedRow;