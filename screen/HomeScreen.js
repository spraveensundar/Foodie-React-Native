import { View, Text, StatusBar, SafeAreaView, TextInput, ScrollView} from 'react-native';
import * as Icon from "react-native-feather";
import { themeColors } from '../theme';
import Categories from '../components/Categories';
import { featured } from '../constants';
import FeaturedRow from '../components/FeaturedRow';


export default function HomeScreen() {
    return (
      <SafeAreaView className="flex-1" style={{backgroundColor:"#eee"}}>

        <StatusBar barStyle="dark-content" backgroundColor={"#eee"}/>

        <View className="flex-row items-center px-5 space-x-3 py-4">

          <View className="flex-row flex-1 items-center rounded-full border p-1 border-gray-300">

            <Icon.Search stroke="gray" width={25} height={25} className="ml-2"/>
            <TextInput placeholder='Restaurants' className="ml-2 flex-1"/>

            <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 mr-2 border-gray-500">
              <Icon.MapPin stroke={"gray"} width={20} height={20}/>
              <Text>New York, NYC</Text>
            </View>

          </View>

          <View style={{backgroundColor:themeColors.text}} className="p-3 rounded-full bg-gray-300">
              <Icon.Sliders width={20} height={20} stroke={"white"} strokeWidth={2.5}/>
          </View>

        </View>


        <ScrollView 
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom:20
          }}>
              <Categories/>

              <View className="mt-5">
                {
                  [featured,featured,featured].map((item,index)=>{
                    return(
                        <FeaturedRow
                        key={index}
                        title={item.title}
                        restaurant={item.restaurants}
                        description={item.description}/>
                    )
                  })
                }
              </View>

        </ScrollView>




      </SafeAreaView>
    );
  }