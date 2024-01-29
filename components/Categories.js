import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react'
import { categories } from '../constants';

const Categories = () => {

    const [activeCategory, SetActiveCategory] = useState(null);

  return (
    <View className="mt-1">

        <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="overflow-visible"
        contentContainerStyle={{
            paddingHorizontal:15
        }}>

            {
                categories.map((category,index)=>{
                    let isActive = category.id==activeCategory;
                    let btnClass = isActive? "bg-gray-800": "bg-gray-300";
                    let font = isActive? "font-semibold text-gray-800" :"text-gray-500"
                    return(
                        <View key={index} className="flex justify-center items-center mr-5">
                            <TouchableOpacity 
                                 onPress={()=> SetActiveCategory(category.id)}
                                  className={"p-2  rounded-full  bg- shadow bg-red-300 "+btnClass}>
                                <Image className="bg-cover bg-center rounded-full" style={{width: 50, height:50}} source={category.image}/>
                              </TouchableOpacity>
                              <Text className={font}>{category.name}</Text>
                        </View>
                    )
                })
            }


        </ScrollView>
    </View>
  )
}

export default Categories;